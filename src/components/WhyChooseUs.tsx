import React from 'react';
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Heart, 
  Stethoscope 
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Award-Winning Care',
      description: 'Recognized for excellence in healthcare delivery and patient satisfaction across multiple medical specialties.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Medical Team',
      description: 'Our highly qualified doctors and specialists bring years of experience and continuous professional development.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: '24/7 Emergency Care',
      description: 'Round-the-clock emergency services with rapid response times and state-of-the-art emergency equipment.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Advanced Technology',
      description: 'Cutting-edge medical equipment and modern facilities ensure accurate diagnosis and effective treatment.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Patient-Centered Care',
      description: 'Compassionate care focused on your comfort, dignity, and individual healthcare needs.'
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: 'Comprehensive Services',
      description: 'Full range of medical services from preventive care to specialized treatments under one roof.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Sahad Hospitals?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience healthcare excellence with our commitment to quality, innovation, 
            and compassionate care that puts your well-being first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg mb-4 group-hover:bg-green-200 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-8 bg-green-50 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to Experience Excellence?
              </h3>
              <p className="text-gray-600 mb-6">
                Join thousands of satisfied patients who trust Sahad Hospitals for their healthcare needs.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
              >
                Schedule Your Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;