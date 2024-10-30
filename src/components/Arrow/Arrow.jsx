import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import arrow from "../../assets/icons/ARROW_UP.png"

function Arrow() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // function scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible ? (
        <Button
          className="w-12 h-12 bg-green-500 fixed right-4 bottom-4 z-50"
          onClick={scrollToTop}
        >
          <img src={arrow} alt="icone arrow" />
        </Button>
      ) : (
        <Button className="hidden"></Button>
      )}
    </>
  );
}

export default Arrow;
