
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav_inicio'), href: '#hero' },
    { name: t('nav_gallery'), href: '#gallery' },
    { name: t('nav_testimonials'), href: '#testimonials' },
    { name: t('nav_contact'), href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo only */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/8197088e-2127-4b44-a002-7de44bb25638.png" 
              alt="Grandvalira" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#00B6E5] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <LanguageSelector />
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-[#00B6E5] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0090B8] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t('reserve')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#00B6E5] focus:outline-none focus:text-[#00B6E5]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#00B6E5] block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <LanguageSelector />
            </div>
            <a
              href="#contact"
              className="bg-[#00B6E5] text-white block px-3 py-2 rounded-md text-base font-medium text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              {t('reserve')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
