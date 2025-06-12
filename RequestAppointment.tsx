import React, { useState } from 'react';
import { Calendar, Clock, Home, MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

const RequestAppointment = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Service Details
    serviceType: '',
    propertyType: '',
    squareFootage: '',
    bedrooms: '',
    bathrooms: '',
    
    // Address
    address: '',
    city: '',
    zipCode: '',
    
    // Scheduling
    preferredDate: '',
    preferredTime: '',
    frequency: '',
    
    // Additional Details
    specialRequests: '',
    howDidYouHear: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment request submitted:', formData);
    alert('Thank you! Your appointment request has been submitted. We\'ll contact you within 2 hours to confirm your booking.');
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const services = [
    { value: 'house-cleaning', label: 'Regular House Cleaning', price: 'Starting at $120' },
    { value: 'deep-cleaning', label: 'Deep Cleaning', price: 'Starting at $200' },
    { value: 'move-cleaning', label: 'Move-in/Move-out Cleaning', price: 'Starting at $250' },
    { value: 'office-cleaning', label: 'Office Cleaning', price: 'Custom Quote' },
    { value: 'post-construction', label: 'Post-Construction Cleaning', price: 'Custom Quote' },
    { value: 'commercial', label: 'Commercial Services', price: 'Custom Quote' }
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#f5f1e7] to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-[#7a2329] mb-6">
            Request Your Appointment
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get your free quote in just a few minutes. We'll contact you within 2 hours to confirm your booking.
          </p>
          
          {/* Progress Bar */}
          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step <= currentStep ? 'bg-[#7a2329] text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step < currentStep ? <CheckCircle className="w-6 h-6" /> : step}
                </div>
                {step < 4 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step < currentStep ? 'bg-[#7a2329]' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="bg-[#f5f1e7] rounded-2xl p-8 border border-gray-100">
            
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-3xl font-bold text-[#7a2329] mb-6 flex items-center gap-3">
                  <Phone className="w-8 h-8" />
                  Personal Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                      placeholder="Smith"
                    />
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
                      placeholder="john@email.com"
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
              </div>
            )}

            {/* Step 2: Service Details */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-3xl font-bold text-[#7a2329] mb-6 flex items-center gap-3">
                  <Home className="w-8 h-8" />
                  Service Details
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label} - {service.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                        Property Type *
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                      >
                        <option value="">Select property type</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="condo">Condo</option>
                        <option value="office">Office</option>
                        <option value="commercial">Commercial Space</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="squareFootage" className="block text-sm font-medium text-gray-700 mb-2">
                        Square Footage
                      </label>
                      <select
                        id="squareFootage"
                        name="squareFootage"
                        value={formData.squareFootage}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                      >
                        <option value="">Select size</option>
                        <option value="under-1000">Under 1,000 sq ft</option>
                        <option value="1000-1500">1,000 - 1,500 sq ft</option>
                        <option value="1500-2500">1,500 - 2,500 sq ft</option>
                        <option value="2500-4000">2,500 - 4,000 sq ft</option>
                        <option value="over-4000">Over 4,000 sq ft</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-2">
                        Bedrooms
                      </label>
                      <select
                        id="bedrooms"
                        name="bedrooms"
                        value={formData.bedrooms}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                      >
                        <option value="">Select bedrooms</option>
                        <option value="1">1 Bedroom</option>
                        <option value="2">2 Bedrooms</option>
                        <option value="3">3 Bedrooms</option>
                        <option value="4">4 Bedrooms</option>
                        <option value="5+">5+ Bedrooms</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-2">
                        Bathrooms
                      </label>
                      <select
                        id="bathrooms"
                        name="bathrooms"
                        value={formData.bathrooms}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                      >
                        <option value="">Select bathrooms</option>
                        <option value="1">1 Bathroom</option>
                        <option value="1.5">1.5 Bathrooms</option>
                        <option value="2">2 Bathrooms</option>
                        <option value="2.5">2.5 Bathrooms</option>
                        <option value="3+">3+ Bathrooms</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Address & Scheduling */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-3xl font-bold text-[#7a2329] mb-6 flex items-center gap-3">
                  <MapPin className="w-8 h-8" />
                  Address & Scheduling
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                        placeholder="Orlando"
                      />
                    </div>

                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                        placeholder="32801"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                      >
                        <option value="">Select time</option>
                        <option value="8am-10am">8:00 AM - 10:00 AM</option>
                        <option value="10am-12pm">10:00 AM - 12:00 PM</option>
                        <option value="12pm-2pm">12:00 PM - 2:00 PM</option>
                        <option value="2pm-4pm">2:00 PM - 4:00 PM</option>
                        <option value="4pm-6pm">4:00 PM - 6:00 PM</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-2">
                      Cleaning Frequency
                    </label>
                    <select
                      id="frequency"
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                    >
                      <option value="">Select frequency</option>
                      <option value="one-time">One-time cleaning</option>
                      <option value="weekly">Weekly</option>
                      <option value="bi-weekly">Bi-weekly (every 2 weeks)</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Additional Details */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-3xl font-bold text-[#7a2329] mb-6 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8" />
                  Additional Details
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests or Instructions
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      rows={4}
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                      placeholder="Any specific areas of focus, pets, allergies, access instructions, etc."
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      id="howDidYouHear"
                      name="howDidYouHear"
                      value={formData.howDidYouHear}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7a2329] focus:border-transparent transition-colors bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="google">Google Search</option>
                      <option value="facebook">Facebook</option>
                      <option value="instagram">Instagram</option>
                      <option value="referral">Friend/Family Referral</option>
                      <option value="nextdoor">Nextdoor</option>
                      <option value="flyer">Flyer/Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  currentStep === 1 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                }`}
                disabled={currentStep === 1}
              >
                Previous
              </button>

              <div className="text-sm text-gray-500">
                Step {currentStep} of {totalSteps}
              </div>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-[#7a2329] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5a1a1f] transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-[#7a2329] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a1a1f] transition-colors flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Request
                </button>
              )}
            </div>

            <p className="text-sm text-gray-500 text-center mt-4">
              By submitting this form, you agree to receive communications from Elite Clean. 
              We'll contact you within 2 hours to confirm your appointment.
            </p>
          </form>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-gradient-to-br from-[#f5f1e7] to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#7a2329] mb-12">
            What Happens Next?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-[#7a2329] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#7a2329] mb-4">We Contact You</h3>
              <p className="text-gray-600">
                Within 2 hours, we'll call or email to confirm your appointment details and answer any questions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-[#7a2329] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#7a2329] mb-4">Free Estimate</h3>
              <p className="text-gray-600">
                We provide a detailed, no-obligation quote based on your specific needs and property.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-[#7a2329] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#7a2329] mb-4">Professional Service</h3>
              <p className="text-gray-600">
                Our trained, insured team arrives on time and delivers exceptional cleaning results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestAppointment;