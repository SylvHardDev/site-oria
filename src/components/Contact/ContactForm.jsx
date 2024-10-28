import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import maps from "../../assets/icons/location-vert.png";
import mail from "../../assets/icons/MAIL.png";
import phone from "../../assets/icons/phone-vert.png";

function ContactForm() {
  return (
    <div className="text-sm items-center justify-center w-full py-10 px-4 md:px-32 ">
      <div className="container mx-auto lg:flex lg:space-x-10 lg:items-start">
        {/* Section Formulaire et informations de contact */}
        <div className="flex flex-col lg:flex-row lg:gap-10 p-4 md:p-10">
          {/* Formulaire de contact */}
          <form className="space-y-4 lg:w-1/2 mb-4">
            <div className="flex space-x-4">
              <Input
                label="Nom"
                placeholder="Nom"
                className="flex-1"
                required
              />
              <Input
                label="Email"
                placeholder="Email"
                type="email"
                className="flex-1"
                required
              />
            </div>

            <Textarea
              label="Message"
              placeholder="Votre message"
              rows={4}
              className="w-full"
              required
            />

            <Button type="submit" className="w-full mt-4 bg-green-700">
              Envoyer le message
            </Button>
          </form>

          <div className="right md:w-1/2 flex-col">
            {/* Texte d'introduction */}
            <div className="space-y-4 text-gray-700">
              <p>
                Lorem ipsum dolor sit amet, adipiscing condimentum tristique
                vel, eleifend sed turpis.
              </p>
              <p>Amet, consectetur adipiscing elit Integer.</p>
            </div>

            {/* Informations de contact */}
            <div className="space-y-4 mt-4 text-gray-700">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-col space-x-2">
                  <p>Phone :</p>
                  <div className="flex space-x-2">
                    <img
                      className="w-4 h-4 my-auto"
                      src={phone}
                      alt="icone telephone"
                    />
                    <span>Phone : 020 23 314 14</span>
                  </div>
                </div>
                <div className="flex-col space-x-2">
                  <p>Email :</p>
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-4 h-4 my-auto"
                      src={mail}
                      alt="icone telephone"
                    />
                    <span>example@domain.com</span>
                  </div>
                </div>
              </div>
              <div className="flex-col space-x-2">
                <p>Adresse :</p>
                <div className="flex items-center space-x-2">
                  <img className="w-4 h-4" src={maps} alt="icone maps" />
                  <span>lorem ipsum dolor sit amet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
