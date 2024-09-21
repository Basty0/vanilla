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

const produitsData = [
  {
    id: 1,
    nom: "Produit 1",
    description: "Description du produit 1",
    image: "/images/vanille1.jpg", // Mise à jour de l'URL de l'image
  },
  {
    id: 2,
    nom: "Produit 2",
    description: "Description du produit 2",
    image: "/images/vanille2.jpg", // Mise à jour de l'URL de l'image
  },
  {
    id: 3,
    nom: "Produit 3",
    description: "Description du produit 3",
    image: "/images/vanille3.jpg", // Mise à jour de l'URL de l'image
  },
  {
    id: 4,
    nom: "Produit 4",
    description: "Description du produit 4",
    image: "/images/vanille4.jpg", // Mise à jour de l'URL de l'image
  },
  {
    id: 5,
    nom: "Produit 5",
    description: "Description du produit 5",
    image: "/images/vanille5.jpg", // Mise à jour de l'URL de l'image
  },
  {
    id: 6,
    nom: "Produit 6",
    description: "Description du produit 6",
    image: "/images/vanille6.jpg", // Mise à jour de l'URL de l'image
  },
];

const Produit = () => {
  return (
    <div className="mt-16">
      <h2 className="text-xl font-semibold mb-2">Nos Produits </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {produitsData.map((produit) => (
          <Card key={produit.id} className="bg-white/10 backdrop-blur-md">
            <img
              src={produit.image}
              alt={produit.description}
              className=" object-cover h-48 w-96 rounded-t-lg"
            />
            <CardHeader>
              <CardDescription>
                <h2>{produit.nom}</h2>
                <p>{produit.description}</p>
              </CardDescription>
            </CardHeader>

            <CardFooter className=" justify-end flex">
              <Button onClick={() => ajouterAuPanier(produit)}>
                <ShoppingCart className="w-4" /> +
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Fonction pour ajouter au panier (à définir selon votre logique)
function ajouterAuPanier(produit) {
  // Logique pour ajouter le produit au panier
}

export default Produit; // Exporter le composant par défaut
