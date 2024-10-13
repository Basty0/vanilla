"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/lib/api";
import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (
    name,
    email,
    password,
    passwordConfirmation
  ) => {
    try {
      const data = await register(name, email, password, passwordConfirmation);
      localStorage.setItem("token", data.access_token);
      router.push("/profile");
    } catch (err) {
      setError("Échec de l'inscription. Veuillez réessayer.");
    }
  };

  return (
    <div className="container mx-auto mt-10 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Inscription
          </CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <RegisterForm onSubmit={handleRegister} />
          <p className="mt-4 text-center text-sm">
            Déjà inscrit ?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Connectez-vous ici
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
