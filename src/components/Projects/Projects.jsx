import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import "./Projects.css";

function Projects() {
  // Fonction pour faire défiler vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Pour un défilement fluide
    });
  }; 

  return (
    <section className="bg-white py-20 ">
      <div className="container mx-auto px-4 md:px-32">
        {/* Section title */}
        <div className="mb-8">
          <h3 className="text-blue-900 text-[12px] font-semibold uppercase flex items-center">
            <span className="inline-block w-2 h-2 bg-oriaTheme mr-2"></span>
            DES PROJETS QUI PRENNENT VIE
          </h3>
          <h2 className="text-3xl font-bold text-gray-900">NOS PROJETS</h2>
          <p className="mt-2 text-[15px] lg:w-2/3 text-gray-400">
            Chaque projets que nous réalisons est une oeuvre unique, conçue sur
            mesure pour répondre aux aspirations des nos clients et
            s&apos;intégrer harmonieusement dans son environnement.
          </p>
        </div>

        {/* SECTION PART */}
        <div className="flex flex-col items-center">
          {/* LIST */}
          {/* <ul className="md:w-2/3 flex flex-wrap justify-evenly pb-5">
            <li>
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
              TOUT
            </li>
            <li>DESGINE INTERIEUR</li>
            <li>ARCHITECTURE</li>
            <li>CARRELAGE</li>
            <li>BÂTIMENTS</li>
            <li>RENOVATION</li>
          </ul> */}

          {/* Cards section */}
          <div className="w-full grid grid-cols-1  lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="project-bg h-[300px] text-center text-white p-6 rounded-sm flex flex-col items-center justify-center">
              <p className="text-[13px] mb-6">Architecture</p>
              <h4>NOUVEAU BÂTIMENT</h4>
              <Link to="/projects" onClick={scrollToTop}>
                <Button className="shadow-4xl mt-6 bg-oriaTheme hover:bg-oriathemeBlack text-white px-4 py-2 rounded-sm transition duration-300 ease-in-out">
                  Voir tout nos projets
                </Button>
              </Link>
            </div>

            <div className="project-bg1 h-[300px] bg-blue-800 text-center text-white p-6 rounded-sm "></div>
            <div className="project-bg2 h-[300px] bg-blue-800 text-center text-white p-6 rounded-sm "></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
