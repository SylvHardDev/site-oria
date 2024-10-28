import FilialeHero from "@/components/Filiale/FilialeHero"
import SectionCollab from "@/components/Filiale/SectionCollab"
import SectionHCM from "@/components/Filiale/SectionHCM"
import SectionSCI from "@/components/Filiale/SectionSCI"

function Filiale() {
  return (
    <>
      <FilialeHero/>
      <SectionHCM/>
      <SectionCollab/>
      <SectionSCI/>
    </>
  )
}

export default Filiale