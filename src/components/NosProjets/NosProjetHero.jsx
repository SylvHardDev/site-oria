import "./NosProjet.css";
import bg_hero from "../../assets/images/bg_project-hero.webp"
import { BlurhashCanvas } from "react-blurhash";
import { useEffect, useState } from "react";

function NosProjetHero() {

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const blurHash = "LfH^q;xZ9uWG~Dj]Rjt69$R-xZox"; // lien BlurHash

  useEffect(() => {
    const img = new Image();
    img.src = bg_hero;
    img.onload = () => setIsImageLoaded(true);
  }, [bg_hero]);


  return (
    <section className="nos-projet-hero w-full mt-16 h-[30vh] flex justify-center items-center flex-col relative"
      style={{
        background: isImageLoaded
          ? `url(${bg_hero}) center/cover no-repeat` : "",
      }}>
      {!isImageLoaded && (
        <BlurhashCanvas
          hash={blurHash}
          className="absolute inset-0 w-full rounded-md h-full"
        />
      )}
      <div className="nos-projet-layer"></div>
      <h3 className="reveal text-green-500 text-xs">HCM | SCI DM</h3>
      <h1 className="reveal-delay reveal text-3xl md:text-5xl text-white">
        NOS PROJETS
      </h1>
      <h3 className="reveal-delay reveal text-xs mt-3 text-white">
        Accueil / Nos projets
      </h3>
    </section>
  );
}

export default NosProjetHero;
