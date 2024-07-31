import { Link } from "@inertiajs/react";
import styles from "./CubeSlider.module.css";

const CubeSlider = ({
  pagination,
  title,
  timeDelay,
  imgData,
  isDataArray,
  isAutoPlay,
  className,
}) => {
  const getLink = (categoryTitle) => {
    switch (categoryTitle) {
      case "Laminated Bow":
        return route("products-category", { category: "laminated-bow" });
      case "Fiber Flat Bow":
        return route("products-category", { category: "flat-bow" });
      case "Arrows":
        return route("products-category", { category: "arrows" });
      default:
        return route("products-category", { category: "accessories" });
    }
  };

  return (
    <div className={`relative xs:mt-10 flex justify-center ${className}`}>
      <swiper-container
        class={styles.swiperContainer}
        pagination={pagination}
        effect="cube"
        grab-cursor="true"
        loop="true"
        autoplay-delay={isAutoPlay ? timeDelay : undefined}
        autoplay-disable-on-interaction={isAutoPlay ? "false" : undefined}
        cube-effect-shadow="true"
        cube-effect-slide-shadows="true"
        cube-effect-shadow-offset="20"
        cube-effect-shadow-scale="0.94"
      >
        {isDataArray &&
          imgData.map((img, index) => (
            <swiper-slide key={index} class={styles.swiperSlide}>
              <div className="relative w-full h-full">
                <img
                  src={`../../../images/category-images-desktop/${img}`}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                  {title && (
                    <Link href={getLink(title)}>
                      <h2 className="text-xl font-bold">{title}</h2>
                    </Link>
                  )}
                </div>
              </div>
            </swiper-slide>
          ))}
        {!isDataArray &&
          imgData.map((img, index) => (
            <swiper-slide key={index} class={styles.swiperSlide}>
              <div className="relative w-full h-full">
                <img
                  src={`../../../images/category-images-mobile/${img.imgSrc}`}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                  <Link href={getLink(img.imgTitle)}>
                    <h2 className="text-xl font-bold">{img.imgTitle}</h2>
                  </Link>
                </div>
              </div>
            </swiper-slide>
          ))}
      </swiper-container>
    </div>
  );
};

export default CubeSlider;
