"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Assurez-vous que le composant Card existe
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import ProduiCaroussel from "./_components/ProduiCaroussel";

const produitsData = [
  {
    id: 1,
    nom: "Produit 1",
    description: "Description du produit 1",
    image: "/images/vanille1.jpg", // Mise à jour de l'URL de l'image
    prix: 10.99,
  },
  {
    id: 2,
    nom: "Produit 2",
    description: "Description du produit 2",
    image: "/images/vanille2.jpg", // Mise à jour de l'URL de l'image
    prix: 12.99,
  },
  {
    id: 3,
    nom: "Produit 3",
    description: "Description du produit 3",
    image: "/images/vanille3.jpg", // Mise à jour de l'URL de l'image
    prix: 9.99,
  },
  {
    id: 4,
    nom: "Produit 4",
    description: "Description du produit 4",
    image: "/images/vanille4.jpg", // Mise à jour de l'URL de l'image
    prix: 11.99,
  },
  {
    id: 5,
    nom: "Produit 5",
    description: "Description du produit 5",
    image: "/images/vanille5.jpg", // Mise à jour de l'URL de l'image
    prix: 13.99,
  },
  {
    id: 6,
    nom: "Produit 6",
    description: "Description du produit 6",
    image: "/images/vanille6.jpg", // Mise à jour de l'URL de l'image
    prix: 14.99,
  },
];

const Produit = () => {
  return (
    <div className="mt-16 md:block hidden">
      <h2 className="text-xl font-semibold mb-2">Nos Produits </h2>
      <ProduiCaroussel produits={produitsData} />
      <div className="">
        <Button asChild>
          <a href="/produits">Découvrez nos produits</a>
        </Button>
      </div>
    </div>
  );
};

// Fonction pour ajouter au panier (à définir selon votre logique)
function ajouterAuPanier(produit) {
  // Logique pour ajouter le produit au panier
}

export default Produit; // Exporter le composant par défaut
