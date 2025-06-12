import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'House Cleaning', path: '/services#house-cleaning' },
    { name: 'Deep Cleaning', path: '/services#deep-cleaning' },
    { name: 'Move-in/Move-out', path: '/services#move-cleaning' },
    { name: 'Post-Construction', path: '/services#post-construction' },
    { name: 'Office Cleaning', path: '/services#office-cleaning' },
    { name: 'Commercial Services', path: '/services#commercial' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-[#7a2329] text-white relative z-50">
      {/* Top Contact Bar */}
      <div className="bg-[#5a1a1f] py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(407) 555-0123</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Serving Orlando & Surrounding Areas</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-medium">Free Estimates Available</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#f5f1e7] hover:text-white transition-colors">
              Elite Clean
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-[#f5f1e7] transition-colors ${isActive('/') ? 'text-[#f5f1e7]' : ''}`}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link 
                to="/services"
                className={`flex items-center gap-1 hover:text-[#f5f1e7] transition-colors ${isActive('/services') ? 'text-[#f5f1e7]' : ''}`}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </Link>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-xl border border-gray-200">
                  <div className="py-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-4 py-3 hover:bg-[#f5f1e7] transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className={`hover:text-[#f5f1e7] transition-colors ${isActive('/about') ? 'text-[#f5f1e7]' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-[#f5f1e7] transition-colors ${isActive('/contact') ? 'text-[#f5f1e7]' : ''}`}
            >
              Contact
            </Link>
            
            <Link 
              to="/request-appointment"
              className="bg-[#f5f1e7] text-[#7a2329] px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors"
            >
              Request Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#5a1a1f] py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`hover:text-[#f5f1e7] transition-colors ${isActive('/') ? 'text-[#f5f1e7]' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div>
                <button 
                  className="flex items-center gap-1 hover:text-[#f5f1e7] transition-colors w-full text-left"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block text-sm hover:text-[#f5f1e7] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link 
                to="/about" 
                className={`hover:text-[#f5f1e7] transition-colors ${isActive('/about') ? 'text-[#f5f1e7]' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`hover:text-[#f5f1e7] transition-colors ${isActive('/contact') ? 'text-[#f5f1e7]' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/request-appointment"
                className="bg-[#f5f1e7] text-[#7a2329] px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors w-fit"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;