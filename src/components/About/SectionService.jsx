import { Button } from "../ui/button";
import contruct from "../../assets/icons/double-house.png"
import goute from "../../assets/icons/goute.png"
import house from "../../assets/icons/house.png"
import classeur from "../../assets/icons/classeur.png"

function SectionService() {
  return (
    <section className="py-12 bg-gray-100 px-32 text-center">
      <div className="container mx-auto">
        <div className="mb-8 text-start">
          <h3 className="text-blue-900 text-[12px] font-semibold uppercase flex items-center">
            <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            LA QUALITE DE
          </h3>
          <h2 className="text-3xl font-bold text-gray-900">
            NOS SERVICES
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
        <div className="grid md:grid-cols-4">
          <div className="bg-blue-900 text-white p-6">
            <img src={contruct} alt="construction icon" className="w-14 h-14 my-6 mx-auto" />
            <h3 className="text-xl mb-2">CONSTRUCTION</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              diam nonummy nibh.
            </p>
          </div>
          <div className="bg-green-600 text-white p-6">
            <img src={goute} alt="construction icon" className="w-14 h-14 my-6 mx-auto" />
            <h3 className="text-xl mb-2">CARRELAGE ET PEINTURE</h3>
          </div>
          <div className="bg-green-600 text-white p-6">
            <img src={house} alt="construction icon" className="w-14 h-14 my-6 mx-auto" />
            <h3 className="text-xl mb-2">RÉNOVATIONS</h3>
          </div>
          <div className="bg-green-600 text-white p-6">
            <img src={classeur} alt="construction icon" className="w-14 h-14 my-6 mx-auto" />
            <h3 className="text-xl mb-2">CONSULTING</h3>
          </div>
        </div>

        <div className="bg-white text-start p-4 mt-12 rounded-sm flex items-center justify-between border">
          <p className="mt-2 text-[15px] w-2/3 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ex quae odit eos ab, quas asperiores veritatis porro repudiandae vero at nesciunt.
          </p>
          <Button className="bg-blue-900 w-40">COLLABORONS</Button>
        </div>
      </div>
    </section>
  );
}

export default SectionService