import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

export default ScrollToSection;