
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Madre de Lucas (6 años)",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "Magic Ski ha sido una experiencia increíble para Lucas. Los instructores son pacientes y muy profesionales. En solo una semana, mi hijo pasó de tener miedo a la nieve a pedirme que volvamos el próximo año.",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      role: "Padre de Emma y Sofía",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "Las mejores vacaciones familiares que hemos tenido. Las niñas aprendieron a esquiar de forma natural y divertida. El ambiente es fantástico y la seguridad es su prioridad número uno.",
      rating: 5
    },
    {
      name: "Ana Martín",
      role: "Madre de Diego (8 años)",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "Diego era muy tímido, pero los instructores de Magic Ski supieron conectar con él desde el primer día. Ahora esquía con confianza y ha hecho nuevos amigos. ¡Una experiencia transformadora!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Lo que dicen las <span className="text-[#00B6E5]">familias</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre por qué miles de padres eligen Magic Ski para las aventuras 
              invernales de sus hijos.
            </p>
            <div className="w-24 h-1 bg-[#00B6E5] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-[#00B6E5] rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00B6E5] to-transparent rounded-b-2xl"></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#00B6E5]">98%</div>
                <div className="text-gray-600">Satisfacción de padres</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#00B6E5]">4.9/5</div>
                <div className="text-gray-600">Valoración media</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#00B6E5]">95%</div>
                <div className="text-gray-600">Repiten la experiencia</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#00B6E5]">100%</div>
                <div className="text-gray-600">Recomendarían Magic Ski</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
