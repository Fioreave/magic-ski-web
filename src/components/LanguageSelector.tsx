
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'es', name: 'ES' },
    { code: 'ca', name: 'CA' },
    { code: 'en', name: 'EN' },
    { code: 'fr', name: 'FR' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-gray-700 hover:text-[#00B6E5] px-3 py-2 rounded-md transition-colors duration-200">
        <Globe size={16} />
        <span className="text-sm font-medium">{language.toUpperCase()}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 ${
              language === lang.code ? 'text-[#00B6E5] font-semibold' : 'text-gray-700'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
