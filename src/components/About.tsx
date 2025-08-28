import React from 'react';
import { Award, Users, Building2, Heart, Stethoscope } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: '200-Bed Capacity',
      description: 'Spacious facility designed to accommodate a wide range of medical conditions promptly'
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: '7 Operating Theaters',
      description: 'Equipped to perform complex surgeries across multiple specialties'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Expert Medical Team',
      description: 'Skilled surgeons, physicians, nurses, and support staff dedicated to exceptional care'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Patient-Centered Care',
      description: 'Compassionate services focused on comfort, dignity, and satisfaction'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Sahad Hospital
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            Sahad Hospital is a reputable healthcare facility with a capacity of 200 beds 
            and 7 operating theaters. Known for its commitment to high-quality healthcare, 
            Sahad Hospital has earned the trust of patients and their families across the region.
          </p>
        </div>

        {/* Features Grid */}
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

        {/* Detailed About Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Commitment to Excellence
            </h3>
            <p className="text-gray-600 mb-4 text-justify">
              Sahad Hospital boasts state-of-the-art facilities and advanced medical 
              equipment, ensuring patients receive the best possible care. The hospital’s 
              infrastructure supports a wide range of medical services, including routine 
              and specialized treatments.
            </p>
            <p className="text-gray-600 mb-4 text-justify">
              With 7 modern operating theaters, our hospital is equipped to handle 
              complex surgical procedures across multiple specialties. This allows us to 
              offer comprehensive surgical services tailored to patients’ diverse needs.
            </p>
            <p className="text-gray-600 mb-4 text-justify">
              Our medical team is composed of highly skilled surgeons, physicians, 
              nurses, and support staff—all dedicated to delivering personalized treatment 
              plans and ensuring patient comfort throughout their stay.
            </p>
            <p className="text-gray-600 text-justify">
              Beyond medical expertise, Sahad Hospital emphasizes compassion and 
              patient satisfaction. We strive to create a warm, welcoming environment 
              where patients and families feel supported and respected at every step 
              of their healthcare journey.
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
