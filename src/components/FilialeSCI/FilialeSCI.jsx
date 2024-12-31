import "../FilialeHCM/FilialeHCM.css";
import { Button } from "../ui/button";
// import batiments from '../../assets/images/BATIMENTS.png'
import entretien from "../../assets/images/ENTRETIEN_DES_BIENS.png";
import gestion from "../../assets/images/GESTION_IMMOBILIERE.png";
import valorisation from "../../assets/images/VALORISATION_DES_BIENS.png";
import logo_sci from "../../assets/logo/Logo_SCI_result.webp";
import { Link } from "react-router-dom";

export default function FilialeSCI() {
  
  // Fonction pour faire défiler vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Pour un défilement fluide
    });
  };

  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 md:px-32">
        {/* Section title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">SCI DM</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="my-2 text-[15px] md:w-2/3 text-gray-400">
              {/* SCI DM est une société immobilière de gestion des propriétés,
              entièrement dédiée à la personnalisation de ses services. Que ce
              soit pour la gestion locative, l entretien régilier ou la
              valorisation de votre bien, nous mettons notre expertise au
              sèrvice de vos besoins spécifiques. */}
              Promotion immobilière : vente et/ou location terrain et immeuble (Appartement, Villa, bureaux, box commercial, dépôt)
            </p>
            <Link to="/projects" onClick={scrollToTop}>
              <Button className="inline-block backdrop-grayscale-0 w-40 bg-oriaTheme hover:bg-oriathemeBlack transition duration-300">
                Nos projets
              </Button>
            </Link>
          </div>
        </div>

        {/* Cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}

          <div className="bg-white text-center p-6 border rounded-sm">
            <div className="flex justify-center items-center mb-4">
              {/* Replace the icon here */}
              <img src={gestion} alt="Réseaux Icon" className="h-28 w-28" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Géstion immobilière
            </h3>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-center p-6 border rounded-sm ">
            <div className="flex justify-center items-center mb-4">
              {/* Replace the icon here */}
              <img
                src={entretien}
                alt="Bâtiments Icon"
                className="h-28 w-28 border-solid"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Entretien des biens
            </h3>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-center p-6 border rounded-sm">
            <div className="flex justify-center items-center mb-4">
              {/* Replace the icon here */}
              <img
                src={valorisation}
                alt="Génie Civil Icon"
                className="h-28 w-28"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Valorisation
            </h3>
          </div>

          {/* Card 4 */}
          <div className="bg-blue-800 text-center text-white p-6 rounded-sm ">
            <p className="text-[13px]">
              Spécialité dans le gestion, l entretien et la valorisation des
              biens immobiliers, SCI DM met son expertise au service de vos
              projets immobiliers, vous garantissent une gestion serein et
              efficace.
            </p>
            <Button className="mt-6 bg-oriaTheme text-white px-4 py-2 rounded-sm">
              Lire plus
            </Button>
          </div>
        </div>

        {/* Footer section */}
        <div className="p-4 mt-12 rounded-sm flex flex-col md:flex-row items-center justify-between border">
          <p className="my-2 text-[15px] md:w-2/3 text-gray-500">
            SCI DM : votre partenaire immobilier sur mesure. Confize-nous la
            gestion de votre patrimoine et bénéficiez d un service entièrement
            personnalisé, adapté à vos besoins spécifique.
          </p>
          <Link to="/contact" onClick={scrollToTop}>
            <Button className="bg-oriathemeBlack w-40">COLLABORONS</Button>
          </Link>
        </div>
        <div className="logo w-full m-0">
          <img
            className="mx-auto mt-6 w-20 m-0 p-0"
            src={logo_sci}
            alt="Logo HCM"
          />
        </div>
      </div>
    </section>
  );
}
