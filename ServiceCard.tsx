import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from './ui/Link';

interface ServiceProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
  };
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  const { title, description, icon: Icon, color } = service;
  
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 group">
      <div className={`${color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={`/services/${title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700">
        Learn more 
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;