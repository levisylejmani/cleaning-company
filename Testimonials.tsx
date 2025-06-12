import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Winter Park, FL',
      rating: 5,
      text: 'Elite Clean has been cleaning our home for over 2 years. They are always punctual, professional, and thorough. I highly recommend their services!',
      service: 'Weekly House Cleaning'
    },
    {
      name: 'Michael Rodriguez',
      location: 'Downtown Orlando',
      rating: 5,
      text: 'Outstanding service! They cleaned our office space after renovation and it looks incredible. The attention to detail is impressive.',
      service: 'Post-Construction Cleaning'
    },
    {
      name: 'Jennifer Chen',
      location: 'Altamonte Springs',
      rating: 5,
      text: 'The deep cleaning service exceeded my expectations. Every corner of my house sparkles! Professional team and fair pricing.',
      service: 'Deep Cleaning Service'
    },
    {
      name: 'David Thompson',
      location: 'Lake Nona',
      rating: 5,
      text: 'Reliable and trustworthy. They have keys to our home and we never worry. The cleaning is consistent and they go above and beyond.',
      service: 'Bi-weekly Cleaning'
    },
    {
      name: 'Amanda Martinez',
      location: 'Dr. Phillips',
      rating: 5,
      text: 'Elite Clean helped us with our move-out cleaning. They made sure we got our full deposit back. Thank you for the excellent service!',
      service: 'Move-out Cleaning'
    },
    {
      name: 'Robert Wilson',
      location: 'Windermere',
      rating: 5,
      text: 'Professional commercial cleaning for our medical office. They understand the importance of hygiene and follow all protocols perfectly.',
      service: 'Commercial Cleaning'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#7a2329] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our cleaning services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#f5f1e7] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-[#7a2329] opacity-20 absolute top-4 right-6" />
              
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-[#7a2329] text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="bg-[#7a2329] text-white text-xs px-3 py-1 rounded-full">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#7a2329] to-[#5a1a1f] text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Join Our Happy Customers</h3>
            <p className="text-xl mb-6 opacity-90">
              Experience the Elite Clean difference. Book your first cleaning today and see why we're Orlando's most trusted cleaning service.
            </p>
            <button className="bg-[#f5f1e7] text-[#7a2329] px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors text-lg">
              Schedule Your First Clean
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;