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

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, pauseOnMouseEnter: true }) // Ajout de pauseOnMouseEnter
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
      className="w-full  "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="">
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div>
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
