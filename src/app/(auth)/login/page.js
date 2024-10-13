"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api";
import LoginForm from "@/components/auth/LoginForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
export default function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (email, password) => {
    try {
      const data = await login(email, password);
      // Stocker le token dans le localStorage ou un état global
      localStorage.setItem("token", data.access_token);
      router.push("/profile");
    } catch (err) {
      setError("Échec de la connexion. Veuillez vérifier vos identifiants.");
    }
  };

  return (
    <div className="container mx-auto mt-10">
      {error && <p className="text-red-500 mb-5">{error}</p>}
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Connexion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm onSubmit={handleLogin} />
        </CardContent>
        <CardFooter>
          <p className="mt-4 text-center text-sm">
            Pas encore inscrit ?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              S'inscrire ici
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
