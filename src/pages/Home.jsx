import FilialeHCM from '@/components/FilialeHCM/FilialeHCM'
import FilialeSCI from '@/components/FilialeSCI/FilialeSCI'
import Hero from '@/components/Hero/Hero'
import Testimoinials from '@/components/Testimoinials/Testimoinials'

function Home() {
  return (
    <>
      <Hero />
      <FilialeHCM />
      <FilialeSCI />
      <Testimoinials />
    </>
  )
}

export default Home