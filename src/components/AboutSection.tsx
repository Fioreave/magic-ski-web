
import React from 'react';
import { Award, Heart, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.about.title}
            </h2>
            <div className="w-24 h-1 bg-[#00B6E5] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.description1}
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.description2}
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#00B6E5]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.about.mascotTitle}</h3>
                <p className="text-gray-700">
                  {t.about.mascotDescription}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00B6E5]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-[#00B6E5]" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">{t.about.yearsExperience}</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00B6E5]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-[#00B6E5]" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">5000+</div>
                  <div className="text-sm text-gray-600">{t.about.happyKids}</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00B6E5]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-8 h-8 text-[#00B6E5]" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">{t.about.satisfaction}</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/lovable-uploads/11c99f20-4cb2-4633-bc35-3a25fbb22b48.png"
                  alt="Niños de Magic Ski aprendiendo en Grau Roig"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00B6E5]/20 to-transparent"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border-l-4 border-[#00B6E5]">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#00B6E5] rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{t.about.certified}</div>
                    <div className="text-sm text-gray-600">{t.about.officialInstructors}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
