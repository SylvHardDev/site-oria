import './Filiale.css'
import { Button } from '../ui/button';
import batiments from '../../assets/images/BATIMENTS.png'
import genie from '../../assets/images/GENIE_CIVIL.png'

export default function Filiale() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-40">
        {/* Section title */}
        <div className="mb-8">
          <h3 className="text-blue-900 text-[12px] font-semibold uppercase flex items-center">
            <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            ENTITÉS DU GROUPE
          </h3>
          <h2 className="text-3xl font-bold text-gray-900">
            HCM
          </h2>
          <div className="flex justify-between">
            <p className="mt-2 text-[15px] w-2/3 text-gray-400">
              HCM (Habitat & Constructions de Madagascar) s engage à offrir des
              solutions innovantes et de qualité pour le secteur de la
              construction.
            </p>
            <Button className="inline-block backdrop-grayscale-0 w-40 bg-green-600">Nos projets</Button>

          </div>
        </div>

        {/* Cards section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-800 text-white p-6 rounded-lg shadow-lg">
            <p className="text-base">
              HCM, en tant qu acteur majeur du BTP dans le pays, se spécialise
              dans le bâtiment, le génie civil, les réseaux, les ouvrages
              d art, et les métiers spécialisés pour le développement et
              l immobilier.
            </p>
            <button className="mt-6 bg-green-600 text-white px-4 py-2 rounded-md">
              Lire plus
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-center p-6 border rounded-lg shadow-lg">
            <div className="flex justify-center items-center mb-4">
              {/* Replace the icon here */}
              <img
                src={batiments}
                alt="Bâtiments Icon"
                className="h-28 w-28"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Bâtiments</h3>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-center p-6 border rounded-lg shadow-lg">
            <div className="flex justify-center items-center mb-4">
              {/* Replace the icon here */}
              <img
                src={genie}
                alt="Génie Civil Icon"
                className="h-28 w-28"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Génie civil</h3>
          </div>

          {/* Card 4 */}
          <div className="bg-white text-center p-6 border rounded-lg shadow-lg">
            <div className="flex justify-center items-center mb-4">
              {/* Replace the icon here */}
              <img
                src="/path-to-icon3.png"
                alt="Réseaux Icon"
                className="h-28 w-28"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Réseaux</h3>
          </div>
        </div>

        {/* Footer section */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Confiez vos projets immobiliers à HCM : notre expertise dans le
            bâtiment, le génie civil et les ouvrages d art, associée à notre
            engagement qualité, garantit la réussite de vos réalisations.
          </p>
          <button className="mt-6 bg-blue-800 text-white px-6 py-3 rounded-md">
            COLLABORONS
          </button>
        </div>
      </div>
    </section>
  );
}
