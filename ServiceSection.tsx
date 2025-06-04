import React from 'react';
import { Tv, Smartphone, Laptop, Thermometer, Wifi, Watch } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    title: 'TV Repair',
    description: 'LCD, LED, OLED and Smart TV repair and servicing for all major brands.',
    icon: Tv,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 2,
    title: 'Mobile Phone Repair',
    description: 'Screen replacement, battery issues, water damage, and software problems.',
    icon: Smartphone,
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 3,
    title: 'Computer & Laptop',
    description: 'Hardware upgrades, virus removal, data recovery, and performance optimization.',
    icon: Laptop,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 4,
    title: 'AC & Appliances',
    description: 'Air conditioner repair, washing machine, refrigerator and other home appliances.',
    icon: Thermometer,
    color: 'bg-red-100 text-red-600',
  },
  {
    id: 5,
    title: 'Network Solutions',
    description: 'Wi-Fi setup, network troubleshooting, and smart home configuration.',
    icon: Wifi,
    color: 'bg-amber-100 text-amber-600',
  },
  {
    id: 6,
    title: 'Smart Devices',
    description: 'Repair services for smartwatches, IoT devices, and other modern gadgets.',
    icon: Watch,
    color: 'bg-cyan-100 text-cyan-600',
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive repair and maintenance services for all your electronic devices.
            Our skilled technicians can fix almost any issue with quick turnaround times.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;