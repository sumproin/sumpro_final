import React from 'react';
import { Target, Lightbulb, Heart } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import { CORE_VALUES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-dark">
      {/* Overview Header */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        About <span className="text-primary">sumPRO</span>
                    </h1>
                    <h2 className="text-xl text-gray-300 mb-6 font-medium">
                        Driving Digital Transformation & Corporate Compliance
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        sumPRO is a premier solutions provider bridging the gap between complex technology needs and statutory compliance. Established with a vision to simplify corporate operations, we bring together experts from IT, Human Resources, and Legal sectors to offer a holistic service experience.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Our commitment goes beyond service delivery; we aim to be partners in your growth, ensuring your infrastructure is robust, your workforce is skilled, and your business is compliant with all regulations.
                    </p>
                </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left">
                <div className="relative">
                    <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                        alt="Our Team" 
                        className="relative rounded-2xl shadow-2xl border border-white/10"
                    />
                </div>
            </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary/50 py-20 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ScrollReveal animation="fade-up" delay="0.1s" className="h-full">
                    <div className="glass-panel p-8 rounded-2xl border-l-4 border-primary h-full">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Target className="text-primary w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                        </div>
                        <p className="text-gray-400">
                            To empower businesses with seamless technology integration, compliant frameworks, and skilled human capital, enabling them to focus on their core innovations.
                        </p>
                    </div>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay="0.2s" className="h-full">
                    <div className="glass-panel p-8 rounded-2xl border-l-4 border-blue-500 h-full">
                         <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg">
                                <Lightbulb className="text-blue-500 w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                        </div>
                        <p className="text-gray-400">
                            To be the global benchmark for integrated corporate solutions, recognized for trust, quality, and technological advancement.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6">
        <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Why Choose <span className="text-primary">sumPRO</span>?</h2>
                <p className="text-gray-400">Our core values define who we are and how we serve you.</p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, idx) => (
                <ScrollReveal key={idx} animation="zoom-in" delay={`${idx * 0.1}s`} className="h-full">
                    <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors text-center group h-full">
                        <div className="mx-auto w-16 h-16 bg-dark rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-black/20 border border-white/5">
                            <value.icon className="text-primary w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                        <p className="text-gray-400 text-sm">{value.description}</p>
                    </div>
                </ScrollReveal>
            ))}
        </div>
      </section>
    </div>
  );
};

export default About;