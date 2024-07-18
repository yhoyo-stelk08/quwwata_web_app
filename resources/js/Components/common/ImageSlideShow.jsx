import { useEffect, useState } from "react";

import imgSlide1 from "../../../images/slider-pic/images-1.jpeg";
import imgSlide2 from "../../../images/slider-pic/images-2.jpeg";
import imgSlide3 from "../../../images/slider-pic/images-3.jpeg";
import imgSlide4 from "../../../images/slider-pic/images-4.jpeg";
import imgSlide5 from "../../../images/slider-pic/images-5.jpeg";
import imgSlide6 from "../../../images/slider-pic/images-6.jpeg";

const images = [
  { image: imgSlide1, alt: "image 1" },
  { image: imgSlide2, alt: "image 2" },
  { image: imgSlide3, alt: "image 3" },
  { image: imgSlide4, alt: "image 4" },
  { image: imgSlide5, alt: "image 5" },
  { image: imgSlide6, alt: "image 6" },
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
    <div className="relative w-96 h-full overflow-hidden rounded-tl-lg rounded-bl-lg shadow-lg">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.image}
          alt={image.alt}
          className={`absolute w-fit h-full object-contain top-0 left-0 opacity-0 transform scale-80 transition-all duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-90 scale-80" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlideShow;
