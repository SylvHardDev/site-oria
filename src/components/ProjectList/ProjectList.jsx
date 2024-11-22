import image1 from "../../assets/images/img-projet/image1.webp";
import image2 from "../../assets/images/img-projet/image2.webp";
import image3 from "../../assets/images/img-projet/image3.webp";
import image4 from "../../assets/images/img-projet/image4.webp";
import image5 from "../../assets/images/img-projet/image5.webp";
import image6 from "../../assets/images/img-projet/image6.webp";
import image7 from "../../assets/images/img-projet/image7.webp";
import image8 from "../../assets/images/img-projet/image8.webp";
import image9 from "../../assets/images/img-projet/image9.webp";
import image10 from "../../assets/images/img-projet/image10.webp";
import image11 from "../../assets/images/img-projet/image11.webp";
import image12 from "../../assets/images/img-projet/image12.webp";
import image13 from "../../assets/images/img-projet/image13.webp";
import image14 from "../../assets/images/img-projet/image14.webp";
import image15 from "../../assets/images/img-projet/image15.webp";
import image16 from "../../assets/images/img-projet/image16.webp";
import image17 from "../../assets/images/img-projet/image17.webp";
import image18 from "../../assets/images/img-projet/image18.webp";
import image19 from "../../assets/images/img-projet/image19.webp";
import image20 from "../../assets/images/img-projet/image20.webp";
import image21 from "../../assets/images/img-projet/image21.webp";
import image22 from "../../assets/images/img-projet/image22.webp";

function ProjectList() {
  return (
    <section className="bg-white py-20 ">
      <div className="mx-auto flex flex-col items-center px-4 md:px-32">
        {/* Section filtre */}
        <ul className="md:w-2/3 flex flex-wrap justify-evenly pb-5">
          <li>
            <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            TOUT
          </li>
          <li>DESGINE INTERIEUR</li>
          <li>ARCHITECTURE</li>
          <li>CARRELAGE</li>
          <li>BÂTIMENTS</li>
          <li>RENOVATION</li>
        </ul>

        {/* Section Projects Cards */}
        <div className="w-full grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image1}
              alt="Image 1"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image2}
              alt="Image 2"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image3}
              alt="Image 3"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image4}
              alt="Image 4"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image5}
              alt="Image 5"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image6}
              alt="Image 6"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image7}
              alt="Image 7"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image8}
              alt="Image 8"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image9}
              alt="Image 9"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image10}
              alt="Image 10"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image11}
              alt="Image 11"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image12}
              alt="Image 12"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image13}
              alt="Image 13"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image14}
              alt="Image 14"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image15}
              alt="Image 15"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image16}
              alt="Image 16"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image17}
              alt="Image 17"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image18}
              alt="Image 18"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image19}
              alt="Image 19"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image20}
              alt="Image 20"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image21}
              alt="Image 21"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={image22}
              alt="Image 22"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
