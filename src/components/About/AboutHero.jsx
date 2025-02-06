import { useEffect, useState } from "react";
import "./About.css";
import bg_hero from "../../assets/images/bg_apropos_hero.webp"
import { BlurhashCanvas } from "react-blurhash";

function AboutHero() {

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const blurHash = "LGIz-C~pD*^hD+slIpxZR*RkRkt6";

  useEffect(() => {
    const img = new Image();
    img.src = bg_hero;
    img.onload = () => setIsImageLoaded(true);
  }, [bg_hero]);


  return (
    <section className="about-hero w-full mt-16 h-[30vh] flex justify-center items-center flex-col relative"
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
      <div className="about-layer"></div>
      <h3 className="reveal text-green-500 text-xs">QUI SOMME-NOUS?</h3>
      <h1 className="reveal reveal-delay text-5xl text-white">A propos</h1>
      <h3 className="reveal reveal-delay text-xs mt-3 text-white">
        Accueil / A propos
      </h3>
    </section>
  );
}

export default AboutHero;
