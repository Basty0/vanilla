"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Star } from "lucide-react"; // Ajoutez cette importation pour l'icône d'étoile

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, pauseOnMouseEnter: true }) // Ajout de pauseOnMouseEnter
  );

  const products = [
    {
      src: "/images/bgv2.jpg",
      name: "Vanille Bourbon",
      price: "12.99€",
      rating: 4.5,
    },
    {
      src: "/images/bgv3.jpg",
      name: "Vanille de Madagascar",
      price: "14.99€",
      rating: 4.8,
    },
    {
      src: "/images/bgv4.jpg",
      name: "Vanille Tahitensis",
      price: "16.99€",
      rating: 4.7,
    },
    {
      src: "/images/bgv5.jpg",
      name: "Vanille de Papouasie",
      price: "13.99€",
      rating: 4.3,
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem key={index}>
            <div className="relative">
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 py-4 rounded-b-2xl">
                <h3 className="font-bold">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span>{product.price}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-1">{product.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
              <img
                src={product.src}
                alt={product.name}
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
