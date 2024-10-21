import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import crochet from "../../assets/icons/crochet.png"
import person1 from "../../assets/images/afro-american-woman-smiling-close-up.jpg"
import person2 from "../../assets/images/business-man-banner-concept-with-copy-space.jpg"
import person3 from "../../assets/images/happy-successful-businessman-posing-outside.jpg"
import person4 from "../../assets/images/medium-shot-woman-working-as-lawyer.jpg"
import "./Testimoinials.css"

function Testimoinials() {
  return (
    <div id="testimoinials" className="h-80">
<div className="layer h-80"></div>
<Carousel>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-96 flex flex-col items-center justify-center">
      <div id="clip-testimoinial" className="bg-white w-80 h-40 flex items-start justify-evenly p-4">
        <img src={crochet} className="w-20" />
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam obcaecati ipsum eum doloribus nisi aut ab mollitia consectetur.</p>
      </div>
      <div className="w-80 flex">
        <img src={person1} alt="afro-american-woman-smiling-close-up" className="w-16 mr-3" />
        <div>
          <h4 className="text-white">Nom de la personne</h4>
          <p className="text-green-500 text-xs">Poste, Nom de la société</p>
        </div>
      </div>
    </CarouselItem>

   <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-96 flex flex-col items-center justify-center">
      <div id="clip-testimoinial" className="bg-white w-80 h-40 flex items-start justify-evenly p-4">
        <img src={crochet} className="w-20" />
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam obcaecati ipsum eum doloribus nisi aut ab mollitia consectetur.</p>
      </div>
      <div className="w-80 flex">
        <img src={person1} alt="afro-american-woman-smiling-close-up" className="w-16 mr-3" />
        <div>
          <h4 className="text-white">Nom de la personne</h4>
          <p className="text-green-500 text-xs">Poste, Nom de la société</p>
        </div>
      </div>
    </CarouselItem>


<CarouselItem className="md:basis-1/2 lg:basis-1/3 h-96 flex flex-col items-center justify-center">
      <div id="clip-testimoinial" className="bg-white w-80 h-40 flex items-start justify-evenly p-4">
        <img src={crochet} className="w-20" />
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam obcaecati ipsum eum doloribus nisi aut ab mollitia consectetur.</p>
      </div>
      <div className="w-80 flex">
        <img src={person1} alt="afro-american-woman-smiling-close-up" className="w-16 mr-3" />
        <div>
          <h4 className="text-white">Nom de la personne</h4>
          <p className="text-green-500 text-xs">Poste, Nom de la société</p>
        </div>
      </div>
    </CarouselItem>

<CarouselItem className="md:basis-1/2 lg:basis-1/3 h-96 flex flex-col items-center justify-center">
      <div id="clip-testimoinial" className="bg-white w-80 h-40 flex items-start justify-evenly p-4">
        <img src={crochet} className="w-20" />
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam obcaecati ipsum eum doloribus nisi aut ab mollitia consectetur.</p>
      </div>
      <div className="w-80 flex">
        <img src={person1} alt="afro-american-woman-smiling-close-up" className="w-16 mr-3" />
        <div>
          <h4 className="text-white">Nom de la personne</h4>
          <p className="text-green-500 text-xs">Poste, Nom de la société</p>
        </div>
      </div>
    </CarouselItem>



  </CarouselContent>
</Carousel>

    </div>
  )
}

export default Testimoinials