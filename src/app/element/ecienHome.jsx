import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./element/Header";
import { Hero } from "./element/Hero";
import Apropo from "./element/Apropo";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Produit from "./element/Produit";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col  justify-center items-center md:max-w-[80%] max-w-[90%]">
      <Hero />
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">
          À Propos de notre Vanille
        </h3>

        <p className="md:w-2/3">
          Notre vanille est cultivée avec passion dans les régions de Sambava,
          Vohemar et Ambanja. Chaque gousse est soigneusement sélectionnée pour
          garantir une qualité exceptionnelle. Nous mettons un point d'honneur à
          respecter les traditions de culture de la vanille, tout en utilisant
          des méthodes modernes pour garantir la qualité et la fraîcheur de nos
          produits.
        </p>
      </div>
      <div>
        <Apropo />
      </div>
      <div className="  ">
        <Produit />
      </div>
    </div>
  );
}
