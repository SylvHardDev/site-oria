import { Button } from '../ui/button'
import './Clients.css'

function Clients() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-32">
        {/* Section title */}
        <div className="mb-8">
          <h3 className="text-blue-900 text-[12px] font-semibold uppercase flex items-center">
            <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            ILS NOUS FONT FONFIANCE
          </h3>
          <h2 className="text-3xl font-bold text-gray-900">
            NOS CLIENTS
          </h2>
          <div className="flex justify-between">
            <p className="mt-2 text-[15px] w-2/3 text-gray-400">
              HCM et SCI DM accompagnent une clientèle variée depuis les particuliers suhaite acquérir leur résidence principale  jusqu aux entreprises à la recherche de locaux professionnels.
            </p>
            <Button className="inline-block backdrop-grayscale-0 w-40 bg-green-600">TOUT NOS CLIENTS</Button>
          </div>

        </div>

        <div className="logo-clients h-20 flex justify-around items-center">
          <div className="logo border h-[100%] w-[100%] flex items-center justify-center">
            <h3 className='bordel text-blue-800 text-[25px]'>
              LOGO
            </h3>
          </div>
          <div className="logo border h-[100%] w-[100%] flex items-center justify-center">
            <h3 className='bordel text-green-500 text-[25px]'>
              LOGO
            </h3>
          </div>
          <div className="logo border h-[100%] w-[100%] flex items-center justify-center">
            <h3 className='bordel text-blue-800 text-[25px]'>
              LOGO
            </h3>
          </div>
          <div className="logo border h-[100%] w-[100%] flex items-center justify-center">
            <h3 className='bordel text-green-500 text-[25px]'>
              LOGO
            </h3>
          </div>
          <div className="logo border h-[100%] w-[100%] flex items-center justify-center">
            <h3 className='bordel text-blue-800 text-[25px]'>
              LOGO
            </h3>
          </div>
          <div className="logo border h-[100%] w-[100%] flex items-center justify-center">
            <h3 className='bordel text-green-500 text-[25px]'>
              LOGO
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients