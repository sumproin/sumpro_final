import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../../assets/logomaint.png'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Brief */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              {/* <Activity className="w-6 h-6 text-primary" /> */}
              <span className="text-xl font-bold text-white">
                {/* Sum<span className="text-primary">Pro</span> */}
                <img src={logo} alt="SumPRO Logo" className="h-28 w-auto" />
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Delivering end-to-end technology, infrastructure, HR, security, and statutory compliance services. Your trusted partner for corporate excellence.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Instagram} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/careers" label="Careers" />
              <FooterLink to="/contact" label="Contact Us" />
              <FooterLink to="/training" label="Corporate Training" />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <FooterLink to="/services" label="IT Development" />
              <FooterLink to="/services" label="Datacenter Ops" />
              <FooterLink to="/services" label="HR Consultancy" />
              <FooterLink to="/services" label="Network Security" />
              <FooterLink to="/services" label="Compliance" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>0028, Maheshpur, Korha, Katihar - 854108, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 9288038926</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contact@sumpro.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} sumPRO Services. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon: Icon }: { icon: any }) => (
  <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
    <Icon className="w-4 h-4" />
  </a>
);

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link to={to} className="text-gray-400 hover:text-primary text-sm transition-colors">
      {label}
    </Link>
  </li>
);

export default Footer;