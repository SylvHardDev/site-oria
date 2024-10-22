import FilialeHCM from '@/components/FilialeHCM/FilialeHCM'
import FilialeSCI from '@/components/FilialeSCI/FilialeSCI'
import Hero from '@/components/Hero/Hero'

function Home() {
  return (
    <>
      <Hero />
      <FilialeHCM />
      <FilialeSCI />
    </>
  )
}

export default Home