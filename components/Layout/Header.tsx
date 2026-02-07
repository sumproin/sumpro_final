import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';
import Button from '../ui/Button';
import { NAV_ITEMS } from '../../constants';
import logo from '../../assets/logomaint.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 cursor-pointer group"
        >
          {/* <Activity className="w-8 h-8 text-primary transition-transform group-hover:rotate-12" /> */}
          <span className="text-2xl font-bold tracking-tight text-white">
            <img src={logo} alt="SumPRO Logo" className="h-12 w-auto" />
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-300'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button 
            variant="primary" 
            size="sm" 
            onClick={() => navigate('/contact')}
          >
            Enquire Now
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-secondary/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) => 
                `text-base font-medium py-2 transition-colors ${
                  isActive ? 'text-primary' : 'text-gray-300'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button 
            variant="primary" 
            fullWidth 
            onClick={() => {
              navigate('/contact');
              setIsMobileMenuOpen(false);
            }}
          >
            Enquire Now
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;