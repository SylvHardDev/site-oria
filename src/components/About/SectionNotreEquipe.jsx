import { Button } from "../ui/button"
import visage from "../../assets/images/images-provisoir.jpg"

function SectionNotreEquipe() {
  return (
    <section className="py-12 px-32 text-center">
      <div className="container mx-auto">
        <div className="mb-8 text-start">
          <h3 className="text-blue-900 text-[12px] font-semibold uppercase flex items-center">
            <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            CREATIVITE
          </h3>
          <h2 className="text-3xl font-bold text-gray-900">
            NOTRE EQUIPE
          </h2>
          <div className="flex justify-between">
            <p className="mt-2 text-[15px] w-2/3 text-gray-400">
              HCM (Habitat & Constructions de Madagascar) s engage à offrir des
              solutions innovantes et de qualité pour le secteur de la
              construction.
            </p>
            <Button className="inline-block backdrop-grayscale-0 w-40 bg-blue-900">VOIR TOUT</Button>

          </div>
        </div>
        <div className="text-start grid md:grid-cols-4 gap-6">
          <div className="bg-gray-100 pb-6">
            <img src={visage} alt="Team Member" className="w-full mb-4"/>
            <h3 className="pl-4 text-2xl">Nom</h3>
            <p className="pl-4">Poste</p>
          </div>
          <div className="bg-gray-100 pb-6">
            <img src={visage} alt="Team Member" className="w-full mb-4"/>
            <h3 className="pl-4 text-2xl">Nom</h3>
            <p className="pl-4">Poste</p>
          </div>
          <div className="bg-gray-100 pb-6">
            <img src={visage} alt="Team Member" className="w-full mb-4"/>
            <h3 className="pl-4 text-2xl">Nom</h3>
            <p className="pl-4">Poste</p>
          </div>
          <div className="bg-gray-100 pb-6">
            <img src={visage} alt="Team Member" className="w-full mb-4"/>
            <h3 className="pl-4 text-2xl">Nom</h3>
            <p className="pl-4">Poste</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionNotreEquipe