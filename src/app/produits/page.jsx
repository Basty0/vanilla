"use client";
import React, { useState } from "react"; // Ajout de useState
import { SheetDemo } from "./_components/SheetDemo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Page = () => {
  const [panier, setPanier] = useState([]); // État pour le panier

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
      id: 2,
      nom: "Produit 2",
      description: "Description du produit 2",
      image: "/images/vanille2.jpg", // Mise à jour de l'URL de l'image
      prix: 12.99,
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

  const ajouterAuPanier = (produit) => {
    setPanier((prevPanier) => {
      const existingProduct = prevPanier.find((item) => item.id === produit.id);
      if (existingProduct) {
        return prevPanier.map((item) =>
          item.id === produit.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevPanier, { ...produit, quantity: 1 }];
    });
  };

  const diminuerQuantite = (id) => {
    setPanier((prevPanier) => {
      const existingProduct = prevPanier.find((item) => item.id === id);
      if (existingProduct.quantity > 1) {
        return prevPanier.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevPanier.filter((item) => item.id !== id); // Supprime le produit si la quantité atteint 0
    });
  };

  const supprimerDuPanier = (id) => {
    setPanier((prevPanier) => prevPanier.filter((item) => item.id !== id));
  };

  const viderPanier = () => {
    setPanier([]);
  };

  const commander = () => {
    alert("Commande passée avec succès !");
    viderPanier();
  };

  return (
    <div className="mx-auto flex flex-col items-center md:max-w-[90%]  mt-16 ">
      <h1 className="text-2xl font-bold">Produits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-white/60 backdrop-blur-xl p-4 rounded-xl">
        {produitsData.map((produit) => (
          <div className="relative p-2" key={produit.id}>
            <Card className="border-none shadow-none rounded-xl hover:shadow-xl transition-all duration-300 w-[300px]">
              <CardHeader>
                <CardTitle>{produit.nom}</CardTitle>
                <CardDescription>{produit.description}</CardDescription>
                <CardDescription className="text-xl font-bold">
                  {produit.prix} €
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={produit.image}
                  alt={produit.nom}
                  className="w-28 h-28 object-cover rounded-full absolute top-0 right-0 border-2"
                />
              </CardContent>
              <CardFooter>
                <Button onClick={() => ajouterAuPanier(produit)}>
                  Ajouter au panier
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <div className="fixed bottom-10 right-10 z-50">
        <SheetDemo
          panier={panier}
          diminuerQuantite={diminuerQuantite} // Passer la fonction pour diminuer la quantité
          supprimerDuPanier={supprimerDuPanier}
          viderPanier={viderPanier}
          commander={commander}
          ajouterAuPanier={ajouterAuPanier} // Passer la fonction pour augmenter la quantité
        />
      </div>
    </div>
  );
};

export default Page;
