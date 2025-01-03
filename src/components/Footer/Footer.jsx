import chevron from "../../assets/icons/chevron.png";
import facebook from "../../assets/icons/facebook.png";
import lamp from "../../assets/icons/lamp.png";
import linkedin from "../../assets/icons/linkedin.png";
import maps from "../../assets/icons/maps.png";
import phone from "../../assets/icons/phone.png";
// import social from "../../assets/icons/social.png";
import twitter from "../../assets/icons/twitter.png";
import actus_1 from "../../assets/images/actu-img-1.png";
import actus_2 from "../../assets/images/actu-img-2.png";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <footer className="bg-[#29276c] text-white py-12 pb-0">
      <div className="container mx-auto px-6 md:px-24 ">
        {/* Top section with three blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Block 1: Qui sommes-nous */}
          <div className="flex pl-4 p-2 items-center border border-slate-600 relative">
            <div className="mr-4">
              {/* Icon */}
              <div className="w-10 h-10 bg-green-600 flex justify-center items-center translate-y-10">
                <img src={lamp} alt="icon lamp" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold">QUI SOMMES-NOUS?</h4>
              <p className="text-xs text-slate-400">
                Nous regroupons des entités spécialisées dans les secteurs de la
                construction et de la gestion immobilière à Madagascar.
              </p>
            </div>
          </div>

          {/* Block 2: Adresse */}
          <div className="flex pl-4 p-2 items-center border border-slate-600 relative">
            <div className="mr-4">
              {/* Icon */}
              <div className="w-10 h-10 p-2 bg-green-600 flex justify-center items-center translate-y-10">
                <img src={maps} alt="icon lamp" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold">ADRESSE</h4>
              <p className="text-xs text-slate-400">Antananarivo</p>
              <p className="text-xs text-slate-400">
                Soavimasoandro Lot II H 115 D
              </p>
            </div>
          </div>

          {/* Block 3: Contacts */}
          <div className="flex pl-4 p-2 items-center border border-slate-600 relative">
            <div className="mr-4">
              {/* Icon */}
              <div className="w-10 h-10 bg-green-600 flex justify-center items-center translate-y-10">
                <img src={phone} alt="icon lamp" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold">CONTACTS</h4>
              <p className="text-xs text-slate-400">020 23 314 14</p>
              <p className="text-xs text-slate-400">020 23 314 14</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-slate-800 pt-10">
          {/* Nos horaires */}
          <div>
            <h4 className="text-sm font-semibold">Nos horaires</h4>
            <p className="text-xs pt-4 ">Jours Ouvrables :</p>
            <p className="text-xs pl-4 text-gray-400">
              Lundi - Vendredi : 8h-17h30
            </p>
            <p className="text-xs pl-4 text-gray-400">Samedi : heure</p>
            <p className="text-xs pt-4">Période de vacances :</p>
            <p className="text-xs pl-4 text-gray-400">Toujours ouverts</p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm font-semibold">Menu</h4>
            <ul className="pt-3 text-xs space-y-1">
              <li className="border-b border-slate-800 flex items-center">
                <img className="w-3 h-2" src={chevron} alt="icon chevron" />{" "}
                <Link
                  onClick={scrollToTop}
                  to="/"
                  className="p-2 block text-slate-400 hover:text-white"
                >
                  ACCUEIL
                </Link>
              </li>
              <li className="border-b border-slate-800 flex items-center">
                <img className="w-3 h-2" src={chevron} alt="icon chevron" />
                <Link
                  onClick={scrollToTop}
                  to="/about"
                  className="p-2 block text-slate-400 hover:text-white"
                >
                  A PROPOS
                </Link>
              </li>
              <li className="border-b border-slate-800 flex items-center">
                <img className="w-3 h-2" src={chevron} alt="icon chevron" />
                <Link
                  onClick={scrollToTop}
                  to="/filiales"
                  className="p-2 block text-slate-400 hover:text-white"
                >
                  NOS FILIALES
                </Link>
              </li>
              <li className="border-b border-slate-800 flex items-center">
                <img className="w-3 h-2" src={chevron} alt="icon chevron" />
                <Link
                  onClick={scrollToTop}
                  to="/projects"
                  className="p-2 block text-slate-400 hover:text-white"
                >
                  NOS PROJETS
                </Link>
              </li>
              <li className="flex items-center">
                <img className="w-3 h-2" src={chevron} alt="icon chevron" />
                <Link
                  onClick={scrollToTop}
                  to="/contact"
                  className="p-2 block text-slate-400 hover:text-white"
                >
                  CONTACTS
                </Link>
              </li>
            </ul>
          </div>

          {/* Commentaires */}
          <div>
            <h4 className="text-sm font-semibold">Commentaires</h4>
            <p className="text-xs pt-2 text-slate-400">
              <span className="text-green-500">@Pseudo</span> Je recommande
              vivement le Groupe ORIA pour tous vos projets immobiliers. Leurs
              réalisations sont synonymes de qualité et de confort.
            </p>
            <p className="text-xs text-slate-200 pt-2">Il y Link 2 heures</p>

            <p className="text-xs text-slate-400 mt-4 pt-2">
              <span className="text-green-500">@Pseudo</span> J ai été
              impressionné par la qualité des constructions du Groupe ORIA !
              Leurs projets sont esthétiques et fonctionnels. Un vrai
              savoir-faire local.
            </p>
            <p className="text-xs text-slate-200 pt-2">Il y Link 2 heures</p>
          </div>

          {/* Nos actus */}
          <div>
            <h4 className="text-sm font-semibold">Nos actus</h4>
            <ul className="text-xs space-y-4 pt-2">
              <li className="flex border-b border-slate-800 pb-4">
                <img
                  className="mt-1 w-10 h-10"
                  src={actus_1}
                  alt="image actus 1"
                />
                <div className="pl-4">
                  <Link to="#" className="hover:text-white text-slate-400 pt-2">
                    PIONNIER DE LA CONSTRUCTION À M/CAR
                  </Link>
                  <p className="text-xs text-gray-200 pt-2">
                    Le: 25 Septembre 2024
                  </p>
                </div>
              </li>

              <li className="flex ">
                <img
                  className="mt-1 w-10 h-10"
                  src={actus_2}
                  alt="image actus 2"
                />
                <div className="pl-4">
                  <Link to="#" className="hover:text-white text-slate-400">
                    PIONNIER DE LA CONSTRUCTION À M/CAR
                  </Link>
                  <p className="text-xs text-gray-200 pt-2">
                    Le: 25 Septembre 2024
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full lg:h-20 mt-12 bg-neutral-900 flex flex-col md:flex-row  justify-center items-center text-xs text-gray-400">
        <div className="left p-4 lg:px-32 w-full md:w-1/2 h-full flex justify-center flex-col ">
          <p>
            Groupe Oria © Tous droits réservés. Designed by{" "}
            <Link to="https://monde-parallele.company.site" className="text-green-500 underline" target="_blank" rel="noopener noreferrer">
              Monde Parallèle Agency
            </Link>
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white">
              {" "}
              - Terms of Use
            </Link>
          </div>
        </div>
        <div className="right p-4 lg:px-32 w-full md:w-1/2 h-full flex items-center  justify-end ">
          <div className="social items-center flex w-48">
            <img className="w-11 h-11" src={facebook} alt="icon facebook" />
            {/* <img className="w-8 h-8" src={social} alt="icon google" /> */}
            <img className="w-8 h-8" src={twitter} alt="icon tweeter" />
            <img className="w-9 h-9" src={linkedin} alt="icon linkedin" />
          </div>
        </div>
      </div>
    </footer>
  );
}
