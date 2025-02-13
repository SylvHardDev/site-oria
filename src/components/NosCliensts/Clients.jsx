import { Button } from "../ui/button";
import "./Clients.css";
import akoor from "../../assets/logo/akoor_logo.webp"
import madstell from "../../assets/logo/madstell_logo.webp"
import luceo from "../../assets/logo/luceo_logo_1.webp"
import bricofer from "../../assets/logo/bricofer_logo.webp"

function Clients() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-32">
        {/* Section title */}
        <div className="mb-8">
          <h3 className="text-blue-900 text-[12px] font-semibold uppercase flex items-center">
            <span className="inline-block w-2 h-2 bg-oriaTheme mr-2 ease-in-out"></span>
            ILS NOUS FONT FONFIANCE
          </h3>
          <h2 className="text-3xl font-bold text-gray-900">NOS CLIENTS</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="my-2 text-[15px] md:w-2/3 text-gray-400">
              HCM et SCI DM accompagnent une clientèle variée depuis les
              particuliers suhaite acquérir leur résidence principale jusqu aux
              entreprises à la recherche de locaux professionnels.
            </p>
          </div>
        </div>

        <div className="logo-clients flex flex-wrap gap-4 lg:gap-0 lg:flex-nowrap  justify-evenly items-center mb-4">
          <div className="logo h-[100%] basis-1/3 md:w-[100%] flex items-center justify-center">
            <img src={bricofer} alt="logo akoor" />
          </div>
          <div className="logo h-[100%] basis-1/3 md:w-[100%] flex items-center justify-center">
            <img src={akoor} alt="logo akoor" />
          </div>
          <div className="logo h-[100%] basis-1/3 md:w-[100%] flex items-center justify-center">
            <img src={madstell} alt="logo akoor" />
          </div>
          <div className="logo h-[100%] basis-1/3 md:w-[100%] flex items-center justify-center">
            <img src={luceo} alt="logo akoor" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
