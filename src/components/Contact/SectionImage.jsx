import { useState, useEffect } from "react";
import { BlurhashCanvas } from "react-blurhash";
import chantier from "../../assets/images/bg_hero_contact.webp"

function SectionImage() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const blurHash = "LfG+XRWXMxNG_NIpsSxZ.8Rkn$ay"; // lien BlurHash

  useEffect(() => {
    const img = new Image();
    img.src = chantier;
    img.onload = () => setIsImageLoaded(true);
  }, [chantier]);

  return (
    <div className="px-4 md:px-32 py-11 h-80 lg:h-[80vh]">
      <div
        className="h-full w-full rounded-md relative"
        style={{
          background: isImageLoaded
            ? `url(${chantier}) center/cover no-repeat`
            : "",
        }}
      >
        {!isImageLoaded && (
          <BlurhashCanvas
            hash={blurHash}
            className="absolute inset-0 w-full rounded-md h-full"
          />
        )}
      </div>
    </div>
  );
}

export default SectionImage;
