import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Conditions d'utilisation</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            1. Acceptation des conditions
          </h2>
          <p>
            En utilisant le site web de Vanilla MG Export, vous acceptez d'être
            lié par ces conditions d'utilisation. Si vous n'acceptez pas ces
            conditions, veuillez ne pas utiliser notre site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            2. Utilisation du site
          </h2>
          <p>
            Vous vous engagez à utiliser notre site uniquement à des fins
            légales et d'une manière qui ne porte pas atteinte aux droits de
            tiers ou ne restreigne pas leur utilisation du site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            3. Propriété intellectuelle
          </h2>
          <p>
            Tout le contenu présent sur ce site, y compris les textes, images,
            logos et designs, est la propriété de Vanilla MG Export et est
            protégé par les lois sur la propriété intellectuelle.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            4. Commandes et paiements
          </h2>
          <p>
            En passant une commande, vous garantissez que vous êtes légalement
            capable de conclure des contrats. Tous les paiements doivent être
            effectués selon les modalités indiquées sur le site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Livraison</h2>
          <p>
            Nous nous efforçons de livrer les produits dans les délais indiqués.
            Cependant, des retards peuvent survenir en raison de circonstances
            imprévues.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Responsabilité</h2>
          <p>
            Vanilla MG Export ne peut être tenu responsable des dommages
            indirects résultant de l'utilisation de notre site ou de nos
            produits.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            7. Modifications des conditions
          </h2>
          <p>
            Nous nous réservons le droit de modifier ces conditions
            d'utilisation à tout moment. Les modifications prendront effet dès
            leur publication sur le site.
          </p>
        </section>

        <p className="mt-8">
          Pour toute question concernant nos conditions d'utilisation, veuillez
          nous contacter à vanillemgexport@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default Page;
