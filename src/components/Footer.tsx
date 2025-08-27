import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Emergency Care', href: '#contact' },
    { name: 'Appointments', href: '#contact' }
  ];

  const services = [
    { name: 'Cardiology', href: '#services' },
    { name: 'Neurology', href: '#services' },
    { name: 'Orthopedics', href: '#services' },
    { name: 'Pediatrics', href: '#services' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-green-400 mr-2" />
              <div>
                <h3 className="text-xl font-bold">Sahad Hospitals</h3>
                <p className="text-sm text-gray-400">Excellence in Healthcare</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              A state-of-the-art healthcare facility committed to providing 
              exceptional medical care with cutting-edge technology and 
              compassionate service.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Apo District, Abuja, FCT</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+234 801 234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@sahadhospitals.com</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-green-900 rounded-lg">
              <p className="text-green-200 text-xs font-medium">
                Emergency: 24/7 Available
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Sahad Hospitals. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;