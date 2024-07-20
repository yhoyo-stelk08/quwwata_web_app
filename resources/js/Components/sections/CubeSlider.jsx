import imgSlide2 from "../../../images/slider-pic/images-2.jpeg";
import imgSlide3 from "../../../images/slider-pic/images-3.jpeg";
import imgSlide4 from "../../../images/slider-pic/images-4.jpeg";
import imgSlide5 from "../../../images/slider-pic/images-5.jpeg";

const CubeSlider = () => {
  return (
    <div className="relative mt-10 flex justify-center">
      <swiper-container
        id="cube-swiper-container"
        class="mySwiper"
        pagination="true"
        effect="cube"
        grab-cursor="true"
        loop="true"
        autoplay-delay="5000"
        autoplay-disable-on-interaction="false"
        cube-effect-shadow="true"
        cube-effect-slide-shadows="true"
        cube-effect-shadow-offset="20"
        cube-effect-shadow-scale="0.94"
      >
        <swiper-slide id="cube-swiper-slide">
          <img src={imgSlide2} alt="Slide 2" />
        </swiper-slide>
        <swiper-slide>
          <img src={imgSlide3} alt="Slide 3" />
        </swiper-slide>
        <swiper-slide>
          <img src={imgSlide4} alt="Slide 4" />
        </swiper-slide>
        <swiper-slide>
          <img src={imgSlide5} alt="Slide 5" />
        </swiper-slide>
      </swiper-container>
    </div>
  );
};
export default CubeSlider;
