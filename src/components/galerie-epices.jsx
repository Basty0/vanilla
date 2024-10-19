"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";

const CarouselCard = ({ title, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="relative h-80 w-full">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`${title} ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className={`absolute top-0 left-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1"
        aria-label="Image précédente"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1"
        aria-label="Image suivante"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
    </div>
  );
};

export default function GalerieEpicesComponent() {
  const epices = [
    {
      title: "Cannelle de Madagascar",
      images: ["/img/canl1.jpg", "/img/canl2.jpg", "/img/canl3.jpg"],
    },
    {
      title: "Gingembre Frais",
      images: ["/img/ging1.jpg", "/img/ging3.jpg", "/img/ging4.jpg"],
    },
    {
      title: "Oignon d'Ail",
      images: ["/img/ail1.jpg", "/img/ail2.jpg", "/img/ail3.jpg"],
    },
    {
      title: "Poivre de Madagascar",
      images: ["/img/pvr1.jpg", "/img/pvr3.jpg", "/img/pvr5.jpg"],
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2">
          <CarouselCard title={epices[0].title} images={epices[0].images} />
        </div>
        <div className="md:col-span-2">
          <CarouselCard title={epices[1].title} images={epices[1].images} />
        </div>
        <div className="md:col-span-1">
          <CarouselCard title={epices[2].title} images={epices[2].images} />
        </div>
        <div className="md:col-span-3">
          <CarouselCard title={epices[3].title} images={epices[3].images} />
        </div>
      </div>
    </section>
  );
}
