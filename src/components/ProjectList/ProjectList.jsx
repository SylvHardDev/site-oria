import ElectricCar3D from "../../assets/images/project-image/3d-electric-car-building_result_result.webp";
import AbstractBuilding from "../../assets/images/project-image/3d-rendering-abstract-building_result_result.webp";
import RenderignHouse2 from "../../assets/images/project-image/3d-rendering-house-model (2)_result_result.webp";
import RenderignHouse3 from "../../assets/images/project-image/3d-rendering-house-model (3)_result_result.webp";
import RenderignHouse from "../../assets/images/project-image/3d-rendering-house-model_result_result.webp";
import HandcraftedWooden from "../../assets/images/project-image/handcrafted-wooden-decorative-sculpture_result_result.webp";
import InteriorDesign from "../../assets/images/project-image/interior-design-with-photoframes-yellow-couch_result_result.webp";
import RoomHouse from "../../assets/images/project-image/room-house-decorated-with-brazilian-folklore-design_result_result.webp";
import SofaLiving from "../../assets/images/project-image/sofa-living-room-decorated-with-brazilian-folklore-design_result_result.webp";

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
              src={AbstractBuilding}
              alt="3D electric cat"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={RenderignHouse}
              alt="3D electric cat"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={RenderignHouse2}
              alt="3D electric cat"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-80"
              src={SofaLiving}
              alt="3D electric cat"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-[320px]"
              src={RenderignHouse3}
              alt="3D electric cat"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-[320px]"
              src={HandcraftedWooden}
              alt="3D electric cat"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-[320px]"
              src={InteriorDesign}
              alt="3D electric cat"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-[320px]"
              src={RoomHouse}
              alt="3D electric cat"
            />
          </div>

          <div className="flex justify-center">
            <img
              className="w-[80%] md:w-[100%] h-[320px]"
              src={ElectricCar3D}
              alt="3D electric cat"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
