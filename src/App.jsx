import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import FilialeHCM from "./components/FilialeHCM/FilialeHCM"
import Testimoinials from "./components/Testimoinials/Testimoinials"
import FilialeSCI from "./components/FilialeSCI/FilialeSCI"
import Clients from "./components/NosCliensts/Clients"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <FilialeHCM/>
      <FilialeSCI/>
      <Testimoinials />
      <Clients/>
    </>
  )
}

export default App
