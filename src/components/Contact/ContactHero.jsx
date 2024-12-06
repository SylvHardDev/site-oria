import "./Contact.css";
import bg_hero from "../../assets/images/bg_hero_contact.webp"
import { BlurhashCanvas } from "react-blurhash";
import { useEffect, useState } from "react";

function ContactHero() {

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const blurHash = "LgGu?zWXMxNG_NIps9xZ-=Rkn$ay"; // lien BlurHash

  useEffect(() => {
    const img = new Image();
    img.src = bg_hero;
    img.onload = () => setIsImageLoaded(true);
  }, [bg_hero]);


  return (
    <section className="contact-hero w-full mt-16 h-[30vh] flex justify-center items-center flex-col relative"
      style={{
        background: isImageLoaded
          ? `url(${bg_hero}) center/cover no-repeat background-attachment: fixed background-position: bottom` : "",
      }}>
      {!isImageLoaded && (
        <BlurhashCanvas
          hash={blurHash}
          className="absolute inset-0 w-full rounded-md h-full"
        />
      )}
      <div className="contact-layer"></div>
      <h3 className="reveal text-green-500 text-xs">
        NOUS SOMME LA POUR VOUS!
      </h3>
      <h1 className="reveal reveal-delay text-3xl md:text-5xl text-white">
        CONTACTEZ-NOUS
      </h1>
      <h3 className="reveal reveal-delay text-xs mt-3 text-white">
        Accueil / Contacts
      </h3>
    </section>
  );
}

export default ContactHero;
