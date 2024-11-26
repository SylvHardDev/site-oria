import { useState } from 'react';
import image1 from "../../assets/images/img-projet/image1.webp";
// import image2 from "../../assets/images/img-projet/image2.webp";
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
  const [selectedCategory, setSelectedCategory] = useState('TOUT');

  const images = [
    { src: image1, category: 'DESGINE INTERIEUR' },
    { src: image3, category: 'ARCHITECTURE' },
    { src: image4, category: 'CARRELAGE' },
    { src: image5, category: 'BÂTIMENTS' },
    { src: image6, category: 'RENOVATION' },
    { src: image7, category: 'DESGINE INTERIEUR' },
    { src: image8, category: 'ARCHITECTURE' },
    { src: image9, category: 'CARRELAGE' },
    { src: image10, category: 'BÂTIMENTS' },
    { src: image11, category: 'RENOVATION' },
    { src: image12, category: 'DESGINE INTERIEUR' },
    { src: image13, category: 'ARCHITECTURE' },
    { src: image14, category: 'CARRELAGE' },
    { src: image15, category: 'BÂTIMENTS' },
    { src: image16, category: 'RENOVATION' },
    { src: image17, category: 'DESGINE INTERIEUR' },
    { src: image18, category: 'ARCHITECTURE' },
    { src: image19, category: 'CARRELAGE' },
    { src: image20, category: 'BÂTIMENTS' },
    { src: image21, category: 'RENOVATION' },
    { src: image22, category: 'DESGINE INTERIEUR' },
  ];

  const filteredImages = selectedCategory === 'TOUT'
    ? images
    : images.filter(image => image.category === selectedCategory);

  return (
    <section className="bg-white py-20 ">
      <div className="mx-auto flex flex-col items-center px-4 md:px-32">
        {/* Section filtre */}
        <ul className="md:w-2/3 flex flex-wrap justify-evenly pb-5">
          <li onClick={() => setSelectedCategory('TOUT')} className="cursor-pointer">
            {selectedCategory === 'TOUT' && (
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            )}
            TOUT
          </li>
          <li onClick={() => setSelectedCategory('DESGINE INTERIEUR')} className="cursor-pointer">
            {selectedCategory === 'DESGINE INTERIEUR' && (
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            )}
            DESGINE INTERIEUR
          </li>
          <li onClick={() => setSelectedCategory('ARCHITECTURE')} className="cursor-pointer">
            {selectedCategory === 'ARCHITECTURE' && (
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            )}
            ARCHITECTURE
          </li>
          <li onClick={() => setSelectedCategory('CARRELAGE')} className="cursor-pointer">
            {selectedCategory === 'CARRELAGE' && (
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            )}
            CARRELAGE
          </li>
          <li onClick={() => setSelectedCategory('BÂTIMENTS')} className="cursor-pointer">
            {selectedCategory === 'BÂTIMENTS' && (
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            )}
            BÂTIMENTS
          </li>
          <li onClick={() => setSelectedCategory('RENOVATION')} className="cursor-pointer">
            {selectedCategory === 'RENOVATION' && (
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            )}
            RENOVATION
          </li>
        </ul>

        {/* Section Projects Cards */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                className="w-[80%] md:w-[100%] h-80"
                src={image.src}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
