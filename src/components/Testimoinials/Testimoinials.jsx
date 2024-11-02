import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import crochet from "../../assets/icons/crochet.png";
import person1 from "../../assets/images/afro-american-woman-smiling-close-up.webp";
import person2 from "../../assets/images/business-man-banner-concept-with-copy-space.webp";
import person3 from "../../assets/images/happy-successful-businessman-posing-outside.webp";
import person4 from "../../assets/images/medium-shot-woman-working-as-lawyer.webp";
import { Button } from "../ui/button";
import "./Testimoinials.css";

function Testimoinials() {
  return (
    <section id="testimoinials" className="bg-white py-20 ">
      <div className="layer backdrop-blur-sm"></div>

      <div className="container mx-auto px-4 md:px-32">
        <div className="relative z-50">
          <h2 className="text-green-500 text-xs">
            <span className="text-white">■</span> CE QUE NOS CLIENTS PENSENT DE
            NOS SERVICES
          </h2>
          <h3 className="text-white text-3xl">TEMOIGNAGES</h3>
          <div className="h-40 md:h-20 mt-4 text-[15px] text-white flex flex-col justify-between md:flex-row  w-full md:items-center md:justify-between">
            <p className="w-full md:w-3/4">
              Les témoignages de nos clients témoignent de notre engagement à
              offrir des services immobiliers de qualités supérieure. Leurs
              retours positifs confirment notre expertise et notre capacité à
              répondre à leurs besoins spécifiques.
            </p>
            <Button className="inline-block backdrop-grayscale-0 w-40 bg-green-600 hover:bg-slate-900">
              PLUS
            </Button>
          </div>
        </div>

        {/* DEBUT CAROUSEL */}
        <Carousel
          className=""
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className="">
            <CarouselItem className=" lg:basis-1/3 h-96 flex flex-col items-center justify-center">
              <div
                id="clip-testimoinial"
                className="bg-white w-80 h-40 flex items-start justify-evenly p-4"
              >
                <img src={crochet} className="w-20" />
                <p className="text-sm text-gray-400 text-">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis ullam obcaecati ipsum eum doloribus nisi aut ab
                  mollitia consectetur.
                </p>
              </div>
              <div className="w-80 flex">
                <img
                  src={person1}
                  alt="afro-american-woman-smiling-close-up"
                  className="w-16 mr-3"
                />
                <div>
                  <h4 className="text-white">Nom de la personne</h4>
                  <p className="text-green-500 text-xs">
                    Poste, Nom de la société
                  </p>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className=" lg:basis-1/3 h-96 flex flex-col items-center justify-center">
              <div
                id="clip-testimoinial"
                className="bg-white w-80 h-40 flex items-start justify-evenly p-4"
              >
                <img src={crochet} className="w-20" />
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis ullam obcaecati ipsum eum doloribus nisi aut ab
                  mollitia consectetur.
                </p>
              </div>
              <div className="w-80 flex">
                <img
                  src={person2}
                  alt="afro-american-woman-smiling-close-up"
                  className="w-16 mr-3"
                />
                <div>
                  <h4 className="text-white">Nom de la personne</h4>
                  <p className="text-green-500 text-xs">
                    Poste, Nom de la société
                  </p>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className=" lg:basis-1/3 h-96 flex flex-col items-center justify-center z-30">
              <div
                id="clip-testimoinial"
                className="bg-white w-80 h-40 flex items-start justify-evenly p-4"
              >
                <img src={crochet} className="w-20" />
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis ullam obcaecati ipsum eum doloribus nisi aut ab
                  mollitia consectetur.
                </p>
              </div>
              <div className="w-80 flex">
                <img
                  src={person3}
                  alt="afro-american-woman-smiling-close-up"
                  className="w-16 mr-3"
                />
                <div>
                  <h4 className="text-white">Nom de la personne</h4>
                  <p className="text-green-500 text-xs">
                    Poste, Nom de la société
                  </p>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className=" lg:basis-1/3 h-96 flex flex-col items-center justify-center">
              <div
                id="clip-testimoinial"
                className="bg-white w-80 h-40 flex items-start justify-evenly p-4"
              >
                <img src={crochet} className="w-20" />
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis ullam obcaecati ipsum eum doloribus nisi aut ab
                  mollitia consectetur.
                </p>
              </div>
              <div className="w-80 flex">
                <img
                  src={person4}
                  alt="afro-american-woman-smiling-close-up"
                  className="w-16 mr-3"
                />
                <div>
                  <h4 className="text-white">Nom de la personne</h4>
                  <p className="text-green-500 text-xs">
                    Poste, Nom de la société
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimoinials;
