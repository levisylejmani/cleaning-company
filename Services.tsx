import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Sparkles, Truck, Building, Wrench, Users, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'house-cleaning',
      icon: Home,
      title: 'Residential Cleaning',
      description: 'Regular house cleaning services tailored to your schedule and preferences.',
      features: ['Weekly/Bi-weekly/Monthly', 'Custom Cleaning Plans', 'Eco-Friendly Products', 'All Rooms & Bathrooms', 'Kitchen Deep Clean', 'Dusting & Vacuuming'],
      price: 'Starting at $120',
      popular: true
    },
    {
      id: 'deep-cleaning',
      icon: Sparkles,
      title: 'Deep Cleaning',
      description: 'Comprehensive deep cleaning service for a thorough, top-to-bottom clean.',
      features: ['All Rooms & Surfaces', 'Inside Appliances', 'Detailed Sanitization', 'Baseboards & Trim', 'Light Fixtures', 'Cabinet Fronts'],
      price: 'Starting at $200'
    },
    {
      id: 'move-cleaning',
      icon: Truck,
      title: 'Move-in/Move-out',
      description: 'Complete cleaning service for your move, ensuring your space is spotless.',
      features: ['Full Property Clean', 'Inside Cabinets', 'Window Cleaning', 'Appliance Interior', 'Closet Cleaning', 'Garage Sweep'],
      price: 'Starting at $250'
    },
    {
      id: 'office-cleaning',
      icon: Building,
      title: 'Office Cleaning',
      description: 'Professional commercial cleaning services for offices and businesses.',
      features: ['Daily/Weekly Service', 'Restroom Maintenance', 'Floor Care', 'Trash Removal', 'Surface Disinfection', 'Break Room Cleaning'],
      price: 'Custom Quote'
    },
    {
      id: 'post-construction',
      icon: Wrench,
      title: 'Post-Construction',
      description: 'Specialized cleaning after construction or renovation projects.',
      features: ['Dust & Debris Removal', 'Window & Surface Cleaning', 'Final Inspection', 'Paint Splatter Removal', 'Floor Protection', 'Detail Cleaning'],
      price: 'Custom Quote'
    },
    {
      id: 'commercial',
      icon: Users,
      title: 'Commercial Services',
      description: 'Comprehensive cleaning solutions for retail, medical, and industrial spaces.',
      features: ['Flexible Scheduling', 'Industry Standards', 'Equipment Provided', 'Specialized Protocols', 'Quality Assurance', 'Emergency Service'],
      price: 'Custom Quote'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#f5f1e7] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-[#7a2329] mb-6">
            Our Cleaning Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From regular house cleaning to specialized commercial services, 
            we offer comprehensive solutions to keep your space pristine and healthy.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  id={service.id}
                  className={`group bg-[#f5f1e7] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative ${service.popular ? 'ring-2 ring-[#7a2329]' : ''}`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#7a2329] text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="bg-[#7a2329] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#7a2329] mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#7a2329]">
                      {service.price}
                    </span>
                    <Link 
                      to="/request-appointment"
                      className="bg-[#7a2329] text-white px-6 py-2 rounded-full hover:bg-[#5a1a1f] transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-[#f5f1e7] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#7a2329] mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              We also offer specialized cleaning services for unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h4 className="font-bold text-[#7a2329] mb-2">Carpet Cleaning</h4>
              <p className="text-gray-600 text-sm">Professional carpet and upholstery cleaning</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h4 className="font-bold text-[#7a2329] mb-2">Window Washing</h4>
              <p className="text-gray-600 text-sm">Interior and exterior window cleaning</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h4 className="font-bold text-[#7a2329] mb-2">Pressure Washing</h4>
              <p className="text-gray-600 text-sm">Exterior surfaces and driveways</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h4 className="font-bold text-[#7a2329] mb-2">Organizing</h4>
              <p className="text-gray-600 text-sm">Professional organizing services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#7a2329] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Quote?</h2>
          <p className="text-xl mb-8 opacity-90">
            Every space is unique. Let us create a personalized cleaning plan that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/request-appointment"
              className="bg-[#f5f1e7] text-[#7a2329] px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors text-lg"
            >
              Get Free Estimate
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#7a2329] transition-colors text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;