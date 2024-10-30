import MainLayout from "@/layout/MainLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Filiale from "@/pages/Filiale";
import Home from "@/pages/Home";
import NotFound404 from "@/pages/NotFound404";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/filiales" element={<Filiale />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default AppRouter;
