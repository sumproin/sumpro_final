import React, { useState, useRef } from 'react';
import { Briefcase, MapPin, Clock, Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/ScrollReveal';
import { JOBS } from '../constants';

const baseURL = import.meta.env.VITE_API_BASE_URL;; // Use environment variable for backend URL

const Careers: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    position: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState<{ loading: boolean; success: boolean; error: string | null }>({
    loading: false,
    success: false,
    error: null,
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    if (!resume) {
      setStatus({ loading: false, success: false, error: "Please upload your resume." });
      return;
    }

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('position', formData.position);
    data.append('resume', resume);

    console.log('Submitting application with data:', {
      fullName: formData.fullName,
      email: formData.email,
      position: formData.position,
      resumeFileName: resume.name,
    });

    try {
      const response = await fetch(`${baseURL}/applications`, {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      console.log('Application submission result:', result);

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        // Reset form
        setFormData({ fullName: '', email: '', position: '' });
        setResume(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        setStatus({ loading: false, success: false, error: result.message || 'Submission failed.' });
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setStatus({ loading: false, success: false, error: 'Server error. Please try again later.' });
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-dark">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Build your future with SumPro. We are always looking for passionate individuals ready to make a difference in technology and corporate services.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Job Listings List */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal animation="fade-right">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Briefcase className="text-primary" /> Open Positions
              </h2>
            </ScrollReveal>
            
            {JOBS.map((job, idx) => (
                <ScrollReveal key={job.id} animation="fade-up" delay={`${idx * 0.1}s`}>
                    <div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                            <h3 className="text-xl font-bold text-white">{job.title}</h3>
                            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold w-fit">
                                {job.type}
                            </span>
                        </div>
                        <p className="text-gray-400 mb-6">{job.description}</p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-sm text-gray-500 border-t border-white/10 pt-4">
                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Posted 2 days ago</span>
                            <div className="sm:ml-auto">
                                <button className="text-primary hover:text-white transition-colors font-medium">View Details &rarr;</button>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            ))}

            {/* Internship Teaser */}
            <ScrollReveal animation="fade-up" delay="0.3s">
                <div className="mt-12 bg-gradient-to-r from-primary to-orange-600 rounded-xl p-8 text-white shadow-lg">
                    <h3 className="text-2xl font-bold mb-3">Looking for Internships?</h3>
                    <p className="mb-6 opacity-90">Kickstart your career with our industry-focused internship programs. Work on live projects and get certified.</p>
                    <Button variant="white" size="sm">Explore Internships</Button>
                </div>
            </ScrollReveal>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-1">
            <ScrollReveal animation="fade-left" delay="0.2s">
                <div className="glass-card p-8 rounded-xl sticky top-24">
                    <h2 className="text-2xl font-bold text-white mb-6">Apply Now</h2>
                    
                    {status.success ? (
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center">
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-8 h-8 text-green-500" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Application Received!</h3>
                        <p className="text-gray-400 text-sm">Thank you for applying. Our HR team will review your profile and get back to you soon.</p>
                        <button 
                          onClick={() => setStatus({ ...status, success: false })}
                          className="mt-4 text-primary text-sm hover:underline"
                        >
                          Submit another application
                        </button>
                      </div>
                    ) : (
                      <form className="space-y-4" onSubmit={handleSubmit}>
                          {status.error && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-start gap-3 text-red-400 text-sm">
                              <AlertCircle className="w-5 h-5 shrink-0" />
                              <span>{status.error}</span>
                            </div>
                          )}

                          <div>
                              <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                              <input 
                                type="text" 
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                                placeholder="John Doe" 
                                required
                              />
                          </div>
                          <div>
                              <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                              <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                                placeholder="john@example.com" 
                                required
                              />
                          </div>
                          <div>
                              <label className="block text-sm font-medium text-gray-400 mb-1">Position Applied For</label>
                              <select 
                                name="position"
                                value={formData.position}
                                onChange={handleInputChange}
                                className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                required
                              >
                                  <option value="">Select a position...</option>
                                  {JOBS.map(j => <option key={j.id} value={j.title}>{j.title}</option>)}
                                  <option value="Internship">Internship</option>
                                  <option value="General Application">General Application</option>
                              </select>
                          </div>
                          <div>
                              <label className="block text-sm font-medium text-gray-400 mb-1">Resume / CV (PDF/Doc)</label>
                              <div className="relative">
                                <input 
                                  type="file" 
                                  ref={fileInputRef}
                                  onChange={handleFileChange}
                                  accept=".pdf,.doc,.docx"
                                  className="hidden" 
                                  id="resume-upload"
                                />
                                <label 
                                  htmlFor="resume-upload"
                                  className={`w-full flex items-center justify-between bg-dark border ${resume ? 'border-primary text-white' : 'border-white/10 text-gray-400'} rounded-lg px-4 py-3 cursor-pointer hover:bg-white/5 transition-colors`}
                                >
                                  <span className="truncate">{resume ? resume.name : 'Choose File...'}</span>
                                  <Upload className="w-4 h-4" />
                                </label>
                              </div>
                          </div>
                          <div className="pt-4">
                              <Button fullWidth type="submit" disabled={status.loading}>
                                {status.loading ? (
                                  <span className="flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                                  </span>
                                ) : (
                                  'Submit Application'
                                )}
                              </Button>
                          </div>
                      </form>
                    )}
                </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;