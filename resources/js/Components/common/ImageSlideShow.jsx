import { useEffect, useState } from "react";

import imgSlide2 from "../../../images/slider-pic/images-2.jpeg";
import imgSlide3 from "../../../images/slider-pic/images-3.jpeg";
import imgSlide4 from "../../../images/slider-pic/images-4.jpeg";
import imgSlide5 from "../../../images/slider-pic/images-5.jpeg";

const images = [
  { image: imgSlide2, alt: "image 2" },
  { image: imgSlide3, alt: "image 3" },
  { image: imgSlide4, alt: "image 4" },
  { image: imgSlide5, alt: "image 5" },
];

const ImageSlideShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.image}
          alt={image.alt}
          className={`absolute w-full h-full object-cover top-0 left-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlideShow;
