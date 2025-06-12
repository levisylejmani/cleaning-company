import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, Phone, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f5f1e7] to-white py-20">
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
                <span className="text-gray-600 font-medium">4.9/5 Kundenbewertung</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-[#7a2329] mb-6 leading-tight">
                Professionelle
<span className="block">Reinigungsdienste</span>
              </h1>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Erleben Sie den Unterschied mit dem vertrauenswürdigsten Reinigungsservice in St.Gallen Stadt. Wir bieten außergewöhnliche Reinigungen mit Liebe zum Detail.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/request-appointment"
                  className="bg-[#7a2329] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5a1a1f] transition-colors text-lg text-center"
                >
                  Jetzt Termin vereinbaren
                </Link>
                <a 
                  href="tel:(407)555-0123"
                  className="flex items-center justify-center gap-2 border-2 border-[#7a2329] text-[#7a2329] px-8 py-4 rounded-full font-semibold hover:bg-[#7a2329] hover:text-white transition-colors text-lg"
                >
                  <Phone className="w-5 h-5" />
                  +41 76 619 84 11
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-medium text-gray-700">Versichert & Verbürgt</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-medium text-gray-700">Reinigung am selben Tag</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-medium text-gray-700">100% Zufriedenheit</span>
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

      {/* Quick Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#7a2329] mb-4">
              Unsere Beliebtesten Dienstleistungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von regelmäßiger Haushaltsreinigung bis zu spezialisierten gewerblichen Diensten – wir bieten umfassende Lösungen für Ihre Sauberkeit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#f5f1e7] rounded-2xl p-8 text-center hover:shadow-lg transition-all">
              <div className="bg-[#7a2329] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-[#7a2329] mb-4">Haushaltsreinigung</h3>
              <p className="text-gray-700 mb-4">Regular cleaning services tailored to your schedule</p>
              <p className="text-xl font-bold text-[#7a2329]">Kontaktieren Sie uns für weitere Informationen</p>
            </div>

            <div className="bg-[#f5f1e7] rounded-2xl p-8 text-center hover:shadow-lg transition-all">
              <div className="bg-[#7a2329] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-[#7a2329] mb-4">Grundreinigung</h3>
              <p className="text-gray-700 mb-4">Comprehensive deep cleaning for a thorough clean</p>
              <p className="text-xl font-bold text-[#7a2329]">Kontaktieren Sie uns für weitere Informationen</p>
            </div>

            <div className="bg-[#f5f1e7] rounded-2xl p-8 text-center hover:shadow-lg transition-all">
              <div className="bg-[#7a2329] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-[#7a2329] mb-4">Büroreinigung</h3>
              <p className="text-gray-700 mb-4">Professional commercial cleaning services</p>
              <p className="text-xl font-bold text-[#7a2329]">Kontaktieren Sie uns für weitere Informationen</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 bg-[#7a2329] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5a1a1f] transition-colors text-lg"
            >
              Alle Dienstleistungen anzeigen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#7a2329] to-[#5a1a1f] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit loszulegen?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schließen Sie sich über 1000+ zufriedenen Kunden in St.Gallen Stadt an. Fordern Sie noch heute Ihr kostenloses Angebot an!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/request-appointment"
              className="bg-[#f5f1e7] text-[#7a2329] px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors text-lg"
            >
              Kostenloses Angebot anfordern
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#7a2329] transition-colors text-lg"
            >
              Kontaktieren Sie uns
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;