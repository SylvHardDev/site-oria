import AboutHero from "@/components/About/AboutHero";
import SectionHistorique from "@/components/About/SectionHistorique";
import SectionNotreEquipe from "@/components/About/SectionNotreEquipe";
import SectionService from "@/components/About/SectionService";
import Arrow from "@/components/Arrow/Arrow";

function About() {
  return (
    <>
      <AboutHero />
      <SectionHistorique />
      <SectionService />
      <SectionNotreEquipe />
      <Arrow />
    </>
  );
}

export default About;
