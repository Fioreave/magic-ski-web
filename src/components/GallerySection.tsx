
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      type: 'image',
      src: '/lovable-uploads/52e54cb7-dd28-4564-bd4a-556ef8ffd9b7.png',
      alt: 'Niños esquiando en las pistas de Grau Roig con paisaje montañoso'
    },
    {
      type: 'image',
      src: '/lovable-uploads/11c99f20-4cb2-4633-bc35-3a25fbb22b48.png',
      alt: 'Grupo de niños Magic Ski en las pistas'
    },
    {
      type: 'image',
      src: '/lovable-uploads/3cf54eba-ca73-45cf-87e6-5eeed950cf9d.png',
      alt: 'Niños aprendiendo técnicas de esquí en Magic Ski'
    },
    {
      type: 'image',
      src: '/lovable-uploads/602c2a69-9850-438f-a0de-0996cc97a681.png',
      alt: 'Grupo completo de estudiantes Magic Ski con instructores'
    },
    {
      type: 'image',
      src: '/lovable-uploads/00570c02-3d0b-4168-915e-88425728d4aa.png',
      alt: 'Niños con la mascota de Magic Ski y instructor'
    },
    {
      type: 'image',
      src: '/lovable-uploads/418ed443-bfaf-4441-b1e6-55e76f78bb7f.png',
      alt: 'Ceremonia de graduación con diplomas Magic Ski'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Momentos <span className="text-[#00B6E5]">Mágicos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revive la emoción y alegría de nuestras clases a través de estas 
              imágenes reales de nuestros pequeños esquiadores en acción.
            </p>
            <div className="w-24 h-1 bg-[#00B6E5] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedImage(item.src)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm">{item.alt}</p>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-4 border-[#00B6E5] rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
              <div className="relative max-w-4xl max-h-full">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                  className="absolute -top-12 right-0 text-white hover:text-[#00B6E5] transition-colors duration-200"
                >
                  <X size={32} />
                </button>
                <img
                  src={selectedImage}
                  alt="Vista ampliada"
                  className="max-w-full max-h-full object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}

          {/* Special Mascot Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  ¡Conoce a nuestra <span className="text-[#00B6E5]">mascota</span>!
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Nuestra querida mascota acompaña a los niños en cada aventura, 
                  creando un ambiente mágico donde el aprendizaje se convierte en diversión pura. 
                  Los pequeños esquiadores crean vínculos especiales que hacen de cada clase una experiencia inolvidable.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#00B6E5] rounded-full"></div>
                    <span>Entretenimiento garantizado</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#00B6E5] rounded-full"></div>
                    <span>Ambiente familiar</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/f4db08a6-a798-46de-9f3b-9f5654451700.png"
                  alt="Mascota de Magic Ski con niños pequeños"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#00B6E5] to-[#0090B8] rounded-2xl p-8 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                ¡Crea tus propios recuerdos mágicos!
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                Únete a nosotros esta temporada y vive la magia del esquí en Grau Roig.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-white text-[#00B6E5] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Ver disponibilidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
