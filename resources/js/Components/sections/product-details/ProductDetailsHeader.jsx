import imgHeader1 from "../../../../images/detail-product/header1.jpeg";

const ProductDetailsHeader = () => {
  return (
    <div className="m-0 w-full h-full relative opacity-70">
      <img
        src={imgHeader1}
        alt=""
        className="object-cover w-full h-full absolute top-0 left-0"
      />
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded text-2xl md:text-4xl lg:text-5xl text-center font-pacifico">
        Turkish Laminated Bow
      </div>
    </div>
  );
};
export default ProductDetailsHeader;
