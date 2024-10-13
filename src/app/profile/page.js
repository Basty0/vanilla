"use client";
import { useState, useEffect } from "react";
import { getUserProfile, updateUserProfile } from "@/lib/api";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const data = await getUserProfile();
      setProfile(data);
      setName(data.name);
      setEmail(data.email);
    } catch (error) {
      console.error("Erreur lors de la récupération du profil:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(name, email);
      setMessage("Profil mis à jour avec succès");
    } catch (error) {
      setMessage("Erreur lors de la mise à jour du profil");
    }
  };

  if (!profile) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Mon Profil</CardTitle>
        </CardHeader>
        <CardContent>
          {message && <p className="mb-5">{message}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <Button type="submit">Mettre à jour le profil</Button>
          </form>
        </CardContent>
        <CardFooter>
          {/* <Button onClick={handleLogout}>Déconnexion</Button> */}
        </CardFooter>
      </Card>
    </div>
  );
}
