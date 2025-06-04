import React from 'react';
import { Link } from '../components/ui/Link';
import { Users, Award, ThumbsUp, Clock, Settings, Tool } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Hari Ohm Electronics</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for electronic device repairs and services since 2013.
          </p>
        </div>

        {/* Our story */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Hari Ohm Electronics Team" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-4 rounded-lg shadow-lg hidden md:block">
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Hari Ohm Electronics was founded in 2013 with a simple mission: to provide high-quality, reliable repair services for electronic devices at affordable prices. What started as a small shop in Thiruvarur has grown into a trusted name in the region.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, with a passion for electronics and a background in engineering, saw the need for a service center that prioritized customer satisfaction and technical excellence. Over the years, we've expanded our services to cover all types of electronic devices and home appliances.
              </p>
              <p className="text-gray-700 mb-6">
                Today, Hari Ohm Electronics is known for its expert technicians, quick turnaround times, and commitment to customer service. We've helped thousands of customers get their devices working again, and we continue to adapt to new technologies and challenges.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/services" 
                  className="px-6 py-3 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors text-center"
                >
                  Explore Our Services
                </Link>
                <Link 
                  to="/contact" 
                  className="px-6 py-3 rounded-md bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Our values */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Hari Ohm Electronics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every repair and service we provide, ensuring the highest quality standards.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <ThumbsUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency, building trust with our customers through ethical practices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises, ensuring timely service and dependable repairs that last.
              </p>
            </div>
          </div>
        </div>

        {/* Why choose us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here's what sets Hari Ohm Electronics apart from other service providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Expert Technicians</h3>
                  <p className="text-gray-600">
                    Our team consists of certified technicians with years of experience in repairing various electronic devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Quick Turnaround</h3>
                  <p className="text-gray-600">
                    We understand the importance of your devices, which is why we strive to complete most repairs within 24-48 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <Settings className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Genuine Parts</h3>
                  <p className="text-gray-600">
                    We use only authentic parts for all repairs, ensuring the longevity and optimal performance of your devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Warranty Service</h3>
                  <p className="text-gray-600">
                    All our repairs come with a service warranty, giving you peace of mind and confidence in our work.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <Tool className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Advanced Tools</h3>
                  <p className="text-gray-600">
                    We invest in the latest diagnostic and repair tools to efficiently solve even the most complex technical issues.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <ThumbsUp className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Customer Satisfaction</h3>
                  <p className="text-gray-600">
                    We prioritize your satisfaction and go the extra mile to ensure you're happy with our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 md:py-16 md:px-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to experience our services?</h2>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
              Book a service now or contact us to learn more about how we can help with your electronic devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book-service" 
                className="px-8 py-3 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
              >
                Book a Service
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-3 rounded-md bg-white text-primary-800 font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;