import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Politique de confidentialité</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p>
            Chez Vanilla MG Export, nous accordons une grande importance à la
            protection de vos données personnelles. Cette politique de
            confidentialité explique comment nous collectons, utilisons et
            protégeons vos informations lorsque vous utilisez notre site de
            vente de vanille et d'autres épices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            2. Collecte des données
          </h2>
          <p>
            Nous collectons les informations que vous nous fournissez lors de la
            création d'un compte, de la passation d'une commande ou de la
            communication avec notre service client. Ces informations peuvent
            inclure votre nom, adresse e-mail, adresse postale et numéro de
            téléphone.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            3. Utilisation des données
          </h2>
          <p>
            Nous utilisons vos données pour traiter vos commandes, améliorer nos
            services, personnaliser votre expérience d'achat et vous tenir
            informé de nos offres spéciales et nouveaux produits.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            4. Protection des données
          </h2>
          <p>
            Nous mettons en place des mesures de sécurité appropriées pour
            protéger vos données contre tout accès non autorisé, altération,
            divulgation ou destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            5. Partage des données
          </h2>
          <p>
            Nous ne vendons ni ne partageons vos données personnelles avec des
            tiers, sauf si cela est nécessaire pour le traitement de vos
            commandes ou si la loi l'exige.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Vos droits</h2>
          <p>
            Vous avez le droit d'accéder à vos données personnelles, de les
            rectifier ou de demander leur suppression. Pour exercer ces droits,
            veuillez nous contacter à vanillemgexport@gmail.com.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            7. Modifications de la politique
          </h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de
            confidentialité à tout moment. Les changements seront publiés sur
            cette page.
          </p>
        </section>

        <p className="mt-8">
          Pour toute question concernant notre politique de confidentialité,
          veuillez nous contacter à vanillemgexport@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default Page;
