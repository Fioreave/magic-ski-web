
import React from 'react';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#00B6E5] to-[#0090B8] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              ¡Comienza la <span className="text-blue-100">aventura</span> hoy!
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Reserva ahora y asegura el lugar de tu hijo en la mejor escuela de esquí 
              de Grandvalira. ¡Las plazas son limitadas!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* CTA Content */}
            <div className="text-white space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Información de contacto</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-200" />
                    <div>
                      <div className="font-semibold">Teléfono</div>
                      <div className="text-blue-200">+376 891 234</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-200" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-blue-200">info@magicski.ad</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-200" />
                    <div>
                      <div className="font-semibold">Ubicación</div>
                      <div className="text-blue-200">Estación Grau Roig, Grandvalira</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-200" />
                    <div>
                      <div className="font-semibold">Horarios</div>
                      <div className="text-blue-200">9:00 - 16:00 (temporada de esquí)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold mb-3">🎿 Incluye en tu paquete:</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>✓ Clases grupales con instructor certificado</li>
                  <li>✓ Material de esquí (esquís, botas, cascos)</li>
                  <li>✓ Forfait de acceso a pistas</li>
                  <li>✓ Seguro de actividad incluido</li>
                  <li>✓ Certificado de progreso personalizado</li>
                </ul>
              </div>
            </div>

            {/* CTA Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Reserva tu plaza ahora
              </h3>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre del niño/a
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B6E5] focus:border-transparent"
                      placeholder="Nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Edad
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B6E5] focus:border-transparent">
                      <option>Seleccionar edad</option>
                      <option>3-4 años</option>
                      <option>5-6 años</option>
                      <option>7-8 años</option>
                      <option>9-10 años</option>
                      <option>11-12 años</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre del padre/madre
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B6E5] focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B6E5] focus:border-transparent"
                      placeholder="+376..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email de contacto
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B6E5] focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nivel de esquí del niño/a
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B6E5] focus:border-transparent">
                    <option>Principiante (nunca ha esquiado)</option>
                    <option>Básico (algunas clases previas)</option>
                    <option>Intermedio (esquía con confianza)</option>
                    <option>Avanzado (domina la técnica)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Fechas preferidas
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B6E5] focus:border-transparent"
                    placeholder="Ej: 15-22 de enero"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00B6E5] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#0090B8] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Iniciar compra</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  🔒 Tus datos están protegidos. Te contactaremos en 24h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
