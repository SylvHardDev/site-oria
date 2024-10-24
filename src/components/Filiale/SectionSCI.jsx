import { Button } from "../ui/button";
import construct from "../../assets/icons/double-house-gray.png"
import goute from "../../assets/icons/goute-gray.png"
import house from "../../assets/icons/house-gray.png"
import classeur from "../../assets/icons/classeur-gray.png"
import logo_SCI from "../../assets/logo/Logo_SCI_result.webp"


function SectionSCI() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-32">
        {/* Titre principal */}
        <div>
          <h2 className="text-blue-600 text-xs uppercase mb-2">
            <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            Notre Filiale
          </h2>
          <h1 className="text-2xl font-bold mb-4">SCI-DM</h1>
          <p className="text-sm text-gray-600 mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </p>
        </div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Carrelage */}
          <div className="bg-blue-900 text-white p-6 rounded-lg">
            <div className="title  flex justify-between">
              <div className="mb-4 flex flex-col">
                <span className="inline-block w-2 h-2 bg-green-600 mr-2 "></span>
                <h3 className="inline-block text-2xl pt-4">Carrelage</h3>
              </div>
              <div className="icon p-2 w-12 h-12 bg-slate-200 rounded-sm">
                <img src={goute} alt="icone goute" />
              </div>
            </div>
            <p className="text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat.
            </p>
            <Button className="bg-green-600 text-white py-2 px-4 rounded">
              Lire plus
            </Button>
          </div>

          {/* Rénovations */}
          <div className="border p-6 rounded-lg">
          <div className="title  flex justify-between">
              <div className="mb-4 flex flex-col">
                <span className="inline-block w-2 h-2 bg-black mr-2 "></span>
                <h3 className="inline-block text-2xl pt-4">Rénovation</h3>
              </div>
              <div className="icon p-2 w-12 h-12 bg-slate-100 rounded-sm">
                <img src={house} alt="icone goute" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat.
            </p>
            <Button className="bg-green-600 text-white py-2 px-4 rounded">
              Lire plus
            </Button>
          </div>

          {/* Design et construction */}
          <div className="border p-6 rounded-lg">
          <div className="title  flex justify-between">
              <div className="mb-4 flex flex-col">
                <span className="inline-block w-2 h-2 bg-black mr-2 "></span>
                <h3 className="inline-block text-2xl pt-4">Design et construction</h3>
              </div>
              <div className="icon p-2 w-12 h-12 bg-slate-100 rounded-sm">
                <img src={construct} alt="icone goute" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat.
            </p>
            <Button className="bg-green-600 text-white py-2 px-4 rounded">
              Lire plus
            </Button>
          </div>

          {/* Consulting */}
          <div className="border p-6 rounded-lg">
          <div className="title  flex justify-between">
              <div className="mb-4 flex flex-col">
                <span className="inline-block w-2 h-2 bg-black mr-2 "></span>
                <h3 className="inline-block text-2xl pt-4">Consulting</h3>
              </div>
              <div className="icon p-2 w-12 h-12 bg-slate-100 rounded-sm">
                <img src={classeur} alt="icone goute" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat.
            </p>
            <Button className="bg-green-600 text-white py-2 px-4 rounded">
              Lire plus
            </Button>
          </div>

          {/* Management */}
          <div className="border p-6 rounded-lg">
          <div className="title  flex justify-between">
              <div className="mb-4 flex flex-col">
                <span className="inline-block w-2 h-2 bg-black mr-2 "></span>
                <h3 className="inline-block text-2xl pt-4">Management</h3>
              </div>
              <div className="icon p-2 w-12 h-12 bg-slate-100 rounded-sm">
                <img src={goute} alt="icone goute" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat.
            </p>
            <Button className="bg-green-600 text-white py-2 px-4 rounded">
              Lire plus
            </Button>
          </div>

          {/* Logo */}
          <div className="flex justify-center items-center">
            <img
              src={logo_SCI}
              alt="HCM logo"
              className="h-52 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSCI