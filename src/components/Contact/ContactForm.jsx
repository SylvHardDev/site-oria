import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mail from "../../assets/icons/MAIL.png";
import maps from "../../assets/icons/location-vert.png";
import phone from "../../assets/icons/phone-vert.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import emailjs from "@emailjs/browser";

function ContactForm() {

  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
        .sendForm(
            'Service_oria',
            'template_ql97xot',
            refForm.current,
            'yDdLGO_oO4v91EyZX' 
        )
        .then(() => {
            toast.success('Message envoyé avec succès!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            refForm.current.reset()
        })
        .catch((error) => {
            console.error("Erreur d'envoi:", error)
            toast.error("Erreur d'envoi, veuillez réessayer", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        })
}

  return (  
    <div className="text-sm items-center justify-center w-full py-10 px-4 md:px-32 ">
      <ToastContainer />
      <div className="container mx-auto pb-10 lg:flex lg:space-x-10 lg:items-start">
        {/* Section Formulaire et informations de contact */}
        <div className="flex flex-col md:flex-row gap-10 w-full mx-auto my-auto">
          {/* Formulaire de contact */}
          <form className="space-y-4 lg:w-1/2" ref={refForm} onSubmit={sendEmail}>
            <div className="flex space-x-4">
              <Input
                label="Nom"
                placeholder="Nom"
                className="flex-1"
                name="name"
                required
              />
              <Input
                label="Email"
                placeholder="Email"
                type="email"
                className="flex-1"
                required
                name="email"
              />
            </div>

            <Textarea
              label="Message"
              placeholder="Votre message"
              rows={4}
              className="w-full"
              required
              name="message"
            />

            <Button type="submit" className="w-full mt-4 bg-green-700">
              Envoyer le message
            </Button>
          </form>

          <div className="right lg:w-1/2 flex-col">
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
              <div className="flex flex-col lg:flex-row w-[100%] justify-between">
                <div className="flex-col space-x-2">
                  <p>Phone :</p>
                  <div className="flex space-x-2">
                    <img
                      className="w-4 h-4 my-auto"
                      src={phone}
                      alt="icone telephone"
                    />
                    <span>020 23 314 14</span>
                  </div>
                </div>

                <div className="flex-col space-x-2">
                  <p>Email :</p>
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-4 h-4 "
                      src={mail}
                      alt="icone telephone"
                    />
                    <p>example@domain.com</p>
                  </div>
                </div>
              </div>
              <div className="flex-col  ">
                <p>Adresse :</p>
                <div className="flex items-center space-x-2 space-y-2">
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
