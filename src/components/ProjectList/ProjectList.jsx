import { useState, useEffect } from 'react';
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
import image23 from "../../assets/images/img-projet/image23.webp";
import image24 from "../../assets/images/img-projet/image24.webp";
import image25 from "../../assets/images/img-projet/image25.webp";
import image26 from "../../assets/images/img-projet/image26.webp";
import image27 from "../../assets/images/img-projet/image27.webp";
import "./ProjectList.css";

function ProjectList() {
  const [filter, setFilter] = useState('TOUT');
  const [animationKey, setAnimationKey] = useState(0);

  const images = [
    { src: image1, category: 'BÂTIMENTS' },
    { src: image3, category: 'DESGINE INTERIEUR' },
    { src: image4, category: 'DESGINE INTERIEUR' },
    { src: image5, category: 'DESGINE INTERIEUR' },
    { src: image6, category: 'DESGINE INTERIEUR' },
    { src: image7, category: 'BÂTIMENTS' },
    { src: image8, category: 'DESGINE INTERIEUR' },
    { src: image9, category: 'RENOVATION' },
    { src: image10, category: 'ARCHITECTURE' },
    { src: image11, category: 'RENOVATION' },
    { src: image12, category: 'DESGINE INTERIEUR' },
    { src: image13, category: 'ARCHITECTURE' },
    { src: image14, category: 'CARRELAGE' },
    { src: image15, category: 'BÂTIMENTS' },
    { src: image16, category: 'ARCHITECTURE' },
    { src: image17, category: 'ARCHITECTURE' },
    { src: image18, category: 'DESGINE INTERIEUR' },
    { src: image19, category: 'DESGINE INTERIEUR' },
    { src: image20, category: 'ARCHITECTURE' },
    { src: image21, category: 'DESGINE INTERIEUR' },
    { src: image22, category: 'BÂTIMENTS' },
    { src: image23, category: 'DESGINE INTERIEUR' },
    { src: image24, category: 'DESGINE INTERIEUR' },
    { src: image25, category: 'DESGINE INTERIEUR' },
    { src: image26, category: 'DESGINE INTERIEUR' },
    { src: image27, category: 'BÂTIMENTS' },
  ];

  const filteredImages = filter === 'TOUT'
    ? images
    : images.filter(image => image.category === filter);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  return (
    <section className="bg-white py-20 ">
      <div className="mx-auto flex flex-col items-center px-4 md:px-32">
        {/* Section filtre */}
        <ul className="md:w-2/3 flex flex-wrap justify-evenly pb-5 filters-container">
          <li onClick={() => handleFilterChange('TOUT')} className="cursor-pointer filter-item">
            {filter === 'TOUT' && (
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            )}
            TOUT
          </li>
          <li
            onClick={() => handleFilterChange('DESGINE INTERIEUR')}
            className={`cursor-pointer transition-transform duration-300 filter-item ${
              filter === 'DESGINE INTERIEUR' ? 'transform scale-105' : ''
            }`}
          >
            {filter === 'DESGINE INTERIEUR' && (
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            )}
            DESGINE INTERIEUR
          </li>
          <li
            onClick={() => handleFilterChange('ARCHITECTURE')}
            className={`cursor-pointer transition-transform duration-300 filter-item ${
              filter === 'ARCHITECTURE' ? 'transform scale-105' : ''
            }`}
          >
            {filter === 'ARCHITECTURE' && (
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            )}
            ARCHITECTURE
          </li>
          <li
            onClick={() => handleFilterChange('CARRELAGE')}
            className={`cursor-pointer transition-transform duration-300 filter-item ${
              filter === 'CARRELAGE' ? 'transform scale-105' : ''
            }`}
          >
            {filter === 'CARRELAGE' && (
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            )}
            CARRELAGE
          </li>
          <li
            onClick={() => handleFilterChange('BÂTIMENTS')}
            className={`cursor-pointer transition-transform duration-300 filter-item ${
              filter === 'BÂTIMENTS' ? 'transform scale-105' : ''
            }`}
          >
            {filter === 'BÂTIMENTS' && (
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            )}
            BÂTIMENTS
          </li>
          <li
            onClick={() => handleFilterChange('RENOVATION')}
            className={`cursor-pointer transition-transform duration-300 filter-item ${
              filter === 'RENOVATION' ? 'transform scale-105' : ''
            }`}
          >
            {filter === 'RENOVATION' && (
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            )}
            RENOVATION
          </li>
        </ul>

        {/* Section Projects Cards */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={`${animationKey}-${index}`}
              className="flex justify-center fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                 className="w-full h-auto object-cover shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
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
