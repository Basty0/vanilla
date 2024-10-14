"use client";

import { useState, useEffect } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { addReview, getProductReviews } from "@/lib/api";

export function ProductDetail({ product, ajouterAuPanier }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getProductReviews(product.id);
        setReviews(reviewsData);

        // Calculer la note moyenne
        const totalRating = reviewsData.reduce(
          (sum, review) => sum + review.note,
          0
        );
        setAverageRating(
          reviewsData.length > 0 ? totalRating / reviewsData.length : 0
        );
      } catch (error) {
        console.error("Erreur lors de la récupération des avis:", error);
      }
    };

    fetchReviews();
  }, [product.id]);

  // Créer un tableau d'images à partir des données du produit
  const images = [
    `https://vanilla.sopera.mg/storage/${product.image}`,
    ...product.images.map(
      (img) => `https://vanilla.sopera.mg/storage/${img.image_url}`
    ),
  ];

  const handleReviewSubmit = async () => {
    try {
      const reviewData = {
        produit_id: product.id,
        note: rating,
        commentaire: review,
      };
      await addReview(reviewData);
      // Rafraîchir les avis après l'ajout
      const updatedReviews = await getProductReviews(product.id);
      setReviews(updatedReviews);
      // Réinitialiser le formulaire
      setRating(0);
      setReview("");
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'avis:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Détails</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>{product.nom}</DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[600px] w-full rounded-md border p-2">
          <Card className="w-full max-w-3xl mx-auto border-none shadow-none p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <AspectRatio ratio={1 / 1} className="bg-muted">
                  <img
                    src={images[selectedImage]}
                    alt={`${product.nom} image ${selectedImage + 1}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </AspectRatio>
                <div className="flex space-x-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-16 h-16 rounded-lg ${
                        selectedImage === index
                          ? "border-4 border-primary"
                          : "border border-muted"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.nom} thumbnail ${index + 1}`}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{product.nom}</h2>
                <p className="text-xl font-semibold">{product.prix} €</p>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
                <p className="text-sm text-muted-foreground">
                  Catégorie: {product.categorie.nom}
                </p>
                <p className="text-sm text-muted-foreground">
                  Statut: {product.statut}
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(averageRating)
                          ? "fill-primary text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({averageRating.toFixed(1)})
                  </span>
                </div>
                <Button
                  onClick={() =>
                    product.statut !== "indisponible" &&
                    ajouterAuPanier(product)
                  }
                  className={`w-full mt-4 ${
                    product.statut === "indisponible"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {product.statut === "indisponible"
                    ? "Indisponible"
                    : "Ajouter au panier"}
                </Button>
              </div>
            </div>
            <CardContent className="mt-6 space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">
                  Donner votre avis et note sur ce produit
                </h3>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 cursor-pointer ${
                        i < rating
                          ? "fill-primary text-primary"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setRating(i + 1)}
                    />
                  ))}
                </div>
                <Textarea
                  placeholder="Avis...."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full"
                />
                <Button onClick={handleReviewSubmit} className="w-full mt-2">
                  Valider l'avis
                </Button>
              </div>
              <div className="space-y-4 border-t pt-4">
                <h3 className="font-semibold">Avis des clients</h3>
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="space-y-2 border-b pb-4 last:border-b-0"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                        {review.user.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.note
                                ? "fill-primary text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm">{review.commentaire}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
