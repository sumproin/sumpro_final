import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Trophy, 
  Users, 
  Building2, 
  ArrowUpRight, 
  MessageSquare, 
  Handshake,
  Award,
  Target,
  Clock,
  Shield
} from 'lucide-react';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/ScrollReveal';
import { SERVICES } from '../constants';

const FUNDAMENTALS = [
  "Strategic Innovation", "24/7 Support", "Global Compliance", "Data Security", "Agile Development", 
  "Expert Consulting", "Cloud Native", "Statutory Excellence", "Workforce Planning", "Sustainable Growth"
];

const STATS = [
  { label: "Years of Experience", value: "12+", icon: Trophy },
  { label: "Projects Delivered", value: "50+", icon: CheckCircle },
  { label: "Corporate Clients", value: "20+", icon: Building2 },
  { label: "Expert Consultants", value: "50+", icon: Users },
];

const BRANDS = [
  { name: "Stratos", url: "https://placehold.co/180x60/020617/ffffff?text=STRATOS&font=montserrat" },
  { name: "EcoSys", url: "https://placehold.co/180x60/020617/ffffff?text=ECOSYS&font=playfair-display" },
  { name: "Hyperion", url: "https://placehold.co/180x60/020617/ffffff?text=HYPERION&font=merriweather" },
  { name: "Nexa", url: "https://placehold.co/180x60/020617/ffffff?text=NEXA&font=raleway" },
  { name: "Vantage", url: "https://placehold.co/180x60/020617/ffffff?text=VANTAGE&font=lato" },
  { name: "Zenith", url: "https://placehold.co/180x60/020617/ffffff?text=ZENITH&font=oswald" },
  { name: "Apex", url: "https://placehold.co/180x60/020617/ffffff?text=APEX&font=roboto" },
  { name: "Vertex", url: "https://placehold.co/180x60/020617/ffffff?text=VERTEX&font=open-sans" },
  { name: "Horizon", url: "https://placehold.co/180x60/020617/ffffff?text=HORIZON&font=rubik" },
  { name: "Global", url: "https://placehold.co/180x60/020617/ffffff?text=GLOBAL&font=poppins" },
];

const WHY_CHOOSE_US = [
  {
    title: "Proven Expertise",
    description: "Over a decade of experience delivering mission-critical solutions for Fortune 500 companies.",
    icon: Award
  },
  {
    title: "Tailored Solutions",
    description: "We don't believe in one-size-fits-all. Every strategy is customized to your specific business goals.",
    icon: Target
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support teams are available round-the-clock to ensure your operations never stop.",
    icon: Clock
  },
  {
    title: "Enterprise Security",
    description: "Security is ingrained in our DNA. We adhere to the strictest global compliance and security standards.",
    icon: Shield
  }
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-dark overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Data Center Technology" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-7 gap-12 items-center">
          <ScrollReveal animation="fade-right" duration="1s" className="col-span-4">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Trusted Corporate Partner</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Comprehensive <span className="text-primary">Solutions</span> Across Technology, Infrastructure & Compliance
              </h1>
              <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                Delivering end-to-end technology, infrastructure, HR, security, and statutory compliance services under one trusted brand.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => navigate('/services')}>Get Started</Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/contact')}>Contact Us</Button>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-left" duration="1.2s" className="hidden lg:block relative group col-span-3">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full animate-pulse-slow"></div>
            {/* Updated Hero Side Image to Corporate Meeting */}
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
              alt="Strategic Corporate Meeting" 
              className="relative rounded-2xl border border-white/10 shadow-2xl shadow-black/50 transform group-hover:scale-[1.02] transition-transform duration-700"
            />
            {/* Floating Glass Cards */}
            <div className="absolute -bottom-10 -left-10 glass-panel p-4 rounded-xl flex items-center gap-4 animate-bounce duration-[3000ms]">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <CheckCircle className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-white font-bold">100%</p>
                <p className="text-xs text-gray-300">Compliance Rate</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fundamentals Marquee */}
      <ScrollReveal animation="fade-up" delay="0.2s" fullWidth className="relative z-20">
        <div className="bg-secondary border-y border-white/5 relative overflow-hidden py-6">
           <div className="absolute inset-0 bg-primary/5"></div>
           <div className="flex w-full items-center gap-12 whitespace-nowrap">
             <div className="flex items-center gap-12 animate-marquee">
               {[...FUNDAMENTALS, ...FUNDAMENTALS].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4 text-gray-400 font-medium tracking-wide uppercase text-sm md:text-base">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {item}
                 </div>
               ))}
             </div>
             <div className="flex items-center gap-12 animate-marquee" aria-hidden="true">
               {[...FUNDAMENTALS, ...FUNDAMENTALS].map((item, idx) => (
                 <div key={`dup-${idx}`} className="flex items-center gap-4 text-gray-400 font-medium tracking-wide uppercase text-sm md:text-base">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {item}
                 </div>
               ))}
             </div>
           </div>
        </div>
      </ScrollReveal>

      {/* Brands We Have Worked With */}
      {/* <section className="py-16 bg-dark border-b border-white/5 relative z-20 overflow-hidden">
        <div className="container mx-auto px-6 mb-10 text-center">
          <ScrollReveal animation="fade-up">
             <p className="text-gray-400 text-sm uppercase tracking-[0.2em] font-semibold">Trusted by Industry Leaders</p>
          </ScrollReveal>
        </div>
        <ScrollReveal animation="fade-up" delay="0.1s" fullWidth>
          <div className="relative">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent z-10"></div>
              
              <div className="flex w-full items-center gap-20 whitespace-nowrap">
                <div className="flex items-center gap-20 animate-marquee">
                  {[...BRANDS, ...BRANDS].map((brand, idx) => (
                    <div key={idx} className="opacity-70 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer">
                      <img 
                        src={brand.url} 
                        alt={brand.name}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-20 animate-marquee" aria-hidden="true">
                   {[...BRANDS, ...BRANDS].map((brand, idx) => (
                    <div key={`dup-${idx}`} className="opacity-70 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer">
                      <img 
                        src={brand.url} 
                        alt={brand.name}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </ScrollReveal>
      </section> */}

      {/* Services Preview */}
      <section className="py-24 bg-dark relative z-10">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Business <span className="text-primary">Services</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Delivering enterprise-grade solutions tailored to your business needs with precision and expertise.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, index) => (
              <ScrollReveal key={service.id} animation="fade-up" delay={`${index * 0.1}s`} className="h-full">
                <div className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col">
                  <div className="h-48 overflow-hidden relative shrink-0">
                    <div className="absolute inset-0 bg-secondary/20 z-10 group-hover:bg-transparent transition-all"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20">
                      <service.icon className="text-primary w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <Button variant="outline" size="sm" onClick={() => navigate('/services')}>
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal animation="fade-up" delay="0.3s" className="text-center mt-12">
             <Button variant="primary" onClick={() => navigate('/services')}>View All Services</Button>
          </ScrollReveal>
        </div>
      </section>

       {/* Corporate Training Section */}
      <section className="py-24 relative overflow-hidden z-20 bg-dark">
        <div className="absolute inset-0 z-0">
           <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Classroom"
              className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="fade-right">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
               Corporate Training & <span className="text-primary">Internships</span>
             </h2>
             <p className="text-gray-300 mb-8 text-lg leading-relaxed">
               Bridge the gap between academic learning and industry demands. Our training programs are designed by experts to empower freshers and professionals alike.
             </p>
             
             <ul className="space-y-4 mb-10">
               {[
                 'Up-to-date Training Curriculum',
                 'Live Industry Projects & Internships',
                 'Skill Development for Freshers & Professionals',
                 'Expert Trainers & Career Guidance'
               ].map((item, index) => (
                 <li key={index} className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#F7931E]"></div>
                   <span className="text-white font-medium">{item}</span>
                 </li>
               ))}
             </ul>

             <Button variant="primary" size="lg" onClick={() => navigate('/training')}>
               Learn More About Training
             </Button>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4 mt-8">
               <ScrollReveal animation="fade-down" delay="0.1s">
                 <div className="glass-panel p-6 rounded-xl text-center transform hover:-translate-y-2 transition-transform h-full flex flex-col justify-center">
                   <h4 className="text-4xl font-bold text-white mb-2">500+</h4>
                   <p className="text-sm text-gray-400">Students Trained</p>
                 </div>
               </ScrollReveal>
               <ScrollReveal animation="fade-up" delay="0.2s">
                 <div className="glass-panel p-6 rounded-xl text-center transform hover:-translate-y-2 transition-transform h-full flex flex-col justify-center">
                   <h4 className="text-4xl font-bold text-white mb-2">100%</h4>
                   <p className="text-sm text-gray-400">Project Completion</p>
                 </div>
               </ScrollReveal>
             </div>
             <div className="space-y-4">
               <ScrollReveal animation="fade-down" delay="0.3s">
                 <div className="glass-panel p-6 rounded-xl text-center transform hover:-translate-y-2 transition-transform h-full flex flex-col justify-center">
                   <h4 className="text-4xl font-bold text-white mb-2">50+</h4>
                   <p className="text-sm text-gray-400">Corporate Partners</p>
                 </div>
               </ScrollReveal>
               <ScrollReveal animation="fade-up" delay="0.4s">
                 <div className="glass-panel p-6 rounded-xl text-center transform hover:-translate-y-2 transition-transform h-full flex flex-col justify-center">
                   <h4 className="text-4xl font-bold text-white mb-2">20+</h4>
                   <p className="text-sm text-gray-400">Live Projects</p>
                 </div>
               </ScrollReveal>
             </div>
          </div>
        </div>
      </section>

        {/* Company Stats Section */}
      <section className="py-20 relative bg-secondary/30 border-y border-white/5 z-10">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {STATS.map((stat, idx) => (
               <ScrollReveal key={idx} animation="zoom-in" delay={`${idx * 0.1}s`} className="h-full">
                 <div className="glass-panel p-8 rounded-xl flex flex-col items-center text-center group hover:bg-white/5 transition-colors h-full justify-center">
                   <div className="mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="w-8 h-8 text-primary" />
                   </div>
                   <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                   <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                 </div>
               </ScrollReveal>
             ))}
           </div>
        </div>
      </section>

        {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-dark to-secondary/30 relative z-10">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose <span className="text-primary">sumPRO</span>?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We combine technical expertise with business acumen to deliver results that matter.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={`${index * 0.1}s`} className="h-full">
                 <div className="glass-panel p-8 rounded-xl h-full hover:bg-white/5 transition-all group">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                       <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                 </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client Focus / Corporate Partnership Section */}
      <section className="py-24 relative overflow-hidden z-10">
         <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>

         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Images Grid */}
            <ScrollReveal animation="fade-right" className="relative">
               {/* Main large image */}
               <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
                  alt="Client Meeting"
                  className="rounded-2xl shadow-2xl border border-white/10 relative z-10 w-full object-cover h-[500px]"
               />
               {/* Floating secondary image */}
               <div className="absolute -bottom-10 -right-10 w-2/3 border-4 border-secondary rounded-2xl overflow-hidden shadow-2xl z-20 hidden md:block">
                  <img 
                     src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop"
                     alt="Consultation"
                     className="w-full h-full object-cover"
                  />
               </div>
               {/* Decorative elements */}
               <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-full z-0"></div>
            </ScrollReveal>

            {/* Right: Content */}
            <ScrollReveal animation="fade-left" className="lg:pl-10">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Building <span className="text-primary">Partnerships</span> Through Face-to-Face Innovation
               </h2>
               <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  We don't just work *for* you; we work *with* you. Our consultants integrate seamlessly into your corporate culture, providing on-site support and strategic guidance.
               </p>
               <div className="space-y-8">
                  {[
                     { 
                         title: 'On-Site Consultation', 
                         desc: 'Expert teams deployed to your offices for real-time problem solving and infrastructure management.',
                         icon: Users
                     },
                     { 
                         title: 'Strategic Collaboration', 
                         desc: 'State-of-the-art conferencing and collaboration protocols to ensure transparency.',
                         icon: MessageSquare
                     },
                     { 
                         title: 'Client-First Culture', 
                         desc: 'Your business goals become our primary mission, backed by 24/7 dedicated support.',
                         icon: Handshake
                     }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4 group">
                        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all">
                           <item.icon className="text-primary w-7 h-7" />
                        </div>
                        <div>
                           <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                           <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="mt-10">
                   <Button variant="outline" onClick={() => navigate('/about')}>Meet Our Team</Button>
               </div>
            </ScrollReveal>
         </div>
      </section>

    

     

      {/* Connect / CTA Section */}
      <section className="py-24 relative z-30 bg-dark">
         <div className="absolute inset-0">
             {/* Background Office Image with Overlay */}
             <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="Modern Office" 
                className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
         </div>
         
         <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal animation="zoom-in" duration="0.8s">
              <div className="glass-panel border-t border-primary/30 rounded-2xl p-12 lg:p-16 shadow-2xl shadow-black/50 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
                 <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Ready to Transform Your Business Infrastructure?
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Join hundreds of forward-thinking companies that trust sumPRO for their IT, Compliance, and HR needs. Let's build something great together.
                    </p>
                 </div>
                 <div className="flex-shrink-0">
                    <button 
                      onClick={() => navigate('/contact')}
                      className="bg-primary text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:bg-orange-600 hover:scale-105 transition-all flex items-center gap-2"
                    >
                      Start a Conversation <ArrowUpRight className="w-5 h-5" />
                    </button>
                 </div>
              </div>
            </ScrollReveal>
         </div>
      </section>
    </div>
  );
};

export default Home;