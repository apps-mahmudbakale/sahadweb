import React from 'react';
import { 
  Heart, 
  Brain, 
  Bone, 
  Eye, 
  Baby, 
  Stethoscope,
  Activity,
  Shield
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced cardiac procedures and diagnostics',
      features: ['ECG & Echo', 'Cardiac Surgery', 'Heart Disease Treatment']
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Neurology',
      description: 'Expert neurological care for brain and nervous system conditions',
      features: ['Brain Surgery', 'Stroke Treatment', 'Neurological Disorders']
    },
    {
      icon: <Bone className="h-8 w-8" />,
      title: 'Orthopedics',
      description: 'Specialized bone, joint, and musculoskeletal system treatments',
      features: ['Joint Replacement', 'Sports Injuries', 'Fracture Treatment']
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Ophthalmology',
      description: 'Complete eye care services with advanced surgical procedures',
      features: ['Cataract Surgery', 'Retinal Treatment', 'Vision Correction']
    },
    {
      icon: <Baby className="h-8 w-8" />,
      title: 'Pediatrics',
      description: 'Specialized healthcare services for infants, children, and adolescents',
      features: ['Child Wellness', 'Vaccinations', 'Pediatric Surgery']
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: 'Internal Medicine',
      description: 'Comprehensive adult healthcare and chronic disease management',
      features: ['Preventive Care', 'Chronic Diseases', 'Health Screenings']
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: 'Emergency Care',
      description: '24/7 emergency services with rapid response and critical care',
      features: ['24/7 Availability', 'Trauma Care', 'Critical Care Unit']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Preventive Care',
      description: 'Comprehensive health screenings and preventive medicine programs',
      features: ['Health Checkups', 'Disease Prevention', 'Wellness Programs']
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Medical Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sahad Hospitals offers a comprehensive range of medical services backed by 
            cutting-edge technology and delivered by our expert medical professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-xl mb-4">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
          >
            Schedule Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;