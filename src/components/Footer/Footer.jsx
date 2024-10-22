import "./Footer.css"
import lamp from "../../assets/icons/lamp.png"
import phone from "../../assets/icons/phone.png"
import maps from "../../assets/icons/maps.png"

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12 pb-0">
      <div className="container mx-auto px-6 ">
        {/* Top section with three blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ">
          {/* Block 1: Qui sommes-nous */}
          <div className="flex items-center">
            <div className="mr-4">
              {/* Icon */}
              <div className="w-10 h-10 bg-green-600 rounded-full flex justify-center items-center">
                <svg className="text-white w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold">QUI SOMMES-NOUS?</h4>
              <p className="text-sm">
                Nous regroupons des entités spécialisées dans les secteurs de la
                construction et de la gestion immobilière à Madagascar.
              </p>
            </div>
          </div>

          {/* Block 2: Adresse */}
          <div className="flex items-center">
            <div className="mr-4">
              {/* Icon */}
              <div className="w-10 h-10 bg-green-600 rounded-full flex justify-center items-center">
                <svg className="text-white w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 4.25 7 13 7 13s7-8.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold">ADRESSE</h4>
              <p className="text-sm">Antananarivo</p>
            </div>
          </div>

          {/* Block 3: Contacts */}
          <div className="flex items-center">
            <div className="mr-4">
              {/* Icon */}
              <div className="w-10 h-10 bg-green-600 rounded-full flex justify-center items-center">
                <svg className="text-white w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.74 19.74 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72 12.18 12.18 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11l-1.27 1.28a16 16 0 0 0 6.61 6.61l1.28-1.27a2 2 0 0 1 2.11-.45 12.18 12.18 0 0 0 2.81.7 2 2 0 0 1 1.72 2z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold">CONTACTS</h4>
              <p className="text-sm">020 23 314 14</p>
              <p className="text-sm">020 23 314 14</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Nos horaires */}
          <div>
            <h4 className="text-lg font-semibold">Nos horaires</h4>
            <p className="text-sm">Jours Ouvrables :</p>
            <p className="text-sm text-gray-400">Lundi - Vendredi : heure</p>
            <p className="text-sm text-gray-400">Samedi : heure</p>
            <p className="text-sm">Période de vacances :</p>
            <p className="text-sm text-gray-400">Toujours ouverts</p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-lg font-semibold">Menu</h4>
            <ul className="text-sm space-y-1">
              <li><a href="/" className="text-green-500 hover:text-white">ACCUEIL</a></li>
              <li><a href="/about" className="text-green-500 hover:text-white">A PROPOS</a></li>
              <li><a href="/filiales" className="text-green-500 hover:text-white">NOS FILIALES</a></li>
              <li><a href="/projects" className="text-green-500 hover:text-white">NOS PROJETS</a></li>
              <li><a href="/contact" className="text-green-500 hover:text-white">CONTACTS</a></li>
            </ul>
          </div>

          {/* Commentaires */}
          <div>
            <h4 className="text-lg font-semibold">Commentaires</h4>
            <p className="text-sm">
              <span className="text-green-500">@Pseudo</span> Je recommande vivement le Groupe ORIA pour tous vos projets immobiliers. Leurs réalisations sont synonymes de qualité et de confort.
            </p>
            <p className="text-xs text-gray-400">Il y a 2 heures</p>

            <p className="text-sm mt-4">
              <span className="text-green-500">@Pseudo</span> J ai été impressionné par la qualité des constructions du Groupe ORIA ! Leurs projets sont esthétiques et fonctionnels. Un vrai savoir-faire local.
            </p>
            <p className="text-xs text-gray-400">Il y a 2 heures</p>
          </div>

          {/* Nos actus */}
          <div>
            <h4 className="text-lg font-semibold">Nos actus</h4>
            <ul className="text-sm space-y-4">
              <li>
                <a href="#" className="hover:text-white">PIONNIER DE LA CONSTRUCTION À M/CAR</a>
                <p className="text-xs text-gray-400">Le: 25 Septembre 2024</p>
              </li>
              <li>
                <a href="#" className="hover:text-white">PIONNIER DE LA CONSTRUCTION À M/CAR</a>
                <p className="text-xs text-gray-400">Le: 25 Septembre 2024</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
      {/* Footer Bottom */}
      <div className="w-full h-20 mt-12 bg-neutral-900 flex flex-col md:flex-row justify-center items-center text-xs text-gray-400">
        <div className="left px-32 flex justify-center flex-col h-full w-1/2 border">
          <p>Groupe Oria © Tous droits réservés. Designed by <a href="#" className="text-green-500 underline">Monde Parallèle Agency</a></p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white"> - Terms of Use</a>
          </div>
        </div>
        <div className="right h-full flex items-center px-32 justify-end w-1/2">
          <div className="social flex w-48">
            <img className="w-11 h-11" src={phone} alt="icon facebook" />
            <img className="w-11 h-11" src={phone} alt="icon google" />
            <img className="w-11 h-11" src={phone} alt="icon tweeter" />
            <img className="w-11 h-11" src={phone} alt="icon linkedin" />
          </div>
        </div>
      </div>
    </footer>
  );
}




