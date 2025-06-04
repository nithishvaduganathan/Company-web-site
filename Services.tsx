import React from 'react';
import { Tv, Smartphone, Laptop, Thermometer, Wifi, Watch, Award } from 'lucide-react';
import { Link } from '../components/ui/Link';

const services = [
  {
    id: 1,
    title: 'TV Repair',
    icon: Tv,
    color: 'bg-blue-600',
    description: 'Our TV repair services cover all brands and models including LCD, LED, OLED, and Smart TVs. We handle issues like screen damage, power problems, audio issues, and connectivity problems.',
    features: [
      'Same-day diagnosis for most TV issues',
      'Screen replacement for damaged displays',
      'Power supply board repair and replacement',
      'Smart TV software updates and troubleshooting',
      'Audio system repairs',
      'Remote control programming'
    ]
  },
  {
    id: 2,
    title: 'Mobile Phone Repair',
    icon: Smartphone,
    color: 'bg-green-600',
    description: 'We provide comprehensive repair services for all smartphone brands. Our expert technicians can fix screen damage, battery issues, charging problems, water damage, and software glitches.',
    features: [
      'Screen replacement (LCD/OLED)',
      'Battery replacement',
      'Charging port repair',
      'Water damage recovery',
      'Software troubleshooting and updates',
      'Data recovery services'
    ]
  },
  {
    id: 3,
    title: 'Computer & Laptop',
    icon: Laptop,
    color: 'bg-purple-600',
    description: 'Our computer repair services cover desktops, laptops, and all-in-ones. We fix hardware issues, remove viruses, recover data, upgrade components, and optimize system performance.',
    features: [
      'Hardware diagnostics and repair',
      'Virus and malware removal',
      'Data recovery and backup',
      'Operating system installation and updates',
      'Hardware upgrades (RAM, SSD, etc.)',
      'Performance optimization'
    ]
  },
  {
    id: 4,
    title: 'AC & Appliances',
    icon: Thermometer,
    color: 'bg-red-600',
    description: 'We service all types of air conditioners and home appliances including washing machines, refrigerators, and microwave ovens. Our technicians are trained to handle all major brands.',
    features: [
      'AC installation, servicing and repair',
      'Washing machine repair and maintenance',
      'Refrigerator repair and gas refilling',
      'Microwave and oven repair',
      'Water purifier servicing',
      'Regular maintenance packages'
    ]
  },
  {
    id: 5,
    title: 'Network Solutions',
    icon: Wifi,
    color: 'bg-amber-600',
    description: 'Our networking services include Wi-Fi setup, troubleshooting, network security, and smart home configuration. We ensure your devices stay connected and your network remains secure.',
    features: [
      'Wi-Fi router setup and optimization',
      'Network troubleshooting',
      'Network security implementation',
      'Smart home device integration',
      'Enterprise networking solutions',
      'Remote connectivity setup'
    ]
  },
  {
    id: 6,
    title: 'Smart Devices',
    icon: Watch,
    color: 'bg-cyan-600',
    description: 'We repair and service a wide range of smart devices including smartwatches, fitness trackers, smart speakers, and other IoT devices to keep your smart ecosystem functioning smoothly.',
    features: [
      'Smartwatch screen and battery replacement',
      'Smart speaker repair and setup',
      'IoT device troubleshooting',
      'Smart home hub configuration',
      'Fitness tracker repair',
      'Smart device software updates'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive repair and maintenance services for all types of electronic devices and appliances.
          </p>
        </div>

        <div className="mb-16">
          {services.map((service, index) => (
            <div key={service.id} className={`py-12 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                  <div className="lg:w-1/3">
                    <div className={`${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center lg:text-left">{service.title}</h2>
                    <p className="text-gray-700 mb-6 text-center lg:text-left">{service.description}</p>
                    <div className="text-center lg:text-left">
                      <Link 
                        to="/book-service" 
                        className="inline-flex items-center px-6 py-3 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
                      >
                        Book This Service
                      </Link>
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                      <div className="flex items-center mb-6">
                        <Award className="h-6 w-6 text-primary-600 mr-2" />
                        <h3 className="text-xl font-semibold text-gray-900">Service Features</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <svg className="h-5 w-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-3 text-gray-700">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Different Service?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Don't see the specific service you need? Contact us directly and our team will be happy to assist you with any electronic device repair or maintenance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-6 py-3 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/book-service" 
              className="px-6 py-3 rounded-md bg-gray-800 text-white font-medium hover:bg-gray-900 transition-colors"
            >
              Book a Custom Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;