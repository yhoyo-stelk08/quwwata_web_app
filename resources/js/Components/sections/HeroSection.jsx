import ImageSlideShow from "../common/ImageSlideShow";

const HeroSection = () => {
  return (
    <header className="flex gap-12 my-12 mx-auto w-[90%] max-w-7xl">
      <div className="w-[30rem] h-[32rem]">
        <ImageSlideShow />
      </div>
    </header>
  );
};
export default HeroSection;
