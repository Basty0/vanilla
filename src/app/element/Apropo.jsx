import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Assurez-vous que le composant Card existe

const Apropo = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="flex justify-center">
        <Card className="h-full w-full">
          {" "}
          {/* Ajout de classes pour uniformiser la taille */}
          <CardHeader>
            <CardTitle>
              <h3 className="text-xl font-semibold mb-2">
                Vanille de Madagascar : L'excellence à l'état pur
              </h3>
            </CardTitle>
            <CardDescription>
              <p>
                La quintessence de la vanille : un trésor de Madagascar, offrant
                un arôme unique et une qualité inégalée.
              </p>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="flex justify-center">
        <Card className="h-full w-full">
          {" "}
          {/* Ajout de classes pour uniformiser la taille */}
          <CardHeader>
            <CardTitle>
              <h3 className="text-xl font-semibold mb-2">
                Direct des plantations de Madagascar
              </h3>
            </CardTitle>
            <CardDescription>
              <p>
                Le goût authentique de Madagascar dans chaque gousse, un voyage
                gustatif au cœur de l'île Rouge.
              </p>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="flex justify-center">
        <Card className="h-full w-full">
          {" "}
          {/* Ajout de classes pour uniformiser la taille */}
          <CardHeader>
            <CardTitle>
              <h3 className="text-xl font-semibold mb-2">
                Sublimez vos recettes avec notre vanille d'exception
              </h3>
            </CardTitle>
            <CardDescription>
              <p>
                Un écrin de saveurs pour vos créations culinaires, la vanille,
                notre passion, votre plaisir.
              </p>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      {/* <div className="  flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">
          Pourquoi Choisir Notre Vanille ?
        </h2>
        <p className="mb-2">
          En choisissant nos produits, vous soutenez une agriculture durable et
          les producteurs locaux.
        </p>
        <p>
          Livraison rapide et sécurisée dans le monde entier. Laissez-vous
          séduire par l'authenticité de nos saveurs !
        </p>
      </div> */}
    </section>
  );
};

export default Apropo;
