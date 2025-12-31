import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import Button from './Button';
import { Menu, X, ChevronDown } from 'lucide-react';

const NAV_ITEMS: NavItem[] = [
  { label: 'Product', href: '#product' },
  { label: 'Solutions', href: '#solutions', hasDropdown: true },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Stories', href: '#stories' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col font-sans">
      {/* Top Notification Banner */}
      <div className="bg-vis-dark text-white text-xs py-2 text-center font-medium tracking-wide">
        Start your free pilot: Turn one photo into a full catalog today.
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <span className="text-2xl font-serif font-bold tracking-tight text-vis-dark">3D<span className="text-vis-primary">Vis</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8 items-center">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="group flex items-center text-sm font-medium text-gray-800 hover:text-vis-primary transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} className="ml-1 opacity-50 group-hover:opacity-100" />}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="#" className="text-sm font-semibold text-gray-800 hover:text-vis-primary">Log In</a>
              <Button size="sm" variant="primary">Start Free Pilot</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-800 hover:text-vis-primary focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col p-4 animate-fade-in-down">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="py-3 px-2 text-base font-medium text-gray-800 border-b border-gray-50 last:border-0 flex items-center justify-between"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  {item.label}
                </div>
                {item.hasDropdown && <ChevronDown size={16} className="text-gray-400" />}
              </a>
            ))}
            <div className="mt-6 flex flex-col space-y-3">
              <Button fullWidth variant="primary">Start Free Pilot</Button>
              <Button fullWidth variant="outline">Log In</Button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;