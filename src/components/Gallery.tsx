import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modern hospital lobby and reception area',
      category: 'Facilities'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Advanced medical equipment and technology',
      category: 'Equipment'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Medical professionals in consultation',
      category: 'Staff'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Patient care and consultation room',
      category: 'Patient Care'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Surgical suite and operating room',
      category: 'Surgery'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Emergency department and trauma care',
      category: 'Emergency'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Laboratory and diagnostic services',
      category: 'Laboratory'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Pediatric ward and children care',
      category: 'Pediatrics'
    }
  ];

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Hospital Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art facilities, advanced medical 
            equipment, and the caring environment we provide for our patients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
              onClick={() => openModal(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <span className="inline-block px-2 py-1 bg-green-600 text-white text-xs rounded-full mb-2">
                  {image.category}
                </span>
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="h-8 w-8" />
              </button>
              
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
              
              <img
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm rounded-full mb-2">
                  {selectedImageData.category}
                </span>
                <p className="text-white text-lg font-medium">{selectedImageData.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;