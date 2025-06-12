import React from 'react';
import { Star, CheckCircle, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-[#f5f1e7] to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">4.9/5 Customer Rating</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-[#7a2329] mb-6 leading-tight">
              Professional
              <span className="block">Cleaning Services</span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Experience the difference with Orlando's most trusted cleaning service. 
              We provide exceptional residential and commercial cleaning with attention 
              to every detail.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-[#7a2329] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5a1a1f] transition-colors text-lg">
                Schedule Now
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-[#7a2329] text-[#7a2329] px-8 py-4 rounded-full font-semibold hover:bg-[#7a2329] hover:text-white transition-colors text-lg">
                <Phone className="w-5 h-5" />
                (407) 555-0123
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="font-medium text-gray-700">Insured & Bonded</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="font-medium text-gray-700">Same-Day Service</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="font-medium text-gray-700">100% Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-[#7a2329] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional cleaning service"
                className="w-full h-[500px] object-cover opacity-90"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#7a2329]">1000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#7a2329]">5 Years</div>
                  <div className="text-sm text-gray-600">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;