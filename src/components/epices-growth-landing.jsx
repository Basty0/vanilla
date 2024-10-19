"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ChevronRight,
  Lock,
  MapPinCheck,
  Shield,
  Star,
  Tag,
  Truck,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { CarouselPlugin } from "@/app/element/_components/CarouselPlugin";
import GalerieEpicesComponent from "./galerie-epices";

const carouselImages = [
  "/img/pop1.jpg",
  "/img/pop2.jpg",
  "/img/pop3.jpg",
  "/img/pop4.jpg",
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
                <h1 className="text-5xl font-bold mb-4 ">
                  L'Art de la Vanille de Madagascar, à Votre Portée
                </h1>
                <p className="text-xl mb-4 ">
                  Offrez-vous l'élégance de la vanille de Madagascar, cultivée
                  avec passion et dévouement. Nos gousses sont soigneusement
                  sélectionnées pour apporter à vos créations une saveur douce
                  et raffinée. Chaque produit reflète l'excellence de notre
                  terroir et le savoir-faire unique de nos producteurs locaux.
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
                <h4 className="text-xl font-semibold mb-2">
                  Vanille Noire Premium
                </h4>
                <p className="text-sm text-gray-300 mb-4 h-20">
                  Découvrez notre vanille noire de première qualité, récoltée et
                  séchée avec soin à Madagascar pour une saveur intense et
                  authentique.
                </p>
                <Image
                  src="/img/noir3.jpg"
                  alt="Épices exotiques"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="bg-[#1a2e2a] p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-2">
                  Poudre de Vanille Pure
                </h4>
                <p className="text-sm text-gray-300 mb-4 h-20">
                  Notre poudre de vanille 100% pure ajoute une touche d'exotisme
                  à toutes vos créations culinaires. Parfaite pour sublimer vos
                  desserts et pâtisseries.
                </p>
                <Image
                  src="/img/poudre.jpg"
                  alt="Mélanges signature"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="bg-[#1a2e2a] p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-2">
                  Caviar de Vanille
                </h4>
                <p className="text-sm text-gray-300 mb-4 h-20">
                  Un luxe pour vos recettes! Les graines de caviar de vanille
                  apportent une explosion de saveur intense et raffinée à vos
                  plats les plus délicats.
                </p>
                <Image
                  src="/img/cvr.jpg"
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
            <h3 className="text-4xl font-bold mb-8">
              Pourquoi Choisir Nos Services ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1a2e2a] p-6 rounded-xl flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Livraison Offerte
                  </h4>
                  <p className="text-sm text-gray-300">
                    Profitez de la livraison Sécurisé pour toute commande
                  </p>
                </div>
                <Truck className="w-6 h-6" />
              </div>
              <div className="bg-[#1a2e2a] p-6 rounded-xl flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Garantie Satisfaction
                  </h4>
                  <p className="text-sm text-gray-300">
                    Nous garantissons la qualité de nos produits
                  </p>
                </div>
                <Shield className="w-6 h-6" />
              </div>
              <div className="bg-[#1a2e2a] p-6 rounded-xl flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Promotions Régulières
                  </h4>
                  <p className="text-sm text-gray-300">
                    Bénéficiez de réductions exclusives
                  </p>
                </div>
                <Tag className="w-6 h-6" />
              </div>
              <div className="bg-[#1a2e2a] p-6 rounded-xl flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Paiement Sécurisé
                  </h4>
                  <p className="text-sm text-gray-300">
                    Vos transactions sont 100% sécurisées
                  </p>
                </div>
                <Lock className="w-6 h-6" />
              </div>
              <div className="bg-[#1a2e2a] p-6 rounded-xl flex justify-between items-center md:col-span-2">
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Produits de Qualité Supérieure
                  </h4>
                  <p className="text-sm text-gray-300">
                    Nous sélectionnons uniquement les meilleures épices pour
                    vous
                  </p>
                </div>
                <Award className="w-6 h-6" />
              </div>
            </div>
          </section>

          <section className="py-16">
            <h3 className="text-4xl font-bold mb-8">
              Les Epices de Madagascar: Un Voyage de Saveurs Authentiques
            </h3>
            <p className="mb-8 text-lg">
              Madagascar est reconnu pour ses épices de qualité supérieure,
              cultivées depuis des siècles. La vanille, introduite au XIXe
              siècle, est réputée pour ses arômes raffinés et son procédé de
              pollinisation manuel. Le poivre, aux saveurs riches et complexes,
              et le gingembre connu pour ses vertus piquantes, sont également
              des trésors de l'île. Chaque épice est cultivée avec soin,
              respectant les traditions et les méthodes ancestrales, pour offrir
              des saveurs authentiques à travers le monde.
            </p>
            <GalerieEpicesComponent />
          </section>
          <section className="py-16">
            <h3 className="text-4xl font-bold mb-8">À Propos de Nous et FAQ</h3>
            <div className="space-y-4">
              {[
                {
                  question: "Qui sommes-nous ?",
                  answer:
                    "Nous sommes une entreprise familiale passionnée, enracinée dans la tradition malgache des épices depuis plus de 50 ans. Notre histoire est celle d'un amour profond pour les saveurs authentiques et d'un engagement inébranlable envers la qualité. Chaque génération a contribué à enrichir notre expertise, faisant de nous les gardiens d'un savoir-faire unique dans la sélection et la préparation des meilleures épices de Madagascar.",
                },
                {
                  question: "D'où proviennent nos produits ?",
                  answer:
                    "Nos épices sont le trésor de la région SAVA de Madagascar, réputée mondialement pour la qualité exceptionnelle de ses produits. Cette région, bénie par un climat unique et des sols riches, est le berceau de nos vanilles, poivres, et autres épices exquises. Nous travaillons en étroite collaboration avec des producteurs locaux, garantissant non seulement une qualité incomparable mais aussi un impact positif sur les communautés locales. Chaque épice que vous achetez chez nous raconte l'histoire de cette terre fertile et du savoir-faire ancestral de ses habitants.",
                },
                {
                  question: "Quels sont nos services ?",
                  answer:
                    "Nous offrons bien plus que de simples épices - nous vous proposons une expérience gustative complète. Notre gamme premium comprend des épices rares et des mélanges exclusifs. Notre service de mouture sur demande vous garantit une fraîcheur optimale. Nos experts sont à votre disposition pour des conseils personnalisés, vous aidant à sublimer vos plats. Participez à nos ateliers de découverte pour un voyage sensoriel au cœur des épices malgaches. Chaque service est conçu pour vous faire vivre une aventure culinaire unique et inoubliable.",
                },
                {
                  question: "Comment passer commande ?",
                  answer:
                    "Commander nos épices d'exception n'a jamais été aussi simple ! Explorez notre boutique en ligne pour découvrir notre sélection exquise, ou appelez-nous pour un conseil personnalisé. Pour une expérience immersive, visitez notre boutique physique où vous pourrez sentir et goûter nos produits. Nous offrons la livraison gratuite pour toute commande supérieure à 5kg, vous permettant de faire le plein de saveurs sans contrainte. N'attendez plus pour transformer votre cuisine avec nos épices de qualité supérieure !",
                },
                {
                  question: "Proposez-vous des produits pour professionnels ?",
                  answer:
                    "Absolument ! Nous comprenons les exigences uniques des professionnels de la gastronomie. Notre gamme spéciale pour les chefs et l'industrie alimentaire offre des épices en plus grands formats, des mélanges sur mesure et des produits rares pour sublimer vos créations culinaires. Que vous soyez un restaurant étoilé, un traiteur innovant ou une entreprise agroalimentaire, nos épices de Madagascar apporteront une touche d'excellence à vos produits. Contactez-nous pour découvrir comment nos épices peuvent devenir le secret de votre succès culinaire !",
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
