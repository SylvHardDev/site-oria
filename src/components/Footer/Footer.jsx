import chevron from "../../assets/icons/chevron.png";
import actus_1 from "../../assets/images/actu-img-1.png";
import actus_2 from "../../assets/images/actu-img-2.png";
import { Link } from "react-router-dom";
import "./Footer.css";
import block from "../../../block.json"

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <footer className="bg-[#29276c] text-white py-12 pb-0">
      <div className="container mx-auto px-6 md:px-24 ">
        {/* Top section with three blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {block.block.map((block) => (
            <div className="flex pl-4 p-2 items-center border border-slate-600 relative">
              <div className="mr-4">
                <div className="w-10 h-10 bg-green-600 flex justify-center items-center translate-y-10">
                  <img src={block.image} alt="icon lamp" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold">{block.title}</h4>
                <p className="text-xs text-slate-400">{block.texte1}</p>
                <p className="text-xs text-slate-400">{block.texte2}</p>
              </div>
            </div>
          ))}
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
            <Link
              to="https://monde-parallele.company.site"
              className="text-green-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            <svg
              fill="#ffffff"
              width="24px"
              height="24px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
              </g>
            </svg>
            <svg
              fill="#ffffff"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="-271 283.9 256 235.1"
              xml:space="preserve"
              width="20px"
              height="20px"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <rect
                    x="-264.4"
                    y="359.3"
                    width="49.9"
                    height="159.7"
                  ></rect>{" "}
                  <path d="M-240.5,283.9c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C-210.8,295.8-222.1,283.9-240.5,283.9z"></path>{" "}
                  <path d="M-78.2,357.8c-28.6,0-46.5,15.6-49.8,26.6v-25.1h-56.1c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4V519h56.6v-88.8C-14.9,380.8-42.7,357.8-78.2,357.8z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
