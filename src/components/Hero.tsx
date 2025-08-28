import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, MapPin, Heart, Stethoscope, Shield } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const backgroundImages = [
    'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1920'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id="home" className="pt-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Sliding Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hospital background ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-transparent"></div>
      
      {/* Medical Icons Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-1/4 text-white">
          <Heart className="h-8 w-8" />
        </div>
        <div className="absolute top-60 right-1/3 text-white">
          <Stethoscope className="h-6 w-6" />
        </div>
        <div className="absolute bottom-32 left-1/3 text-white">
          <Shield className="h-7 w-7" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Excellence in <span className="text-green-400">Healthcare</span>
            </h1>
            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              Sahad Hospitals stands as a beacon of excellence in the medical field, providing 
              state-of-the-art healthcare with cutting-edge technology and compassionate care 
              in the heart of Abuja.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="tel:+2348012345678"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors duration-200"
              >
                <Phone className="mr-2 h-4 w-4" />
                Emergency
              </a>
            </div>

            <div className="mt-8 flex items-center text-sm text-gray-200">
              <MapPin className="h-4 w-4 mr-2 text-green-400" />
              Located in Apo, Abuja
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl transform rotate-3 opacity-20"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center text-white">
                <Heart className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">24/7 Emergency Care</h3>
                <p className="text-gray-200">
                  Round-the-clock medical services with state-of-the-art facilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-green-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;