import React from 'react';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';
import { Link } from './ui/Link';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/1097930/pexels-photo-1097930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-no-repeat bg-cover"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Expert Electronic <br />
              <span className="text-orange-400">Repair Services</span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-lg">
              Your trusted partner for repairing and servicing all types of electronic devices - from TVs and computers to smartphones and home appliances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book-service"
                className="px-6 py-3 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors flex items-center justify-center sm:justify-start"
              >
                Book a Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-md bg-white bg-opacity-15 text-white font-medium hover:bg-opacity-25 transition-colors flex items-center justify-center sm:justify-start"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 max-w-md">
              <h3 className="text-white text-xl font-semibold mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Shield className="h-5 w-5 text-orange-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-medium">Expert Technicians</h4>
                    <p className="text-blue-100 text-sm">Our certified technicians ensure quality repairs for all devices.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-orange-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-medium">Quick Turnaround</h4>
                    <p className="text-blue-100 text-sm">Most repairs completed within 24-48 hours for your convenience.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Award className="h-5 w-5 text-orange-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-medium">Warranty Service</h4>
                    <p className="text-blue-100 text-sm">All our repairs come with a service warranty for your peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;