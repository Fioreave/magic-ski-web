
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Niños esquiando en pistas'
    },
    {
      type: 'video',
      src: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Video de clases Magic Ski'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Instructores con niños'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Paisaje nevado Grau Roig'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Grupo de niños aprendiendo'
    },
    {
      type: 'video',
      src: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Testimonial de padres'
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
              imágenes y videos de nuestros pequeños esquiadores.
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

                {/* Video play button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#00B6E5] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                )}

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
