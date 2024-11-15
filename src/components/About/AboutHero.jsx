// import bg_hero from "../../assets/images/scene-construction-site-with-equipment.jpg"
import "./About.css";

function AboutHero() {
  return (
    <section className="about-hero w-full mt-16 h-[30vh] flex justify-center items-center flex-col relative">
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
