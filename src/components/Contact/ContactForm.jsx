import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import phone from "../../assets/icons/phone.png"
import maps from "../../assets/icons/maps.png"

import photo from "../../assets/images/illustration-construction-site.webp"

function ContactForm() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 bg-gray-100">
      <div className="container mx-auto px-6 lg:flex lg:space-x-10 lg:items-start">
        
        {/* Section Image */}
        <div className="lg:w-1/2">
          <img
            src={photo}
            alt="Site de construction"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Section Formulaire et informations de contact */}
        <div className="lg:w-1/3 mt-10 lg:mt-0 space-y-8">
          
          {/* Texte d'introduction */}
          <div className="space-y-2 text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, adipiscing condimentum tristique vel, eleifend sed turpis.
            </p>
            <p>
              Amet, consectetur adipiscing elit Integer.
            </p>
          </div>

          {/* Informations de contact */}
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center space-x-2">
              <img className="bg-green-600 p-1 rounded-full w-5 h-5" src={phone} alt="icone telephone" />
              <span>Phone : 020 23 314 14</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Email : example@domain.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <img className="bg-green-600 p-1 rounded-full w-5 h-5" src={maps} alt="icone maps" />
              <span>Adresse : lorem ipsum dolor sit amet, adipiscing</span>
            </div>
          </div>

          {/* Formulaire de contact */}
          <form className="space-y-4">
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

            <Button type="submit" variant="green" className="w-full mt-4">
              Envoyer le message
            </Button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default ContactForm