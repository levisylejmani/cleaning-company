import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#f5f1e7] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-[#7a2329] mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our services? Need a custom quote? We're here to help! 
            Reach out to us and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#7a2329] mb-8">
                Get In Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#7a2329] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                    <p className="text-lg text-gray-600 mb-1">(407) 555-0123</p>
                    <p className="text-sm text-gray-500">Available 7 days a week, 8 AM - 8 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#7a2329] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                    <p className="text-lg text-gray-600 mb-1">info@eliteclean.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#7a2329] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Service Area</h3>
                    <p className="text-lg text-gray-600 mb-1">Orlando & Surrounding Areas</p>
                    <p className="text-sm text-gray-500">Within 30 miles of downtown Orlando</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#7a2329] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Emergency calls only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Service Card */}
              <div className="mt-10 p-6 bg-[#7a2329] rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Emergency Cleaning?
                </h3>
                <p className="mb-4 opacity-90">
                  Need same-day cleaning service? We offer emergency and last-minute cleaning for urgent situations.
                </p>
                <a 
                  href="tel:(407)555-0123"
                  className="inline-block bg-[#f5f1e7] text-[#7a2329] px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors"
                >
                  Call Now: (407) 555-0123
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#f5f1e7] rounded-2xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-[#7a2329] mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                      placeholder="(407) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="service-question">Service Question</option>
                    <option value="quote-request">Quote Request</option>
                    <option value="schedule-change">Schedule Change</option>
                    <option value="complaint">Complaint</option>
                    <option value="compliment">Compliment</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#7a2329] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#5a1a1f] transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to receive communications from Elite Clean. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-br from-[#f5f1e7] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#7a2329] mb-4">
              Areas We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Proudly serving Orlando and surrounding communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-[#7a2329] mb-3">Central Orlando</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Downtown Orlando</li>
                <li>• Thornton Park</li>
                <li>• College Park</li>
                <li>• Milk District</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-[#7a2329] mb-3">North Orlando</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Winter Park</li>
                <li>• Maitland</li>
                <li>• Altamonte Springs</li>
                <li>• Lake Mary</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-[#7a2329] mb-3">South Orlando</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Dr. Phillips</li>
                <li>• Windermere</li>
                <li>• Lake Nona</li>
                <li>• Conway</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-[#7a2329] mb-3">East Orlando</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Baldwin Park</li>
                <li>• Avalon Park</li>
                <li>• Waterford Lakes</li>
                <li>• University Area</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;