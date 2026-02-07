import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/ScrollReveal';
import { SERVICES } from '../constants';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="flex flex-col bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <ScrollReveal animation="fade-right">
            <button 
              onClick={() => navigate('/services')}
              className="group flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </button>
            <div className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-6">
               <span className="text-primary font-semibold text-sm uppercase tracking-wider">Service Focus</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl leading-tight">
              {service.title}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left: Detailed Description & Features */}
            <div className="lg:col-span-2 space-y-12">
              <ScrollReveal animation="fade-up">
                <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
                <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                  {service.longDescription}
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay="0.2s">
                <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                <div className="bg-secondary/30 rounded-2xl p-8 border border-white/5">
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                        <span className="text-gray-300 font-medium text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay="0.4s">
                <h3 className="text-2xl font-bold text-white mb-6">Business Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
                      <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{benefit.detail}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Sidebar / CTA */}
            <div className="lg:col-span-1">
              <ScrollReveal animation="fade-left" delay="0.3s" className="sticky top-24 space-y-8">
                {/* Visual Icon Card */}
                <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center border-t-4 border-primary">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Ready to Upgrade?</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Leverage our expertise in {service.title} to transform your operations today.
                  </p>
                  <Button fullWidth onClick={() => navigate('/contact')}>
                    Get a Quote
                  </Button>
                </div>

                {/* Quick Info */}
                <div className="bg-secondary p-6 rounded-2xl border border-white/5">
                   <h4 className="text-white font-bold mb-4">Why sumPRO?</h4>
                   <ul className="space-y-3 text-sm text-gray-400">
                     <li className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                       Certified Experts
                     </li>
                     <li className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                       24/7 Dedicated Support
                     </li>
                     <li className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                       Cost-Effective Solutions
                     </li>
                   </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-transparent border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal animation="zoom-in">
             <h2 className="text-3xl font-bold text-white mb-6">Need a custom solution?</h2>
             <p className="text-gray-300 max-w-2xl mx-auto mb-8">
               Our team can tailor a {service.title} package specifically for your industry requirements.
             </p>
             <Button size="lg" onClick={() => navigate('/contact')}>
               Contact Sales <ArrowRight className="ml-2 w-5 h-5" />
             </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;