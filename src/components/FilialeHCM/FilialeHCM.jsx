import batiments from "../../assets/images/BATIMENTS.png";
import genie from "../../assets/images/GENIE_CIVIL.png";
import reseau from "../../assets/images/réseaux.png";
import { Button } from "../ui/button";
import "./FilialeHCM.css";
import { Link } from "react-router-dom";
// const logo_htc = "/assets/logo/Logo_HCM_result.webp"
// import logo_hcm from "../../assets/logo/Logo_HCM_result.webp"

export default function FilialeHCM() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-32">
        {/* Section title */}
        <div className="mb-8">
          <h3 className="text-blue-900 text-[12px] font-semibold uppercase flex items-center">
            <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            ENTITÉS DU GROUPE
          </h3>
          <h2 className="text-3xl font-bold text-gray-900">HCM</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="my-2 text-[15px] md:w-2/3 text-gray-400">
              HCM (Habitat & Constructions de Madagascar) s&apos;engage à offrir
              des solutions innovantes et de qualité pour le secteur de la
              construction.
            </p>
            <Link to="/projects">
              <Button className="inline-block backdrop-grayscale-0 w-40 bg-green-600">
                Nos projets
              </Button>
            </Link>
          </div>
        </div>

        {/* Cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-800 text-center text-white p-6 rounded-sm ">
            <p className="text-[13px]">
              HCM, en tant qu acteur majeur du BTP dans le pays, se spécialise
              dans le bâtiment, le génie civil, les réseaux, les ouvrages d art,
              et les métiers spécialisés pour le développement et l immobilier.
            </p>
            <Button className="mt-6 bg-green-600 text-white px-4 py-2 rounded-sm">
              Lire plus
            </Button>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-center p-6 border rounded-sm ">
            <div className="flex justify-center items-center mb-4">
              {/* Replace the icon here */}
              <img
                src={batiments}
                alt="Bâtiments Icon"
                className="h-28 w-28 border-solid"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Bâtiments</h3>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-center p-6 border rounded-sm">
            <div className="flex justify-center items-center mb-4">
              {/* Replace the icon here */}
              <img src={genie} alt="Génie Civil Icon" className="h-28 w-28" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Génie civil</h3>
          </div>

          {/* Card 4 */}
          <div className="bg-white text-center p-6 border rounded-sm">
            <div className="flex justify-center items-center mb-4">
              {/* Replace the icon here */}
              <img src={reseau} alt="Réseaux Icon" className="h-28 w-28" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Réseaux</h3>
          </div>
        </div>

        {/* Footer section */}
        <div className="p-4 mt-12 rounded-sm flex flex-col md:flex-row items-center justify-between border">
          <p className="my-2 text-[15px] md:w-2/3 text-gray-500">
            Confiez vos projets immobiliers à HCM : notre expertise dans le
            bâtiment, le génie civil et les ouvrages d art, associée à notre
            engagement qualité, garantit la réussite de vos réalisations.
          </p>
          <Button className="bg-blue-900 w-40">COLLABORONS</Button>
        </div>
        {/* <div className="logo w-full m-0">
          <img className="mx-auto w-40 m-0 p-0" src={logo_hcm} alt="Logo HCM" />
        </div> */}
      </div>
    </section>
  );
}
