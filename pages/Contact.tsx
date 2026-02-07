import React from 'react';
import { Mail, Phone, MapPin, Globe, Instagram, Facebook, Twitter, ArrowRight, MessageCircle } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="pt-32 pb-20 container mx-auto px-6 relative z-10">
        <ScrollReveal animation="fade-down">
            <div className="text-center mb-16 md:mb-20">
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                    Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Collaborate</span>
                </h1>
                <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
                    Ready to transform your business infrastructure? Reach out to us for consulting, support, or partnership opportunities.
                </p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Contact Info & Locations (Span 7) */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
                {/* Contact Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ScrollReveal animation="fade-up" delay="0.1s" className="h-full">
                        <div className="group bg-secondary/50 backdrop-blur-md border border-white/5 p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 hover:border-primary/30 relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Phone className="w-24 h-24 text-primary" />
                            </div>
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Phone className="text-primary w-6 h-6" />
                            </div>
                            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Call Us</h3>
                            <div className="space-y-1">
                                <a href="tel:+919288038926" className="block text-xl font-bold text-white hover:text-primary transition-colors">+91 9288038926</a>
                                <a href="tel:+918051388125" className="block text-xl font-bold text-white hover:text-primary transition-colors">+91 8051388125</a>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay="0.2s" className="h-full">
                        <div className="group bg-secondary/50 backdrop-blur-md border border-white/5 p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 hover:border-primary/30 relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Mail className="w-24 h-24 text-primary" />
                            </div>
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Mail className="text-primary w-6 h-6" />
                            </div>
                            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Email Us</h3>
                            <a href="mailto:contact@sumpro.in" className="block text-xl font-bold text-white hover:text-primary transition-colors break-words">contact@sumpro.in</a>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Locations - Wide Card */}
                <ScrollReveal animation="fade-up" delay="0.3s">
                    <div className="bg-gradient-to-br from-secondary/80 to-secondary/40 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-16 -mt-16"></div>
                        
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                             <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                                <MapPin className="text-primary w-6 h-6" />
                             </div>
                             <h2 className="text-2xl font-bold text-white">Our Offices</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                            <div className="relative group">
                                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                <div className="pl-6">
                                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 block">Headquarters</span>
                                    <h4 className="text-xl font-bold text-white mb-2">Bihar</h4>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        0028, Maheshpur, Korha,<br />
                                        Katihar - 854108
                                    </p>
                                </div>
                            </div>
                             <div className="relative group">
                                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-white/20 to-transparent rounded-full group-hover:from-primary transition-all"></div>
                                <div className="pl-6">
                                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 block">Branch Office</span>
                                    <h4 className="text-xl font-bold text-white mb-2">Delhi</h4>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        Kalu Old Building, Kotla Chowk,<br />
                                        Mayur Vihar -1, Delhi - 110091
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Right Column - Social & QR (Span 5) */}
            <div className="lg:col-span-5 space-y-8">
                 <ScrollReveal animation="fade-left" delay="0.4s" className="h-full">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 h-full flex flex-col relative overflow-hidden shadow-2xl shadow-black/20">
                        {/* Decorative Gradient Background */}
                         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 pointer-events-none"></div>

                         <div className="mb-10 text-center">
                            <h2 className="text-2xl font-bold text-white mb-3">Connect Digitally</h2>
                            <p className="text-gray-400 text-sm">Scan the code or click the links below to connect with our business accounts.</p>
                         </div>

                         {/* QR Code Section - Centered and highlighted */}
                         <div className="flex justify-center mb-12">
                             <div className="relative group">
                                 <div className="absolute -inset-1 bg-gradient-to-tr from-primary via-orange-500 to-purple-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                                 <div className="relative bg-white p-5 rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform">
                                     <img 
                                        src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://instagram.com/sumpro.in" 
                                        alt="Instagram QR" 
                                        className="w-48 h-48 object-contain" 
                                     />
                                     <div className="mt-3 flex items-center justify-center gap-2">
                                        <Instagram className="w-4 h-4 text-black" />
                                        <span className="text-black font-bold text-sm tracking-wide">@SUMPRO.IN</span>
                                     </div>
                                 </div>
                             </div>
                         </div>

                         {/* Social Buttons Stack */}
                         <div className="space-y-3 mt-auto relative z-10">
                            <SocialLink 
                                href="https://wa.link/p4hftd"
                                icon={MessageCircle}
                                label="WhatsApp Business"
                                color="bg-[#25D366] hover:bg-[#20bd5a]"
                            />
                            <SocialLink 
                                href="https://www.instagram.com/sumpro.in?utm_source=qr&igsh=YXZmNW51b3luYTBu"
                                icon={Instagram}
                                label="Instagram"
                                color="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90"
                            />
                            <SocialLink 
                                href="https://www.facebook.com/share/1DRHeYZLnC/"
                                icon={Facebook}
                                label="Facebook Page"
                                color="bg-[#1877F2] hover:bg-[#166fe5]"
                            />
                            <SocialLink 
                                href="https://x.com/in_sumPRO"
                                icon={Twitter}
                                label="Follow on X"
                                color="bg-black border border-white/20 hover:bg-black/80"
                            />
                             {/* <SocialLink 
                                href="https://www.sumpro.in"
                                icon={Globe}
                                label="Visit Website"
                                color="bg-secondary border border-white/10 hover:bg-white/5"
                            /> */}
                         </div>
                    </div>
                 </ScrollReveal>
            </div>
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon: Icon, label, color }: any) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`flex items-center justify-between px-6 py-4 rounded-xl text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg group ${color}`}
    >
        <div className="flex items-center gap-4">
            <Icon className="w-5 h-5" />
            <span className="font-semibold">{label}</span>
        </div>
        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
    </a>
);

export default Contact;