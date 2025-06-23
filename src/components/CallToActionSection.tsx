
import React from 'react';
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CallToActionSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-animate opacity-0 translate-y-8 py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#00B6E5] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span dangerouslySetInnerHTML={{ __html: t('contact_title').replace('aventura', '<span class="text-[#00B6E5]">aventura</span>') }} />
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('contact_subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">{t('nav_contact')}</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#00B6E5] rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Estación Grau Roig</div>
                    <div className="text-gray-300">Grandvalira, Andorra</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#00B6E5] rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">+376 891 234</div>
                    <div className="text-gray-300">9:00 - 18:00</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#00B6E5] rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">info@magicski.ad</div>
                    <div className="text-gray-300">Respuesta en 24h</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#00B6E5] rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Temporada 2024-25</div>
                    <div className="text-gray-300">30 nov - 20 abril</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#00B6E5]/20 rounded-2xl p-6 border border-[#00B6E5]/30">
              <h4 className="font-bold mb-4">🎿 Incluye en tu paquete:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-[#00B6E5] mr-2">✓</span> Clases grupales con instructor certificado</li>
                <li className="flex items-center"><span className="text-[#00B6E5] mr-2">✓</span> Material de esquí (esquís, botas, cascos)</li>
                <li className="flex items-center"><span className="text-[#00B6E5] mr-2">✓</span> Forfait de acceso a pistas</li>
                <li className="flex items-center"><span className="text-[#00B6E5] mr-2">✓</span> Seguro de actividad incluido</li>
                <li className="flex items-center"><span className="text-[#00B6E5] mr-2">✓</span> Certificado de progreso personalizado</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Reserva tu plaza ahora</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre del niño/a</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-[#00B6E5] text-white placeholder-gray-300"
                    placeholder="Nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Edad</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-[#00B6E5] text-white">
                    <option value="">Seleccionar edad</option>
                    <option value="3-4">3-4 años</option>
                    <option value="5-6">5-6 años</option>
                    <option value="7-8">7-8 años</option>
                    <option value="9-10">9-10 años</option>
                    <option value="11-12">11-12 años</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre del padre/madre</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-[#00B6E5] text-white placeholder-gray-300"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Teléfono</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-[#00B6E5] text-white placeholder-gray-300"
                    placeholder="+376..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email de contacto</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-[#00B6E5] text-white placeholder-gray-300"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Nivel de esquí del niño/a</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-[#00B6E5] text-white">
                  <option value="">Seleccionar nivel</option>
                  <option value="beginner">Principiante (nunca ha esquiado)</option>
                  <option value="basic">Básico (algunas clases previas)</option>
                  <option value="intermediate">Intermedio (esquía con confianza)</option>
                  <option value="advanced">Avanzado (domina la técnica)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Fechas preferidas</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-[#00B6E5] text-white placeholder-gray-300"
                  placeholder="Ej: 15-22 de enero"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-[#00B6E5] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#0090B8] transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>{t('reserve')}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-sm text-gray-300 text-center">
                🔒 Tus datos están protegidos. Te contactaremos en 24h.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
