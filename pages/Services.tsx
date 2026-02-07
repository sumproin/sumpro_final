import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/ScrollReveal';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-20 min-h-screen bg-dark">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Business <span className="text-primary">Services</span>
            </h1>
            <p className="text-gray-400 text-lg">
              We provide a comprehensive suite of services designed to modernize your infrastructure, ensure compliance, and streamline operations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ScrollReveal 
              key={service.id} 
              animation="fade-up" 
              delay={`${index * 0.1}s`}
              className="h-full"
            >
              <div 
                className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
              >
                <div className="h-56 overflow-hidden relative shrink-0">
                  <div className="absolute inset-0 bg-secondary/30 z-10 group-hover:bg-transparent transition-all duration-500"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-dark to-transparent opacity-80 z-10"></div>
                  <div className="absolute bottom-4 left-4 z-20 w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-110 transition-transform">
                    <service.icon className="text-primary w-7 h-7" />
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                      {service.title}
                  </h3>
                  <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                      <Button 
                        variant="outline" 
                        fullWidth 
                        className="group-hover:bg-primary group-hover:border-primary group-hover:text-white"
                        onClick={() => navigate(`/services/${service.id}`)}
                      >
                          Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;