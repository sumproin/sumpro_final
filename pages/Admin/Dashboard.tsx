import React, { useState, useEffect, useCallback } from "react";
import {
  LogOut,
  LayoutDashboard,
  MessageSquare,
  Briefcase,
  Users,
  TrendingUp,
  Bell,
  Search,
  MoreVertical,
  CheckCircle,
  XCircle,
  Clock,
  Activity,
  FileText,
  Download,
  Trash2,
  RefreshCw,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { MOCK_INQUIRIES } from "../../constants";
import Button from "../../components/ui/Button";
const baseURL = import.meta.env.VITE_API_BASE_URL;

interface Application {
  _id: string;
  fullName: string;
  email: string;
  position: string;
  status: string;
  resume: string;
  createdAt: string;
}

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<
    "overview" | "inquiries" | "applications"
  >("overview");

  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoadingApps, setIsLoadingApps] = useState(false);

  // Fetch Applications from Backend
  const fetchApplications = useCallback(async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) return;

    setIsLoadingApps(true);
    try {
      const response = await fetch(`${baseURL}/applications`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setApplications(data);
      } else {
        console.error("Failed to fetch applications");
        // If 401, maybe logout?
        if (response.status === 401) {
          logout();
          navigate("/admin/login");
        }
      }
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setIsLoadingApps(false);
    }
  }, [logout, navigate]);

  // Initial Fetch
  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const handleDeleteApplication = async (id: string) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this application? This action cannot be undone.",
      )
    ) {
      return;
    }

    const token = localStorage.getItem("adminToken");
    try {
      const response = await fetch(`${baseURL}/applications/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setApplications((prev) => prev.filter((app) => app._id !== id));
      } else {
        alert("Failed to delete application");
      }
    } catch (error) {
      console.error("Error deleting application:", error);
      alert("An error occurred while deleting.");
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getResumeLink = (path: string) => {
    if (!path) return "#";
    // If it's a full URL (Cloudinary), return as is. Otherwise prepend baseURL (Legacy/Local uploads)
    return path.startsWith("http") ? path : `${baseURL}/${path}`;
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-secondary border-r border-white/10 flex-shrink-0">
        <div className="p-6 border-b border-white/10 flex items-center gap-2">
          <Activity className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold text-white">
            Sum<span className="text-primary">Admin</span>
          </span>
        </div>

        <nav className="p-4 space-y-2">
          <SidebarItem
            icon={LayoutDashboard}
            label="Overview"
            active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
          />
          {/* <SidebarItem 
            icon={MessageSquare} 
            label="Inquiries" 
            active={activeTab === 'inquiries'} 
            onClick={() => setActiveTab('inquiries')} 
          /> */}
          <SidebarItem
            icon={Briefcase}
            label="Applications"
            active={activeTab === "applications"}
            onClick={() => setActiveTab("applications")}
          />
          {/* <SidebarItem 
            icon={Users} 
            label="Users" 
            active={false} 
          /> */}
        </nav>

        <div className="p-4 mt-auto border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-400 hover:text-red-300 w-full px-4 py-2 rounded-lg transition-colors hover:bg-red-500/10"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen">
        {/* Header */}
        <header className="h-16 bg-secondary/50 backdrop-blur border-b border-white/5 flex items-center justify-between px-8 sticky top-0 z-30">
          <h2 className="text-white font-semibold capitalize">{activeTab}</h2>
          <div className="flex items-center gap-6">
            <button
              onClick={fetchApplications}
              className="text-gray-400 hover:text-white transition-colors"
              title="Refresh Data"
              disabled={isLoadingApps}
            >
              <RefreshCw
                className={`w-5 h-5 ${isLoadingApps ? "animate-spin text-primary" : ""}`}
              />
            </button>
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="bg-black/20 border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm text-gray-300 focus:outline-none focus:border-primary"
              />
              <Search className="w-4 h-4 text-gray-500 absolute left-3 top-2" />
            </div>
            <button className="relative text-gray-400 hover:text-white">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary text-primary flex items-center justify-center font-bold text-sm">
              AD
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* <StatCard title="Total Inquiries" value={MOCK_INQUIRIES.length} icon={MessageSquare} color="text-blue-400" /> */}
                <StatCard
                  title="Job Applications"
                  value={applications.length}
                  icon={Briefcase}
                  color="text-purple-400"
                />
                <StatCard
                  title="Active Jobs"
                  value="3"
                  icon={Users}
                  color="text-green-400"
                />
                <StatCard
                  title="Traffic (MoM)"
                  value="+12.5%"
                  icon={TrendingUp}
                  color="text-primary"
                />
              </div>

              {/* Recent Activity Section */}
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                {/* <div className="bg-secondary/40 border border-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-white">
                      Recent Inquiries
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setActiveTab("inquiries")}
                    >
                      View All
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {MOCK_INQUIRIES.slice(0, 3).map((inq) => (
                      <div
                        key={inq.id}
                        className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div>
                          <p className="text-white font-medium">{inq.name}</p>
                          <p className="text-xs text-gray-400">{inq.subject}</p>
                        </div>
                        <StatusBadge status={inq.status} />
                      </div>
                    ))}
                  </div>
                </div> */}

                <div className="bg-secondary/40 border border-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-white">
                      Recent Applications
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setActiveTab("applications")}
                    >
                      View All
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {applications.slice(0, 3).map((app) => (
                      <div
                        key={app._id}
                        className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div>
                          <p className="text-white font-medium">
                            {app.fullName}
                          </p>
                          <p className="text-xs text-gray-400">
                            {app.position}
                          </p>
                        </div>
                        <StatusBadge status={app.status} />
                      </div>
                    ))}
                    {applications.length === 0 && (
                      <p className="text-gray-500 text-sm text-center py-4">
                        {isLoadingApps
                          ? "Loading..."
                          : "No applications received yet."}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "inquiries" && (
            <div className="glass-panel rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10 text-gray-400 text-sm uppercase">
                      <th className="p-4 font-medium">Name</th>
                      <th className="p-4 font-medium">Subject</th>
                      <th className="p-4 font-medium">Email</th>
                      <th className="p-4 font-medium">Date</th>
                      <th className="p-4 font-medium">Status</th>
                      <th className="p-4 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {MOCK_INQUIRIES.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-white/5 transition-colors"
                      >
                        <td className="p-4 text-white font-medium">
                          {item.name}
                        </td>
                        <td className="p-4 text-gray-300">{item.subject}</td>
                        <td className="p-4 text-gray-400 text-sm">
                          {item.email}
                        </td>
                        <td className="p-4 text-gray-400 text-sm">
                          {item.date}
                        </td>
                        <td className="p-4">
                          <StatusBadge status={item.status} />
                        </td>
                        <td className="p-4 text-right">
                          <button className="text-gray-400 hover:text-white">
                            <MoreVertical className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "applications" && (
            <div className="glass-panel rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10 text-gray-400 text-sm uppercase">
                      <th className="p-4 font-medium">Candidate</th>
                      <th className="p-4 font-medium">Position</th>
                      <th className="p-4 font-medium">Email</th>
                      <th className="p-4 font-medium">Date</th>
                      <th className="p-4 font-medium">Resume</th>
                      <th className="p-4 font-medium">Status</th>
                      <th className="p-4 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {applications.map((item) => (
                      <tr
                        key={item._id}
                        className="hover:bg-white/5 transition-colors"
                      >
                        <td className="p-4 text-white font-medium">
                          {item.fullName}
                        </td>
                        <td className="p-4 text-gray-300">{item.position}</td>
                        <td className="p-4 text-gray-400 text-sm">
                          {item.email}
                        </td>
                        <td className="p-4 text-gray-400 text-sm">
                          {formatDate(item.createdAt)}
                        </td>
                        <td className="p-4">
                          <a
                            href={getResumeLink(item.resume)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-primary hover:text-white transition-colors text-sm"
                          >
                            <FileText className="w-4 h-4" /> View
                          </a>
                        </td>
                        <td className="p-4">
                          <StatusBadge status={item.status} />
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => handleDeleteApplication(item._id)}
                            className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-full transition-colors"
                            title="Delete Application"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {applications.length === 0 && (
                      <tr>
                        <td
                          colSpan={7}
                          className="p-8 text-center text-gray-500"
                        >
                          {isLoadingApps
                            ? "Loading applications..."
                            : "No applications found."}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

// Sub-components for Dashboard
const SidebarItem = ({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: any;
  label: string;
  active: boolean;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${active ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
  >
    <Icon className="w-5 h-5" />
    <span className="font-medium">{label}</span>
  </button>
);

const StatCard = ({
  title,
  value,
  icon: Icon,
  color,
}: {
  title: string;
  value: string | number;
  icon: any;
  color: string;
}) => (
  <div className="bg-secondary/40 border border-white/5 p-6 rounded-xl hover:bg-white/5 transition-colors group">
    <div className="flex items-start justify-between mb-4">
      <div>
        <p className="text-gray-400 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-white mt-1 group-hover:scale-105 transition-transform origin-left">
          {value}
        </h3>
      </div>
      <div className={`p-3 rounded-lg bg-white/5 ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  </div>
);

const StatusBadge = ({ status }: { status: string }) => {
  let styles = "bg-gray-500/10 text-gray-400 border-gray-500/20";
  let Icon = Clock;

  if (["New", "Pending"].includes(status)) {
    styles = "bg-blue-500/10 text-blue-400 border-blue-500/20";
  } else if (["Resolved", "Interview", "Hired"].includes(status)) {
    styles = "bg-green-500/10 text-green-400 border-green-500/20";
    Icon = CheckCircle;
  } else if (["Rejected"].includes(status)) {
    styles = "bg-red-500/10 text-red-400 border-red-500/20";
    Icon = XCircle;
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${styles}`}
    >
      <Icon className="w-3 h-3" />
      {status}
    </span>
  );
};

export default Dashboard;
