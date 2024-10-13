"use client";
import { useState } from "react";
import { forgotPassword } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await forgotPassword(email);
      setMessage(data.message);
      setError("");
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
      setMessage("");
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Mot de passe oublié</h1>
      {message && <p className="text-green-500 mb-5">{message}</p>}
      {error && <p className="text-red-500 mb-5">{error}</p>}

      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Envoyer le lien de réinitialisation
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
