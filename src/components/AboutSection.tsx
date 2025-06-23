
import React from 'react';
import { Award, Users, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-animate opacity-0 translate-y-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span dangerouslySetInnerHTML={{ __html: t('about_title').replace('Magic Ski', '<span class="text-[#00B6E5]">Magic Ski</span>') }} />
          </h2>
          <div className="w-24 h-1 bg-[#00B6E5] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about_description1')}
            </p>
            
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-[#00B6E5]">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about_philosophy_title')}</h3>
              <p className="text-[#00B6E5] font-semibold italic text-lg">
                {t('about_philosophy')}
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about_description2')}
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about_description3')}
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00B6E5] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#00B6E5]">15+</div>
                <div className="text-sm text-gray-600">{t('years_experience')}</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00B6E5] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#00B6E5]">5000+</div>
                <div className="text-sm text-gray-600">{t('happy_children')}</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00B6E5] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#00B6E5]">98%</div>
                <div className="text-sm text-gray-600">{t('satisfaction')}</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/11c99f20-4cb2-4633-bc35-3a25fbb22b48.png" 
              alt="Niños de Magic Ski aprendiendo en Grau Roig"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#00B6E5] rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Jardín de Nieve</div>
                  <div className="text-sm text-gray-600">Zona Planells</div>
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
