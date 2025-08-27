import React from 'react';
import { Award, Users, Building2, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Leading Medical Institution',
      description: 'Recognized for our commitment to providing the highest standard of care'
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: 'Modern Infrastructure',
      description: 'State-of-the-art facilities designed to meet diverse healthcare needs'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Expert Medical Team',
      description: 'Well-trained and compassionate staff dedicated to your well-being'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Patient-Centric Care',
      description: 'Welcoming environment focused on comfort throughout your medical journey'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Sahad Hospitals
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A state-of-the-art healthcare facility that stands as a beacon of excellence 
            in the medical field, committed to providing exceptional care with cutting-edge 
            technology and modern infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Commitment to Excellence
            </h3>
            <p className="text-gray-600 mb-4">
              From the moment you step through our doors, you'll experience a welcoming 
              and patient-centric environment. Our hospital's well-trained and compassionate 
              staff members are dedicated to ensuring your comfort and well-being throughout 
              your medical journey.
            </p>
            <p className="text-gray-600">
              We offer a wide range of medical services backed by cutting-edge technology 
              and modern infrastructure, making us a leading medical institution trusted 
              by countless patients and their families.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Medical professionals"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;