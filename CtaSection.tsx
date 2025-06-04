import React from 'react';
import { Link } from './ui/Link';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative px-6 py-12 md:p-12 lg:px-16 lg:py-16">
            {/* Background circuit pattern */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/1097930/pexels-photo-1097930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-no-repeat bg-cover"></div>
            </div>
            
            <div className="relative z-10 md:flex md:items-center md:justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to fix your electronic devices?
                </h2>
                <p className="text-blue-200 text-lg md:text-xl">
                  Book a service now and get your devices fixed by our expert technicians. 
                  We offer quick and reliable repairs at affordable prices.
                </p>
              </div>
              <div className="md:w-1/3 flex flex-col space-y-4">
                <Link
                  to="/book-service"
                  className="px-8 py-4 bg-orange-500 text-white text-center font-medium rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center"
                >
                  Book a Service Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-primary-800 text-center font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;