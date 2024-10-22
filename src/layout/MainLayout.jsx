import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
import Clients from "@/components/NosCliensts/Clients"
import Testimoinials from "@/components/Testimoinials/Testimoinials"

function MainLayout({children}) {
  return (
    <>
      <Navbar/>
        <main>
          {children}
        </main>
      <Testimoinials />
      <Clients />
      <Footer/>
    </>
  )
}

export default MainLayout