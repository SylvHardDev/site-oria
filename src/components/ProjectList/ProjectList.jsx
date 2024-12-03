import { useState } from 'react';
import { Blurhash } from 'react-blurhash';
import image1 from "../../assets/images/img-projet/image1.webp";
// import image2 from "../../assets/images/img-projet/image2.webp";
import image3 from "../../assets/images/img-projet/image3.webp";
// import image4 from "../../assets/images/img-projet/image4.webp";
import image5 from "../../assets/images/img-projet/image5.webp";
// import image6 from "../../assets/images/img-projet/image6.webp";
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
  const [loadedImages, setLoadedImages] = useState([]);

  const images = [
    { src: image1, category: 'BÂTIMENTS', blurhash: 'LTEyocR*RiWBO_jYoJofI^V@oJaz' },
    { src: image3, category: 'DESGINE INTERIEUR', blurhash: 'L8Fr|y?E_44m00~q%Lxu01RPD%%g' },
    // { src: image4, category: 'DESGINE INTERIEUR' },
    { src: image5, category: 'DESGINE INTERIEUR', blurhash: 'LGKBH;00%MWA~V-=%2j@-=jEWBWB' },
    // { src: image6, category: 'DESGINE INTERIEUR' },
    { src: image7, category: 'BÂTIMENTS', blurhash: 'LhIO-Ft6tS%M%%t7o#WB?ct7RjRj' },
    { src: image8, category: 'DESGINE INTERIEUR', blurhash: 'L5FY_lQ+V?xt00bK?bjYyZf-D$oz' },
    { src: image9, category: 'RENOVATION', blurhash: 'L3Ey#b-O00%W0C01p~Q^00^,4V_K' },
    { src: image10, category: 'ARCHITECTURE', blurhash: 'LIFFjdMt~9?H9,~8IVVsXCMyV=Ip' },
    { src: image11, category: 'RENOVATION', blurhash: 'LALEE40M^h00EE~qR3-:05RO9bjD' },
    { src: image12, category: 'DESGINE INTERIEUR', blurhash: 'LZHezr9c?ao$.ASjn#kDIqbIaJM|' },
    { src: image13, category: 'ARCHITECTURE', blurhash: 'LDJRU65Z~B000AcGZ~x]01E3D%xW' },
    { src: image14, category: 'CARRELAGE', blurhash: 'L-G]UR?wWWROR.RkfQoeWBaejsj]' },
    { src: image15, category: 'BÂTIMENTS', blurhash: 'LKG[=_IW~VIV0rt8IAog03bIE1t7' },
    { src: image16, category: 'ARCHITECTURE', blurhash: 'L5F~Nv~o4VW94=ocD+9Z?I_201%K' },
    { src: image17, category: 'ARCHITECTURE', blurhash: 'L3D]o89F~q_300_3?bM{%MD%00M{' },
    { src: image18, category: 'DESGINE INTERIEUR', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: image19, category: 'DESGINE INTERIEUR', blurhash: 'LTGlS0t7D$IU_4WBMwaxIWWWadt7' },
    { src: image20, category: 'ARCHITECTURE', blurhash: 'L7CGMh00%iZ}4@V=M|ob00~q$|o#' },
    { src: image21, category: 'DESGINE INTERIEUR', blurhash: 'LCEye@%K00W?~qs.tRWXIVjs?GoK' },
    { src: image22, category: 'BÂTIMENTS', blurhash: 'LOG8ZWX.wbRj~W?bM{oexut7jEof' },
    { src: image23, category: 'DESGINE INTERIEUR', blurhash: 'LMF=%BNGIURk~pt7xtof%ft7x[t7' },
    { src: image24, category: 'DESGINE INTERIEUR', blurhash: 'LCGbee4.00~q^%kBbwRPofR+-oM{' },
    { src: image25, category: 'DESGINE INTERIEUR', blurhash: 'L6GuzPxsJQoz^aR.IAae014n~px]' },
    { src: image26, category: 'DESGINE INTERIEUR', blurhash: 'L2GIW9005$~D4T-?o~jC00^jIB5R' },
    { src: image27, category: 'BÂTIMENTS', blurhash: 'LjGcv8ozt8WBG1kCWBfQRifjadof'  },
  ];

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => [...prev, index]);
  };

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
            className={`cursor-pointer transition-transform duration-300 filter-item ${filter === 'DESGINE INTERIEUR' ? 'transform scale-105' : ''
              }`}
          >
            {filter === 'DESGINE INTERIEUR' && (
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            )}
            DESGINE INTERIEUR
          </li>
          <li
            onClick={() => handleFilterChange('ARCHITECTURE')}
            className={`cursor-pointer transition-transform duration-300 filter-item ${filter === 'ARCHITECTURE' ? 'transform scale-105' : ''
              }`}
          >
            {filter === 'ARCHITECTURE' && (
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            )}
            ARCHITECTURE
          </li>
          <li
            onClick={() => handleFilterChange('CARRELAGE')}
            className={`cursor-pointer transition-transform duration-300 filter-item ${filter === 'CARRELAGE' ? 'transform scale-105' : ''
              }`}
          >
            {filter === 'CARRELAGE' && (
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            )}
            CARRELAGE
          </li>
          <li
            onClick={() => handleFilterChange('BÂTIMENTS')}
            className={`cursor-pointer transition-transform duration-300 filter-item ${filter === 'BÂTIMENTS' ? 'transform scale-105' : ''
              }`}
          >
            {filter === 'BÂTIMENTS' && (
              <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
            )}
            BÂTIMENTS
          </li>
          <li
            onClick={() => handleFilterChange('RENOVATION')}
            className={`cursor-pointer transition-transform duration-300 filter-item ${filter === 'RENOVATION' ? 'transform scale-105' : ''
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
              <Blurhash
                hash={image.blurhash}
                width={400}
                height={300}
                resolutionX={32}
                resolutionY={32}
                punch={1}
              />
              <img
                className="w-full h-auto object-cover shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                src={image.src}
                alt={`Image ${index + 1}`}
                onLoad={() => handleImageLoad(index)}
                style={{ display: loadedImages.includes(index) ? 'block' : 'none' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
