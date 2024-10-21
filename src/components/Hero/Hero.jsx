import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
import "./Hero.css"

function Hero() {
  return (

    <div className="relative h-100% flex justify-center items-center" id="hero" >
      <div className="layer"></div>
      <Carousel className="w-2/3 md:h-60">
        <CarouselContent className="text-white md:h-60 text-center">
          <CarouselItem className="flex flex-col items-center justify-around">
            <p>Le Pionnier de la construction et de l &apos;immobilier à Madagascar</p>
            <h1 className="text-4xl md:text-7xl tracking-wide">GROUPE ORIA</h1>
            <p>Le <span>groupe ORIA</span> regroupe des entités spécialisées dans les secteurs de la construction et de la gestion immobilière à Madagascar</p>
            <div className="flex h-24 flex-col items-center justify-around md:justify-evenly md:w-[40%] ">
              <Button>CONTACTEZ-NOUS</Button>
              <Button variant="outline" className="text-black">NOS PROJETS</Button>
            </div>
          </CarouselItem>

         <CarouselItem className="flex flex-col items-center justify-around">
            <p>Le Pionnier de la construction et de l &apos;immobilier à Madagascar</p>
            <h1 className="text-4xl md:text-7xl tracking-wide">GROUPE ORIA</h1>
            <p>Le <span>groupe ORIA</span> regroupe des entités spécialisées dans les secteurs de la construction et de la gestion immobilière à Madagascar</p>
            <div className="flex h-24 flex-col items-center justify-around md:justify-evenly md:w-[40%] ">
              <Button>CONTACTEZ-NOUS</Button>
              <Button variant="outline" className="text-black">NOS PROJETS</Button>
            </div>
          </CarouselItem>

          <CarouselItem className="flex flex-col items-center justify-around">
            <p>Le Pionnier de la construction et de l &apos;immobilier à Madagascar</p>
            <h1 className="text-4xl md:text-7xl tracking-wide">GROUPE ORIA</h1>
            <p>Le <span>groupe ORIA</span> regroupe des entités spécialisées dans les secteurs de la construction et de la gestion immobilière à Madagascar</p>
            <div className="flex h-24 flex-col items-center justify-around md:justify-evenly md:w-[40%] ">
              <Button>CONTACTEZ-NOUS</Button>
              <Button variant="outline" className="text-black">NOS PROJETS</Button>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>


  )
}

export default Hero