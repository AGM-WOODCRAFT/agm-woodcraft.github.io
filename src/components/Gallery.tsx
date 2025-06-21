import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Mock gallery images with descriptions
  const galleryImages = [
    {
      id: 1,
      title: "Nowoczesna Sauna",
      category: "Sauny",
      description:
        "Elegancka sauna wykonana z najwyższej jakości drewna cedrowego",
      src: "images/11.jpg",
    },
    {
      id: 2,
      title: "Dom z Bali",
      category: "Domy Drewniane",
      description: "Tradycyjny dom z bali o nowoczesnym designie",
      src: "images/16.jpg",
    },
    {
      id: 3,
      title: "Meble Ogrodowe",
      category: "Meble",
      description: "Solidny zestaw mebli ogrodowych z drewna dębowego",
      src: "images/20-un.jpg",
    },
    {
      id: 4,
      title: "Kuchnia na Wymiar",
      category: "Meble Kuchenne",
      description: "Funkcjonalna kuchnia z płyty meblowej w nowoczesnym stylu",
      src: "images/19-un.jpg",
    },
    {
      id: 5,
      title: "Garderoba",
      category: "Szafy",
      description: "Przestronna garderoba z drzwiami przesuwnymi",
      src: "images/7.jpg",
    },
    {
      id: 6,
      title: "Altana Ogrodowa",
      category: "Konstrukcje Ogrodowe",
      description: "Piękna altana z drewna sosnowego",
      src: "images/14.jpg",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section
      id="galeria"
      className="py-20 bg-gradient-to-br from-slate-50 to-stone-100"
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Galeria Realizacji"
          subtitle="Zobacz nasze najlepsze projekty i przekonaj się o jakości naszej pracy"
        />

        {/* Featured Image Carousel */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Mock Image Display */}
            <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
              <img
                src={galleryImages[currentImage].src}
                alt={galleryImages[currentImage].title}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              <div className="text-center px-4 absolute bottom-2 sm:bottom-8 left-0 right-0 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center py-2 sm:py-4 px-3 sm:px-8 bg-white/30 backdrop-blur-sm rounded-lg shadow-lg w-fit">
                  <div className="flex justify-between items-center w-full gap-4">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 text-left leading-tight sm:leading-normal">
                      {galleryImages[currentImage].title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs leading-tight sm:text-sm rounded-full mb-2 w-fit">
                      {galleryImages[currentImage].category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-base text-gray-800 max-w-md mx-auto w-full text-left">
                    {galleryImages[currentImage].description}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-8 sm:top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 group"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-amber-600" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-8 sm:top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 group"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-amber-600" />
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="hidden sm:block p-4 sm:p-6 bg-white">
              <div className="flex justify-center space-x-1 sm:space-x-2 overflow-x-auto pb-2">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setCurrentImage(index)}
                    className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg transition-all duration-300 ${
                      currentImage === index
                        ? "bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg"
                        : "bg-gradient-to-br from-gray-200 to-gray-300 hover:from-amber-200 hover:to-orange-300"
                    }`}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <span
                        className={`text-xs font-medium ${
                          currentImage === index
                            ? "text-white"
                            : "text-gray-600"
                        }`}
                      >
                        {index + 1}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setCurrentImage(index)}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-40 sm:h-48 bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 flex items-center justify-center">
                {/* <Image className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600" /> */}
                <img
                  src={image.src}
                  className="w-full h-full object-cover"
                  alt={image.title}
                />
              </div>

              <div className="p-3 sm:p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base truncate">
                    {image.title}
                  </h4>
                  <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full whitespace-nowrap ml-2">
                    {image.category}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                  {image.description}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
