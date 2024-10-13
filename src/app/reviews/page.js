"use client";
import { useState, useEffect } from "react";
import { getUserReviews, deleteReview } from "@/lib/api";
import Link from "next/link";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchUserReviews();
  }, []);

  const fetchUserReviews = async () => {
    try {
      const data = await getUserReviews();
      setReviews(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des avis:", error);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await deleteReview(reviewId);
      fetchUserReviews();
    } catch (error) {
      console.error("Erreur lors de la suppression de l'avis:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Mes Avis</h1>
      {reviews.map((review) => (
        <div key={review.id} className="border p-4 mb-4 rounded">
          <p>Produit: {review.produit.nom}</p>
          <p>Note: {review.note}/5</p>
          <p>Commentaire: {review.commentaire}</p>
          <div className="mt-2">
            <Link
              href={`/products/${review.produit_id}`}
              className="text-blue-500 mr-4"
            >
              Voir le produit
            </Link>
            <button
              onClick={() => handleDeleteReview(review.id)}
              className="text-red-500"
            >
              Supprimer l'avis
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
