import React from 'react';
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Eye, 
  Baby, 
  Bone,
  Award,
  GraduationCap,
  Scan,
  TestTube,
  Monitor
} from 'lucide-react';

import CMD from '../assets/team/DSC_0743.jpg';
import defaultImg from '../assets/team/1713396602359.jpg';
import VC from '../assets/team/DSC_0820.jpg';
import GMHR from '../assets/team/DSC_0196.jpg';
import GMBD from '../assets/team/DSC_0669.jpg';

const Team = () => {
  const teamMembers = [
    {
      id: 0,
      name: 'ALH. IBRAHIM MIJINYAWA',
      position: 'Chairman/CEO',
      specialty: 'Chairman/CEO',
      image: defaultImg,
      icon: <Stethoscope className="h-5 w-5" />,
      experience: '15+ years',
      education: 'MD, Radiology, Johns Hopkins University',
      achievements: ['Board Certified Radiologist', 'Radiology Excellence Award 2022']

    },
    {
      id: 1,
      name: 'DR. SHAMSUDDEEN ALIYU',
      position: 'Vice Chairman',
      specialty: 'Vice Chairman',
      image: VC,
      icon: <Scan className="h-5 w-5" />,
      experience: '15+ years',
      education: 'MD, Radiology, Harvard Medical School',
      achievements: ['Board Certified Radiologist', 'Excellence in Diagnostic Imaging Award 2023']
    },
    {
      id: 2,
      name: 'DR. MUAWIYYA USMAN ZAGGA',
      position: 'Chief Medical Officer',
      specialty: 'Chief Medical Officer',
      image: CMD,
      icon: <Scan className="h-5 w-5" />,
      experience: '15+ years',
      education: 'MD, Radiology, Harvard Medical School',
      achievements: ['Board Certified Radiologist', 'Excellence in Diagnostic Imaging Award 2023']
    },
    {
      id: 3,
      name: 'NURADDEEN HARANDE MAHE',
      position: 'General Manager Administration & HR',
      specialty: 'General Manager Administration & HR',
      image: GMHR,
      icon: <TestTube className="h-5 w-5" />,
      experience: '12+ years',
      education: 'MD, Pathology, Johns Hopkins University',
      achievements: ['Clinical Pathology Specialist', 'Published 40+ Research Papers']
    },
    {
      id: 3,
      name: 'DR. KELVIN OJONUGWA AKPALA',
      position: 'General Manager, Business Operations & Corporate Communications',
      specialty: 'General Manager, Business Operations & Corporate Communications',
      image: GMBD,
      icon: <Brain className="h-5 w-5" />,
      experience: '10+ years',
      education: 'MD, Neuroradiology, Stanford Medical School',
      achievements: ['Neuroradiology Fellowship', 'Brain Imaging Research Pioneer']
    }
  ];

  return (
    <section id="team" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Diagnostic Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of certified radiologists, pathologists, and technicians brings years of 
            experience and advanced training to ensure accurate, reliable diagnostic results 
            for all our patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <span className="ml-1">{member.specialty}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-3">
                  {member.position}
                </p>
                
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-8 bg-green-50 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Experience Diagnostic Excellence
              </h3>
              <p className="text-gray-600 mb-6">
                Get accurate, reliable diagnostic results with our team of dedicated professionals 
                who are committed to your health and peace of mind.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
              >
                Book Diagnostic Test
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;