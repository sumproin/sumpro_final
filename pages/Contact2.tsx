import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/ScrollReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [status, setStatus] = useState<{ loading: boolean; success: boolean; error: string | null }>({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ firstName: '', lastName: '', email: '', subject: 'General Inquiry', message: '' });
      } else {
        setStatus({ loading: false, success: false, error: data.message || 'Failed to send message.' });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: 'Server error. Please try again later.' });
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-dark">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Have a project in mind or need assistance with compliance? Our team is here to help you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <ScrollReveal animation="fade-right">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="glass-panel p-6 rounded-xl">
                        <Phone className="text-primary w-8 h-8 mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                        <p className="text-gray-400">+91 987 654 3210</p>
                        <p className="text-gray-400">+91 123 456 7890</p>
                    </div>
                    <div className="glass-panel p-6 rounded-xl">
                        <Mail className="text-primary w-8 h-8 mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                        <p className="text-gray-400">info@sumpro.com</p>
                        <p className="text-gray-400">support@sumpro.com</p>
                    </div>
                    <div className="glass-panel p-6 rounded-xl sm:col-span-2">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-primary w-8 h-8 shrink-0" />
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Headquarters</h3>
                                <p className="text-gray-400">123 Tech Park Avenue, Cyber City, Sector 4, Bangalore, India - 560100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Google Map */}
            <ScrollReveal animation="fade-up" delay="0.2s">
                <iframe
                  src="https://www.google.com/maps?q=Maheshpur,Bihar&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: "12px" }}
                  loading="lazy"
                  title="map"
                  className="shadow-2xl border border-white/10"
                ></iframe>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal animation="fade-left" delay="0.1s">
            <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                
                {status.success ? (
                   <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
                     <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                       <CheckCircle className="w-10 h-10 text-green-500" />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                     <p className="text-gray-400 max-w-sm">
                       Thank you for contacting us. We have received your message and will get back to you shortly.
                     </p>
                     <button 
                       onClick={() => setStatus({ ...status, success: false })}
                       className="mt-8 text-primary font-medium hover:underline"
                     >
                       Send another message
                     </button>
                   </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                      {status.error && (
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-start gap-3 text-red-400 text-sm">
                          <AlertCircle className="w-5 h-5 shrink-0" />
                          <span>{status.error}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                              <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                              <input 
                                type="text" 
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                              />
                          </div>
                          <div>
                              <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                              <input 
                                type="text" 
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                              />
                          </div>
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                          <select 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          >
                              <option value="General Inquiry">General Inquiry</option>
                              <option value="Service Request">Service Request</option>
                              <option value="Partnership">Partnership</option>
                              <option value="Career">Career</option>
                          </select>
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                          <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5} 
                            className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          ></textarea>
                      </div>
                      <Button fullWidth size="lg" type="submit" disabled={status.loading}>
                        {status.loading ? (
                          <span className="flex items-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                  </form>
                )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;