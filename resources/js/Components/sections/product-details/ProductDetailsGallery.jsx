import { useEffect, useState } from "react";
import Slider from "react-slick";

const ProductDetailsGallery = ({ productData }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    if (productData?.product_images) {
      const images = productData.product_images.map((image) => image.path);
      setProductImages(images);
    }
  }, [productData]);

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
        {productImages.map((src, index) => (
          <div key={index}>
            <img
              src={`/storage/${src}`}
              alt={`Bow ${index + 1}`}
              className="w-full h-96 sm:h-[500px] object-fill sm:object-fill p-2"
            />
          </div>
        ))}
      </Slider>

      <div className="grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 p-2 gap-2">
        {productImages.slice(0, 4).map((src, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => nav1.slickGoTo(index)}
          >
            <img
              src={`/storage/${src}`}
              alt={`Thumb ${index + 1}`}
              className="w-full h-24 object-fill lg:h-32 md:object-fill md:h-48"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 p-2 gap-2">
        {productImages.slice(4, 8).map((src, index) => (
          <div
            key={index + 4}
            className="cursor-pointer"
            onClick={() => nav1.slickGoTo(index + 4)}
          >
            <img
              src={`/storage/${src}`}
              alt={`Thumb ${index + 5}`}
              className="w-full h-24 object-fill lg:h-32 md:object-fill md:h-48"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsGallery;
