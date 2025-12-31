import React from 'react';
import { Send, Globe, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-vis-dark pt-20 pb-12 text-sm border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 pr-8">
            <div className="mb-6">
               <span className="text-2xl font-serif font-bold tracking-tight text-vis-dark">3D<span className="text-vis-primary">Vis</span></span>
            </div>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              High-Fashion Visuals. Low-Stress Operations. <br/>
              Join the new wave of Indian brands scaling their content with "Sovereign Compute" technology.
            </p>
            
            <div className="relative border border-gray-300 rounded-md overflow-hidden mb-4 max-w-xs">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-none text-gray-800 focus:ring-0 placeholder-gray-400 text-sm py-2.5 px-3"
              />
              <button className="absolute right-0 top-0 bottom-0 px-3 bg-vis-primary text-white hover:bg-vis-primaryDark transition-colors">
                <Send size={16} />
              </button>
            </div>
            <p className="text-xs text-gray-400">Start your free pilot today.</p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-vis-dark">Product</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-vis-primary">Draping Engine</a></li>
              <li><a href="#" className="hover:text-vis-primary">Variant Editor</a></li>
              <li><a href="#" className="hover:text-vis-primary">SHARP++</a></li>
              <li><a href="#" className="hover:text-vis-primary">Pricing</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-vis-dark">Solutions</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-vis-primary">Fast-Fashion</a></li>
              <li><a href="#" className="hover:text-vis-primary">Boutiques</a></li>
              <li><a href="#" className="hover:text-vis-primary">Merchandisers</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-vis-dark">Company</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-vis-primary">About Us</a></li>
              <li><a href="#" className="hover:text-vis-primary">Careers</a></li>
              <li><a href="#" className="hover:text-vis-primary">Blog</a></li>
              <li><a href="#" className="hover:text-vis-primary">Contact</a></li>
            </ul>
          </div>

           <div className="space-y-4">
            <h4 className="font-bold text-vis-dark">Resources</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-vis-primary">Documentation</a></li>
              <li><a href="#" className="hover:text-vis-primary">Community</a></li>
              <li><a href="#" className="hover:text-vis-primary">Help Center</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-xs">
            © 2025 3DVis Technologies. All rights reserved. Made for the Indian Wardrobe.
          </div>

          <div className="flex items-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-vis-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-vis-primary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-vis-primary transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;