
import React from 'react';
import { Shield, Smile, Trophy, Users, Clock, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Shield,
      title: t.benefits.maxSafety,
      description: t.benefits.maxSafetyDesc
    },
    {
      icon: Smile,
      title: t.benefits.guaranteedFun,
      description: t.benefits.guaranteedFunDesc
    },
    {
      icon: Trophy,
      title: t.benefits.fastProgress,
      description: t.benefits.fastProgressDesc
    },
    {
      icon: Users,
      title: t.benefits.smallGroups,
      description: t.benefits.smallGroupsDesc
    },
    {
      icon: Clock,
      title: t.benefits.flexibleSchedules,
      description: t.benefits.flexibleSchedulesDesc
    },
    {
      icon: Heart,
      title: t.benefits.loveForSkiing,
      description: t.benefits.loveForSkiingDesc
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.benefits.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.benefits.description}
            </p>
            <div className="w-24 h-1 bg-[#00B6E5] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00B6E5] to-[#0090B8] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00B6E5] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Animated border */}
                <div className="w-0 h-1 bg-gradient-to-r from-[#00B6E5] to-[#0090B8] rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-[#00B6E5] max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.benefits.readyForAdventure}
              </h3>
              <p className="text-gray-600 mb-6">
                {t.benefits.readyForAdventureDesc}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-[#00B6E5] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0090B8] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {t.benefits.reserveNow}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
