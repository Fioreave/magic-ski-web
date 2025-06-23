
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="/lovable-uploads/4d38dcaa-9135-4e6a-ba47-2003e6f39d19.png"
                alt="Grandvalira Logo"
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t.footer.description}
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00B6E5] transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00B6E5] transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00B6E5] transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t.footer.contact}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#00B6E5] mt-0.5" />
                <div>
                  <div className="font-semibold">{t.footer.station}</div>
                  <div className="text-gray-400 text-sm">Grandvalira, Andorra</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#00B6E5]" />
                <div>
                  <div className="font-semibold">+376 891 234</div>
                  <div className="text-gray-400 text-sm">9:00 - 18:00</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#00B6E5]" />
                <div>
                  <div className="font-semibold">info@magicski.ad</div>
                  <div className="text-gray-400 text-sm">Respuesta en 24h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-[#00B6E5] transition-colors duration-200">{t.footer.whatIs}</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-[#00B6E5] transition-colors duration-200">{t.footer.benefits}</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-[#00B6E5] transition-colors duration-200">{t.footer.gallery}</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-[#00B6E5] transition-colors duration-200">{t.footer.testimonials}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#00B6E5] transition-colors duration-200">{t.footer.reservations}</a></li>
            </ul>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-3">{t.footer.season}</h4>
              <div className="text-sm text-gray-400">
                <div>{t.footer.start}</div>
                <div>{t.footer.end}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              {t.footer.copyright}
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#00B6E5] transition-colors duration-200">{t.footer.privacyPolicy}</a>
              <a href="#" className="text-gray-400 hover:text-[#00B6E5] transition-colors duration-200">{t.footer.termsOfUse}</a>
              <a href="#" className="text-gray-400 hover:text-[#00B6E5] transition-colors duration-200">{t.footer.cookies}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
