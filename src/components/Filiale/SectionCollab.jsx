import { Button } from "../ui/button"

function SectionCollab() {
  return (
    <div className="section-collab w-full h-[30vh] px-32 flex items-center justify-center bg-green-700">
      <div className="p-4 rounded-sm flex items-center justify-between border">
        <p className="mt-2 text-[15px] w-2/3 text-white">
          Confiez vos projets immobiliers à HCM : notre expertise dans le
          bâtiment, le génie civil et les ouvrages d art, associée à notre
          engagement qualité, garantit la réussite de vos réalisations.
        </p>
        <Button className="bg-white text-blue-900 w-40">COLLABORONS</Button>
      </div>
    </div>
  )
}

export default SectionCollab