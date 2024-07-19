const TestimonySection = () => {
  return (
    <div className="h-full">
      <swiper-container
        pagination="true"
        pagination-clickable="true"
        autoplay-delay="2500"
        autoplay-disable-on-interaction="false"
        className="w-full h-full"
        style={{
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        loop="true"
        effect="fade"
      >
        <swiper-slide className="w-full h-full flex">Slide 1</swiper-slide>
        <swiper-slide className="w-full h-full flex">Slide 2</swiper-slide>
        <swiper-slide className="w-full h-full flex">Slide 3</swiper-slide>
        <swiper-slide className="w-full h-full flex">Slide 4</swiper-slide>
        <swiper-slide className="w-full h-full flex">Slide 5</swiper-slide>
        <swiper-slide className="w-full h-full flex">Slide 6</swiper-slide>
        <swiper-slide className="w-full h-full flex">Slide 7</swiper-slide>
        <swiper-slide className="w-full h-full flex">Slide 8</swiper-slide>
        <swiper-slide className="w-full h-full flex">Slide 9</swiper-slide>
      </swiper-container>
    </div>
  );
};
export default TestimonySection;
