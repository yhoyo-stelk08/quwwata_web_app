import ProductDetailsDescription from "./ProductDetailsDescription";
import ProductDetailsGallery from "./ProductDetailsGallery";
import ProductDetailsOptions from "./ProductDetailsOptions";
import ProductDetailsOtherDescription from "./ProductDetailsOtherDescription";

const ProductDetails = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="w-full h-full border">
          <ProductDetailsGallery />
        </div>
        <div className="w-full h-full border">
          <ProductDetailsOptions />
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
    </>
  );
};
export default ProductDetails;
