
import React from 'react';
import { Shield, Smile, TrendingUp, Users, Clock, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Shield,
      title: t('max_security'),
      description: t('max_security_desc')
    },
    {
      icon: Smile,
      title: t('guaranteed_fun'),
      description: t('guaranteed_fun_desc')
    },
    {
      icon: TrendingUp,
      title: t('fast_progress'),
      description: t('fast_progress_desc')
    },
    {
      icon: Users,
      title: t('small_groups'),
      description: t('small_groups_desc')
    },
    {
      icon: Clock,
      title: t('flexible_hours'),
      description: t('flexible_hours_desc')
    },
    {
      icon: Heart,
      title: t('love_for_skiing'),
      description: t('love_for_skiing_desc')
    }
  ];

  return (
    <section id="benefits" className="scroll-animate opacity-0 translate-y-8 py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('benefits_title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('benefits_subtitle')}
          </p>
          <div className="w-24 h-1 bg-[#00B6E5] mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#00B6E5] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#00B6E5] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para la aventura?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a miles de familias que han confiado en Magic Ski para crear recuerdos inolvidables en la nieve.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-[#00B6E5] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0090B8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {t('reserve')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
