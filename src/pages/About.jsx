import AboutHero from "@/components/About/AboutHero"
import SectionHistorique from "@/components/About/SectionHistorique"
import SectionNotreEquipe from "@/components/About/SectionNotreEquipe"
import SectionService from "@/components/About/SectionService"

function About() {
  return (
    <>
      <AboutHero/>
      <SectionHistorique/>
      <SectionService/>
      <SectionNotreEquipe/>
    </>
  )
}

export default About