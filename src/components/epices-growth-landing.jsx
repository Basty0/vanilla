"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPinCheck, Star, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { CarouselPlugin } from "@/app/element/_components/CarouselPlugin";
import GalerieEpicesComponent from "./galerie-epices";

const carouselImages = [
  "/images/bgv2.jpg",
  "/images/bgv1.jpg",
  "/images/bgv4.jpg",
  "/images/bgv5.jpg",
];

export function EpicesGrowthLandingComponent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto  text-white md:pt-0 pt-40">
      <main>
        {/* <section className="relative px-4 py-16 h-screen text-center">
          <div className="absolute inset-0 overflow-hidden">
            {carouselImages.map((img, index) => (
              <div key={index} className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`Carousel image ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className={`transition-opacity duration-500 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
          <div className="relative z-10 bg-black bg-opacity-50 backdrop-blur-md py-16 mt-16">
            <h2 className="text-7xl font-bold mb-4">saveur épicée</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Découvrez notre sélection d'épices rares et exotiques pour
              sublimer vos plats et voyager à travers les saveurs du monde.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-white text-[#0e1f1c] hover:bg-gray-200 rounded-full px-8 py-2">
                Acheter maintenant
              </Button>
              <Button
                variant="outline"
                className="hover:text-white text-[#0e1f1c] border-white hover:bg-white/10 rounded-full px-8 py-2"
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </section> */}

        <section className=" h-screen flex items-center justify-center w-full ">
          <div className="backdrop-blur-md m-0 bg-[#0e1f1c]/60   relative z-10 mx-auto md:p-6 p-2  h-full w-full flex items-center">
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
        <div className="container">
          <section className=" mt-16 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1a2e2a] p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-2">Épices Exotiques</h4>
                <p className="text-sm text-gray-300 mb-4">
                  Découvrez des saveurs uniques du monde entier
                </p>
                <Image
                  src="/images/bgv1.jpg"
                  alt="Épices exotiques"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="bg-[#1a2e2a] p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-2">
                  Mélanges Signature
                </h4>
                <p className="text-sm text-gray-300 mb-4">
                  Nos compositions exclusives pour vos recettes
                </p>
                <Image
                  src="/images/bgv2.jpg"
                  alt="Mélanges signature"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="bg-[#1a2e2a] p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-2">Épices Bio</h4>
                <p className="text-sm text-gray-300 mb-4">
                  100% naturelles et certifiées biologiques
                </p>
                <Image
                  src="/images/bgv3.jpg"
                  alt="Épices bio"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </section>

          <section className="py-16">
            <h3 className="text-4xl font-bold mb-8">Nouvelles Épices</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Poivre de Kampot",
                  price: 9.99,
                  image: "/images/bgv3.jpg",
                },
                {
                  name: "Safran de Taliouine",
                  price: 24.99,
                  image: "/images/bgv4.jpg",
                },
                {
                  name: "Piment d'Espelette",
                  price: 14.99,
                  image: "/images/bgv5.jpg",
                },
              ].map((spice) => (
                <div key={spice.name} className="bg-[#1a2e2a] p-4 rounded-xl">
                  <Image
                    src={spice.image}
                    alt={spice.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-lg font-semibold">{spice.name}</h4>
                  <p className="text-sm text-gray-300">
                    {spice.price.toFixed(2)} €
                  </p>
                  <Button className="mt-2 w-full bg-white text-[#0e1f1c] hover:bg-gray-200 rounded-full">
                    Ajouter au panier
                  </Button>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16">
            <h3 className="text-4xl font-bold mb-8">Collections d'Épices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1a2e2a] p-6 rounded-xl flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Épices Indiennes
                  </h4>
                  <p className="text-sm text-gray-300">
                    L'essence de la cuisine indienne
                  </p>
                </div>
                <ChevronRight className="w-6 h-6" />
              </div>
              <div className="bg-[#1a2e2a] p-6 rounded-xl flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Épices Méditerranéennes
                  </h4>
                  <p className="text-sm text-gray-300">Les saveurs du sud</p>
                </div>
                <ChevronRight className="w-6 h-6" />
              </div>
              <div className="bg-[#1a2e2a] p-6 rounded-xl flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Épices pour Grillades
                  </h4>
                  <p className="text-sm text-gray-300">
                    Parfaites pour vos barbecues
                  </p>
                </div>
                <ChevronRight className="w-6 h-6" />
              </div>
              <div className="bg-[#1a2e2a] p-6 rounded-xl flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Épices pour Pâtisserie
                  </h4>
                  <p className="text-sm text-gray-300">
                    Donnez du goût à vos desserts
                  </p>
                </div>
                <ChevronRight className="w-6 h-6" />
              </div>
            </div>
          </section>

          <section className="py-16">
            <h3 className="text-4xl font-bold mb-8">
              Épices de Qualité & Produits Sélectionnés
            </h3>
            <p className="mb-8 text-lg">
              Nous proposons une sélection soigneusement choisie d'épices
              premium et de produits spécialisés qui sublimeront votre cuisine
              et apporteront des saveurs authentiques à votre table.
            </p>
            <GalerieEpicesComponent />
          </section>

          <section className="py-16">
            <h3 className="text-4xl font-bold mb-8">Foire Aux Questions</h3>
            <div className="space-y-4">
              {[
                {
                  question: "Commande pour livraison ?",
                  answer:
                    "Livraison gratuite pour toute commande supérieure à 50€.",
                },
                {
                  question: "Service de mouture",
                  answer:
                    "Nous proposons un service de mouture gratuit sur demande.",
                },
                {
                  question: "Livraison internationale ?",
                  answer:
                    "Oui, nous livrons dans certains pays du monde entier.",
                },
                {
                  question: "Retrait en boutique ?",
                  answer:
                    "Le retrait en boutique est disponible dans notre magasin du centre-ville.",
                },
              ].map((faq) => (
                <details
                  key={faq.question}
                  className="bg-[#1a2e2a] p-4 rounded-xl"
                >
                  <summary className="font-semibold cursor-pointer flex justify-between items-center">
                    {faq.question}
                    <ChevronRight className="w-5 h-5" />
                  </summary>
                  <p className="mt-2 text-sm text-gray-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="py-16 text-center">
            <h3 className="text-4xl font-bold mb-6">
              Rejoignez la communauté des épices !
            </h3>
            <p className="mb-8 text-lg">
              Inscrivez-vous à notre newsletter pour recevoir des recettes, des
              astuces et des offres exclusives.
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Entrez votre email"
                className="bg-white text-[#0e1f1c] rounded-full"
              />
              <Button
                type="submit"
                className="bg-white text-[#0e1f1c] hover:bg-gray-200 rounded-full px-8"
              >
                S'abonner
              </Button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
