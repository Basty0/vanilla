"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, pauseOnMouseEnter: false }) // Ajout de pauseOnMouseEnter
  );

  const images = [
    "/images/vanille1.jpg",
    "/images/vanille2.jpg",
    "/images/vanille3.jpg",
    "/images/vanille4.jpg",
    "/images/vanille5.jpg",
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="rounded-xl">
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div>
              {/* Remplacement de Card par Image */}
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-80 object-cover rounded-xl" // Assurez-vous que l'image couvre l'espace et soit carrée
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
