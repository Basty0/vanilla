import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            1. Informations légales
          </h2>
          <p>
            Raison sociale : Vanilla MG Export
            <br />
            Forme juridique : [Insérer la forme juridique]
            <br />
            Siège social : 67ha sud, Antananarivo, Madagascar
            <br />
            Numéro de SIRET : [Insérer le numéro de SIRET]
            <br />
            Numéro de TVA intracommunautaire : [Insérer le numéro de TVA]
            <br />
            Directeur de la publication : [Nom du directeur de publication]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Hébergement</h2>
          <p>
            Le site www.epices-growth.com est hébergé par [Nom de l'hébergeur],
            <br />
            [Adresse de l'hébergeur],
            <br />
            [Numéro de téléphone de l'hébergeur].
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            3. Propriété intellectuelle
          </h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, vidéos) est la
            propriété exclusive de Vanilla MG Export ou de ses partenaires.
            Toute reproduction, même partielle, est strictement interdite sans
            autorisation préalable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            4. Protection des données personnelles
          </h2>
          <p>
            Conformément à la loi Informatique et Libertés du 6 janvier 1978,
            vous disposez d'un droit d'accès, de rectification et de suppression
            des données vous concernant. Pour exercer ce droit, veuillez nous
            contacter à l'adresse suivante : vanillemgexport@gmail.com
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Cookies</h2>
          <p>
            Ce site utilise des cookies pour améliorer l'expérience utilisateur.
            En naviguant sur ce site, vous acceptez l'utilisation de cookies
            conformément à notre politique de confidentialité.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            6. Loi applicable et juridiction
          </h2>
          <p>
            Les présentes mentions légales sont soumises au droit malgache. En
            cas de litige, les tribunaux malgaches seront seuls compétents.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;
