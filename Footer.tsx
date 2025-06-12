import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#7a2329] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#f5f1e7] mb-4">Elite Clean</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Orlando's premier cleaning service, providing exceptional residential 
              and commercial cleaning solutions with attention to every detail.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-[#f5f1e7] mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">House Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Deep Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Move-in/Move-out</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Office Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Post-Construction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-[#f5f1e7] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-[#f5f1e7] mb-4">Contact Info</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p>(407) 555-0123</p>
                  <p className="text-sm">Available 7 days a week</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p>info@eliteclean.com</p>
                  <p className="text-sm">24-hour response time</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Serving Orlando &</p>
                  <p>Surrounding Areas</p>
                  <p className="text-sm">30-mile radius</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <h4 className="text-lg font-bold text-[#f5f1e7] mb-4">Service Areas</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300 text-sm">
            <div>
              <p>• Orlando</p>
              <p>• Winter Park</p>
              <p>• Altamonte Springs</p>
              <p>• Maitland</p>
            </div>
            <div>
              <p>• Lake Mary</p>
              <p>• Sanford</p>
              <p>• Casselberry</p>
              <p>• Longwood</p>
            </div>
            <div>
              <p>• Dr. Phillips</p>
              <p>• Windermere</p>
              <p>• Lake Nona</p>
              <p>• Baldwin Park</p>
            </div>
            <div>
              <p>• Thornton Park</p>
              <p>• College Park</p>
              <p>• Milk District</p>
              <p>• Conway</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            © 2024 Elite Clean. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;