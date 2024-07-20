import imgSlide2 from "../../../images/slider-pic/images-2.jpeg";
import imgSlide3 from "../../../images/slider-pic/images-3.jpeg";
import imgSlide4 from "../../../images/slider-pic/images-4.jpeg";
import imgSlide5 from "../../../images/slider-pic/images-5.jpeg";

import styles from "./CubeSlider.module.css";

const CubeSlider = ({ pagination, title, timeDelay }) => {
  return (
    <div className="relative mt-10 flex justify-center">
      <swiper-container
        class={styles.swiperContainer}
        pagination={pagination}
        effect="cube"
        grab-cursor="true"
        loop="true"
        autoplay-delay={timeDelay}
        autoplay-disable-on-interaction="false"
        cube-effect-shadow="true"
        cube-effect-slide-shadows="true"
        cube-effect-shadow-offset="20"
        cube-effect-shadow-scale="0.94"
      >
        <swiper-slide class={styles.swiperSlide}>
          <div className="relative w-full h-full">
            <img
              src={imgSlide2}
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
              <h2 className="text-xl font-bold">{title}</h2>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class={styles.swiperSlide}>
          <div className="relative w-full h-full">
            <img
              src={imgSlide3}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
              <h2 className="text-xl font-bold">{title}</h2>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class={styles.swiperSlide}>
          <div className="relative w-full h-full">
            <img
              src={imgSlide4}
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
              <h2 className="text-xl font-bold">{title}</h2>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class={styles.swiperSlide}>
          <div className="relative w-full h-full">
            <img
              src={imgSlide5}
              alt="Slide 5"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
              <h2 className="text-xl font-bold">{title}</h2>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};
export default CubeSlider;
