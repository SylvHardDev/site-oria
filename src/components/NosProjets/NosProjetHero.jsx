import "./NosProjet.css";

function NosProjetHero() {
  return (
    <section className="nos-projet-hero w-full mt-16 h-[30vh] flex justify-center items-center flex-col relative">
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
