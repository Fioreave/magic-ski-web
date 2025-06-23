
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'es' as const, name: 'ES', flag: '🇪🇸' },
    { code: 'ca' as const, name: 'CA', flag: '🏴󠁥󠁳󠁣󠁴󠁿' },
    { code: 'en' as const, name: 'EN', flag: '🇬🇧' },
    { code: 'fr' as const, name: 'FR', flag: '🇫🇷' }
  ];

  return (
    <div className="flex items-center space-x-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-2 py-1 text-xs font-medium rounded transition-colors duration-200 ${
            language === lang.code
              ? 'bg-[#00B6E5] text-white'
              : 'text-gray-600 hover:text-[#00B6E5] hover:bg-gray-50'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
