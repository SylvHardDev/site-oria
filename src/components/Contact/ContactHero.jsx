import "./Contact.css";

function ContactHero() {
  return (
    <section className="contact-hero w-full h-[30vh] flex justify-center items-center flex-col relative">
      <div className="contact-layer"></div>
      <h3 className="reveal text-green-500 text-xs">NOUS SOMME LA POUR VOUS!</h3>
      <h1 className="reveal reveal-delay text-3xl md:text-5xl text-white">CONTACTEZ-NOUS</h1>
      <h3 className="reveal reveal-delay text-xs mt-3 text-white">Accueil / Contacts</h3>
    </section>
  );
}

export default ContactHero;
