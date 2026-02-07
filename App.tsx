import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import ScrollReveal from './components/ui/ScrollReveal';
import { AuthProvider } from './context/AuthContext';
import './index.css'; // Global styles including Tailwind

// Scroll to top on route change wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Simple placeholder for Training page to re-use structure or create new
const Training = () => (
  <div className="pt-24 pb-20 min-h-screen bg-dark container mx-auto px-6">
    <ScrollReveal animation="fade-up">
      <div className="glass-panel p-12 rounded-2xl text-center border-t-4 border-primary">
         <h1 className="text-4xl font-bold text-white mb-6">Corporate Training Curriculum</h1>
         <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
           Our modules are designed to provide hands-on experience in the latest technologies. 
           From Cloud Computing to Network Security, we cover it all.
         </p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {['Python & Data Science', 'Full Stack Development', 'AWS & Azure Cloud', 'Cyber Security Basics', 'HR Analytics', 'Business Communication'].map((item) => (
              <div key={item} className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-3">
                 <div className="w-2 h-2 bg-primary rounded-full"></div>
                 <span className="text-white font-medium">{item}</span>
              </div>
            ))}
         </div>
      </div>
    </ScrollReveal>
  </div>
);

// Layout wrapper to conditionally render Header/Footer
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  // Hide Header/Footer on Admin routes
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="bg-dark min-h-screen text-slate-200 font-sans selection:bg-primary selection:text-white">
      {!isAdminRoute && <Header />}
      <main className={`flex-grow ${!isAdminRoute ? '' : 'h-full'}`}>
        {children}
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/training" element={<Training />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </MainLayout>
      </Router>
    </AuthProvider>
  );
};

export default App;