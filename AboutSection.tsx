import React from 'react';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const stats = [
  { 
    id: 1, 
    title: 'Years Experience', 
    value: '10+', 
    icon: Clock, 
    color: 'text-blue-600' 
  },
  { 
    id: 2, 
    title: 'Satisfied Customers', 
    value: '2000+', 
    icon: ThumbsUp, 
    color: 'text-green-600' 
  },
  { 
    id: 3, 
    title: 'Expert Technicians', 
    value: '15', 
    icon: Users, 
    color: 'text-purple-600' 
  },
  { 
    id: 4, 
    title: 'Service Warranty', 
    value: '100%', 
    icon: Award, 
    color: 'text-orange-500' 
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Technician repairing electronic device" 
                  className="w-full h-auto object-cover" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white rounded-lg p-4 shadow-lg hidden md:block">
                <p className="text-lg font-bold">10+ Years</p>
                <p className="text-sm">Trusted Service</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Hari Ohm Electronics</h2>
            <p className="text-gray-700 mb-6">
              Established in 2013, Hari Ohm Electronics has been providing top-notch repair and maintenance services for all types of electronic devices in Thiruvarur and surrounding areas.
            </p>
            <p className="text-gray-700 mb-6">
              Our team of skilled technicians combines years of experience with continuous training on the latest technologies to deliver exceptional service to our customers. We pride ourselves on quick turnaround times without compromising on quality.
            </p>
            <p className="text-gray-700 mb-8">
              Whether it's a simple repair or a complex technical issue, we're committed to providing reliable, affordable, and professional solutions to keep your devices running smoothly.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.id} className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className={`mx-auto mb-2 ${stat.color}`}>
                    <stat.icon className="h-6 w-6 mx-auto" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;