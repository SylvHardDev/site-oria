import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";        
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="relative h-100% flex justify-center items-center mt-16"
      id="hero"
    >
      <div className="layer"></div>
      <Carousel
        className="w-2/3 md:h-60"
      // plugins={[
      //   Autoplay({
      //     delay: 6000,
      //   }),
      // ]}
      >
        <CarouselContent className="text-white md:h-60 text-center">
          <CarouselItem className="flex flex-col items-center justify-around cursor-pointer">
            <h1 className="text-4xl lg:text-7xl tracking-wide">GROUPE ORIA</h1>
            <p className="md:w-2/3">
              <span>ORIA</span> regroupe les services fourni  s par HCM et SCI DM
            </p>
            <div className="flex h-24 flex-col items-center justify-around md:flex-row md:justify-evenly md:w-[70%] lg:w-[50%] ">
              <Link to="/contact">
                <Button className="w-40">CONTACTEZ-NOUS</Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="text-black w-40">
                  NOS PROJETS
                </Button>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="flex flex-col items-center justify-around cursor-pointer">
            <h1 className="text-4xl lg:text-7xl tracking-wide">HCM</h1>
            <p className="md:w-2/3">
            Terrassement, Assainissement, Construction Gros œuvre, Travaux de second Œuvre, Aménagement extérieur (Pavage, Espace vert,…). Agréer par SOCOTEC, APAVE, Suivi par LNTPB
            </p>
            <div className="flex h-24 flex-col items-center justify-around md:flex-row md:justify-evenly md:w-[70%] lg:w-[50%] ">
              <Link to="/contact">
                <Button className="w-40">CONTACTEZ-NOUS</Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="text-black w-40">
                  NOS PROJETS
                </Button>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="flex flex-col items-center justify-around cursor-pointer">
            {/* <p>
              Le Pionnier de la construction et de l &apos;immobilier à
              Madagascar
            </p> */}
            <h1 className="text-4xl lg:text-7xl tracking-wide">SCI DM</h1>
            <p className="md:w-2/3">
            Promotion immobilière : vente et/ou location terrain et immeuble (Appartement, Villa, bureaux, box commercial, dépôt)
            </p>
            <div className="flex h-24 flex-col items-center justify-around md:flex-row md:justify-evenly md:w-[70%] lg:w-[50%] ">
              <Link to="/contact">
                <Button className="w-40">CONTACTEZ-NOUS</Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="text-black w-40">
                  NOS PROJETS
                </Button>
              </Link>
            </div>
          </CarouselItem>

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Hero;
