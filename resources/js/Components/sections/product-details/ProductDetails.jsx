import ProductDetailsDescription from "./ProductDetailsDescription";
import ProductDetailsGallery from "./ProductDetailsGallery";
import ProductDetailsOptions from "./ProductDetailsOptions";
import ProductDetailsOtherDescription from "./ProductDetailsOtherDescription";

const ProductDetails = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-1">
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="w-full xl:w-1/2 lg:w-1/2 h-full">
          <ProductDetailsGallery />
        </div>
        <div className="w-full xl:w-1/2 lg:w-1/2 h-full">
          <ProductDetailsOptions productType={"Laminated Bow"} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="w-full h-full border">
          <ProductDetailsDescription />
        </div>
        <div className="w-full h-full border">
          <ProductDetailsOtherDescription />
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
