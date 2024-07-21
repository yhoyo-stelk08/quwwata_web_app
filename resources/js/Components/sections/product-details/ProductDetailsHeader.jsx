const ProductDetailsHeader = () => {
  return (
    <div className="m-0 border w-full h-full">
      <swiper-container
        pagination="true"
        pagination-clickable="true"
        autoplay-delay="2500"
        autoplay-disable-on-interaction="false"
        className="w-full h-full"
        loop="true"
        effect="fade"
      ></swiper-container>
    </div>
  );
};
export default ProductDetailsHeader;
