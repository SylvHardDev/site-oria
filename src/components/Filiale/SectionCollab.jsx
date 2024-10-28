import { Button } from "../ui/button";

function SectionCollab() {
  return (
    <div className="section-collab w-full h-[30vh] px-4 md:px-32 flex items-center justify-center bg-green-700">
      <div className="p-4 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between border border-[#ffffff42]">
        <p className="my-2 text-[15px] md:w-2/3 text-white">
          Confiez vos projets immobiliers à HCM : notre expertise dans le
          bâtiment, le génie civil et les ouvrages d art, associée à notre
          engagement qualité, garantit la réussite de vos réalisations.
        </p>
        <Button className="bg-white text-blue-900 w-40 hover:text-white">
          COLLABORONS
        </Button>
      </div>
    </div>
  );
}

export default SectionCollab;
