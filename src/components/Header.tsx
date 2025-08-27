import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'News', href: '#news' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-green-600 mr-2" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Sahad Hospitals</h1>
              <p className="text-xs text-gray-600">Excellence in Healthcare</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+2348012345678"
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200"
            >
              Emergency Call
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:+2348012345678"
                className="bg-green-600 text-white block px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200 mt-4"
              >
                Emergency Call
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;