import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export function ProduiCaroussel({ produits }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {produits.map(
          (
            produit // Utilisez les données des produits
          ) => (
            <CarouselItem
              key={produit.id}
              className="basis-full md:basis-2/2 lg:basis-1/3" // Modifié pour afficher un produit sur les petits écrans
            >
              <div className="p-1">
                <Card
                  style={{
                    backgroundImage: `url(${produit.image})`,
                    backgroundSize: "cover",
                  }}
                >
                  <CardHeader className="h-40"></CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full backdrop-blur-sm bg-white/30 hover:bg-white/50 "
                    >
                      {produit.nom}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ProduiCaroussel;
