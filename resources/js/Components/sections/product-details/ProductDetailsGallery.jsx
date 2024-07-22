import { useState } from "react";
import Slider from "react-slick";

import detailImg1 from "../../../../images/detail-product/detail-1.jpeg";
import detailImg2 from "../../../../images/detail-product/detail-2.jpeg";
import detailImg3 from "../../../../images/detail-product/detail-3.jpeg";
import detailImg4 from "../../../../images/detail-product/detail-4.jpeg";

const ProductDetailsGallery = () => {
  // const mainSliderRef = useRef(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const thumbnails = [
    detailImg1,
    detailImg2,
    detailImg3,
    detailImg4,
    "https://www.composite-bow.com/wp-content/uploads/2017/11/Grozer_Turkish_laminated2017a.jpg",
    "https://classic-bow.com/store/wp-content/uploads/2017/11/product_g_r_grozer_turkish_laminated2017e_2_1_1.jpg",
    "https://classic-bow.com/store/wp-content/uploads/2017/11/product_g_r_grozer_turkish_laminated2017j_2_1_1.jpg",
    "https://www.composite-bow.com/wp-content/uploads/2017/11/Grozer_Turkish_laminated2017b.jpg",
  ];

  const settingsMain = {
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
    arrows: false,
    fade: true,
  };

  const settingsThumbs = {
    asNavFor: nav1,
    ref: (slider) => setNav2(slider),
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  return (
    <div className="xl:mt-12">
      <Slider {...settingsMain}>
        {thumbnails.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Bow ${index + 1}`}
              className="w-full h-64 xl:h-96 lg:h-80 md:h-80 object-fill md:object-cover p-2"
            />
          </div>
        ))}
      </Slider>

      <div className="grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 p-2 gap-2">
        {thumbnails.slice(0, 4).map((src, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => nav1.slickGoTo(index)}
          >
            <img
              src={src}
              alt={`Thumb ${index + 1}`}
              className="w-full h-24 object-fill lg:h-32 md:object-fill md:h-48"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 p-2 gap-2">
        {thumbnails.slice(4, 8).map((src, index) => (
          <div
            key={index + 4}
            className="cursor-pointer"
            onClick={() => nav1.slickGoTo(index + 4)}
          >
            <img
              src={src}
              alt={`Thumb ${index + 6}`}
              className="w-full h-24 object-fill lg:h-32 md:object-fill md:h-48"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsGallery;
