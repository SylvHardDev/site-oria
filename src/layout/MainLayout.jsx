import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
import Clients from "@/components/NosCliensts/Clients"
import Testimoinials from "@/components/Testimoinials/Testimoinials"
import { useLocation } from "react-router-dom";

function MainLayout({children}) {
  const location = useLocation();
const isContactPage = location.pathname === "/contact";
  return (
    <>
      <Navbar/>
        <main>
          {children}
        </main>
      {!isContactPage && <Testimoinials />}
      <Clients />
      <Footer/>
    </>
  )
}

export default MainLayout