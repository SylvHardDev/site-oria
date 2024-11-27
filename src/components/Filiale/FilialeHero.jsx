import "./Filiale.css";

function FilialeHero() {
  return (
    <section className="filiale-hero w-full mt-16 h-[30vh] flex justify-center items-center flex-col relative">
      <div className="filiale-layer"></div>
      <h3 className="reveal text-green-500 text-xs">HCM | SCI DM</h3>
      <h1 className="reveal-delay reveal text-3xl md:text-5xl text-white">
        NOS FILIALES
      </h1>
      <h3 className="reveal reveal-delay text-xs mt-3 text-white">
        Accueil / Nos filiales
      </h3>
    </section>
  );
}

export default FilialeHero;
