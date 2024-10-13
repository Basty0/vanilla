"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Star,
  User,
  MapPinCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { CarouselPlugin } from "./_components/CarouselPlugin";
import Apropo from "./Apropo";
import { ProductDetail } from "@/components/product-detail";

export default function Acueil() {
  const products = [
    {
      id: 1,
      name: "Gousses de vanille Premium",
      description:
        "Gousses de vanille de qualité supérieure, parfaites pour la pâtisserie.",
      price: "24.99 €",
    },
    {
      id: 2,
      name: "Extrait de vanille pur",
      description:
        "Extrait de vanille 100% naturel, idéal pour aromatiser vos préparations.",
      price: "19.99 €",
    },
    {
      id: 3,
      name: "Poudre de vanille",
      description:
        "Poudre de vanille fine pour sublimer vos desserts et boissons.",
      price: "14.99 €",
    },
    {
      id: 4,
      name: "Coffret découverte vanille",
      description: "Assortiment de nos meilleurs produits à la vanille.",
      price: "39.99 €",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col  ">
      <main className="flex-grow  ">
        {/* <section className="relative h-screen   flex items-center justify-center  text-white">
          <div className="absolute inset-0 overflow-hidden  ">
            <Image
              src="/images/vanille3.jpg"
              alt="Champs de vanille à Madagascar"
              layout="fill"
              objectFit="cover"
              priority
              className="rounded-lg opacity-70"
            />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 ">
            <h1 className="text-5xl font-bold mb-4">
              La meilleure vanille de Madagascar
            </h1>
            <p className="text-xl mb-8">
              Découvrez la richesse et l'arôme incomparable de notre vanille
              cultivée avec passion à Madagascar.
            </p>
            <Button asChild size="lg">
              <Link href="/produits">
                Voir nos produits
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section> */}
        {/* 
        <ProductDetail /> */}
        <section className="relative h-screen flex items-center justify-center ">
          <div className="absolute inset-0 overflow-hidden ">
            <Image
              src="/images/bgv2.jpg"
              alt="Champs de vanille à Madagascar"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="container backdrop-blur-md m-0 bg-white/40   relative z-10 mx-auto md:p-6 p-2  h-full w-full flex items-center">
            <div className="grid md:grid-cols-2 gap-8 grid-cols-1 justify-center items-center ">
              <div className="">
                <h1 className="text-6xl font-bold mb-4 ">
                  La meilleure vanille de Madagascar
                </h1>
                <p className="text-xl mb-4 ">
                  Explorez notre collection de vanille, soigneusement cultivée
                  dans les régions de Madagascar pour offrir une qualité
                  exceptionnelle. Découvrez notre gamme de produits de vanille
                  de qualité supérieure.
                </p>

                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="flex flex-col  gap-2">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-6 h-6 text-yellow-500" />
                      <span className="text-sm text-gray-500">
                        <span className="text-yellow-500">4.5</span> / 5
                      </span>
                    </div>
                  </div>
                  <div className="border-l border-gray-200 h-6"></div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-row items-center gap-2 mb-4">
                      <User className="w-6 h-6 text-yellow-500" />
                      <span className="text-sm text-gray-500">
                        +2500 clients
                      </span>
                    </div>
                  </div>
                  <div className="border-l border-gray-200 h-6"></div>
                  <div className="flex  items-center gap-2 mb-4">
                    <MapPinCheck className="w-6 h-6 text-yellow-500" />
                    <span className="text-sm text-gray-500">Madagascar</span>
                  </div>
                </div>
                <Button asChild size="lg">
                  <Link href="/produits">Voir nos produits</Link>
                </Button>
              </div>
              <CarouselPlugin />
            </div>
          </div>
        </section>

        <section className="py-10 ">
          <div className="container mx-auto   md:p-6 p-2 rounded-xl">
            <h2 className="text-3xl font-bold  mb-8">Notre histoire</h2>
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-2">
                À Propos de notre Vanille
              </h3>

              <p className="md:w-2/3">
                Notre vanille est cultivée avec passion dans les régions de
                Sambava, Vohemar et Ambanja. Chaque gousse est soigneusement
                sélectionnée pour garantir une qualité exceptionnelle. Nous
                mettons un point d'honneur à respecter les traditions de culture
                de la vanille, tout en utilisant des méthodes modernes pour
                garantir la qualité et la fraîcheur de nos produits.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Apropo />
            </div>
          </div>
        </section>

        <section id="products" className="py-10">
          <div className="container mx-auto   md:p-6 p-2 rounded-xl">
            <h2 className="text-3xl font-bold  mb-8">Nos produits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <Card key={product.id}>
                  <CardContent className="p-0">
                    <img
                      src={`/images/vanille${product.id}.jpg`}
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <p className="text-primary font-bold text-lg">
                        {product.price}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className=" mt-8">
              <Button asChild size="lg">
                <Link href="/produits">
                  Voir plus de produits
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
