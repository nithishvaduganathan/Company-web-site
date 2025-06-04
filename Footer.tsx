import React from 'react';
import { Link } from './ui/Link';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold">Hari Ohm Electronics</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for electronic device repairs and services in Thiruvarur.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/book-service" className="text-gray-400 hover:text-white transition-colors">Book a Service</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/tv-repair" className="text-gray-400 hover:text-white transition-colors">TV Repair</Link>
              </li>
              <li>
                <Link to="/services/mobile-phone-repair" className="text-gray-400 hover:text-white transition-colors">Mobile Phone Repair</Link>
              </li>
              <li>
                <Link to="/services/computer-laptop" className="text-gray-400 hover:text-white transition-colors">Computer & Laptop</Link>
              </li>
              <li>
                <Link to="/services/ac-appliances" className="text-gray-400 hover:text-white transition-colors">AC & Home Appliances</Link>
              </li>
              <li>
                <Link to="/services/network-solutions" className="text-gray-400 hover:text-white transition-colors">Network Solutions</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                <span className="ml-3 text-gray-400">
                  Poonthotam, Thiruvarur, Tamil Nadu, India - 609503
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                <span className="ml-3 text-gray-400">
                  +91 8531977455<br />
                  +91 8489486344<br />
                  +91 8883186661
                </span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                <span className="ml-3 text-gray-400">info@hariohm.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hari Ohm Electronics. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-500 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;