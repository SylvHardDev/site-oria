import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
import Clients from "@/components/NosCliensts/Clients"

function MainLayout({children}) {
  return (
    <>
      <Navbar/>
        <main>
          {children}
        </main>
      <Clients />
      <Footer/>
    </>
  )
}

export default MainLayout