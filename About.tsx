import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Clock, Heart, Users, Star, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trusted & Reliable',
      description: 'Fully insured and bonded with background-checked cleaning professionals who you can trust in your home or office.'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: '100% satisfaction guarantee with consistent, high-quality cleaning standards that exceed expectations every time.'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Same-day service available with scheduling that works around your busy life and business operations.'
    },
    {
      icon: Heart,
      title: 'Family-Owned',
      description: 'Local Orlando business committed to serving our community with care, integrity, and personal attention.'
    }
  ];

  const teamMembers = [
    {
      name: 'Maria Rodriguez',
      role: 'Founder & CEO',
      experience: '15+ years',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'James Wilson',
      role: 'Operations Manager',
      experience: '10+ years',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sarah Chen',
      role: 'Quality Supervisor',
      experience: '8+ years',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#f5f1e7] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-[#7a2329] mb-6">
            About Elite Clean
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Orlando's premier cleaning service, dedicated to providing exceptional 
            residential and commercial cleaning solutions with unmatched attention to detail.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#7a2329] mb-6">
                Our Story
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2019, Elite Clean began as a small family business with a simple mission: 
                to provide Orlando residents and businesses with cleaning services that truly make a difference. 
                What started as a one-person operation has grown into a trusted team of professional cleaners 
                serving over 1000+ satisfied customers.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We believe that a clean space is more than just aesthetics – it's about creating healthy, 
                comfortable environments where families can thrive and businesses can succeed. Every member 
                of our team shares this commitment to excellence and takes pride in delivering results that 
                exceed expectations.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7a2329]">1000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7a2329]">5 Years</div>
                  <div className="text-gray-600">In Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7a2329]">4.9★</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7a2329]">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.pexels.com/photos/6195942/pexels-photo-6195942.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Professional cleaning team"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Cleaning supplies"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.pexels.com/photos/6195123/pexels-photo-6195123.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Clean modern kitchen"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.pexels.com/photos/6197434/pexels-photo-6197434.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Spotless bathroom"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-[#f5f1e7] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#7a2329] mb-4">
              Why Choose Elite Clean?
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to excellence is built on these core values
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-[#7a2329] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#7a2329] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#7a2329] mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-[#f5f1e7] rounded-2xl p-8 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-2xl font-bold text-[#7a2329] mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-700 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Guarantees */}
      <section className="py-20 bg-gradient-to-br from-[#f5f1e7] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#7a2329] mb-4">
              Our Commitments
            </h2>
            <p className="text-xl text-gray-600">
              Your peace of mind is our priority
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <Shield className="w-12 h-12 text-[#7a2329] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#7a2329] mb-4">Fully Insured & Bonded</h3>
              <p className="text-gray-600">Complete protection for your property and peace of mind</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <CheckCircle className="w-12 h-12 text-[#7a2329] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#7a2329] mb-4">Background Checked</h3>
              <p className="text-gray-600">All team members undergo thorough background screening</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <Star className="w-12 h-12 text-[#7a2329] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#7a2329] mb-4">Satisfaction Guarantee</h3>
              <p className="text-gray-600">100% satisfaction guaranteed or we'll make it right</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#7a2329] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Elite Clean Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our family of satisfied customers and discover why we're Orlando's most trusted cleaning service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/request-appointment"
              className="bg-[#f5f1e7] text-[#7a2329] px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors text-lg"
            >
              Schedule Your First Clean
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#7a2329] transition-colors text-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;