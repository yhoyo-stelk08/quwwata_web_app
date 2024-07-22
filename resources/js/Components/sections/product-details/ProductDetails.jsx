import ProductDetailsDescription from "./ProductDetailsDescription";
import ProductDetailsGallery from "./ProductDetailsGallery";
import ProductDetailsOptions from "./ProductDetailsOptions";

const ProductDetails = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1 gap-4">
      <div className="col-span-1 row-span-1">
        <ProductDetailsGallery />
      </div>
      <div className="col-span-1 row-span-1">
        <ProductDetailsOptions productType={"Laminated Bow"} />
      </div>
      <div className="lg:col-span-2 lg:row-span-1 xl:col-span-1 xl:row-span-1">
        <ProductDetailsDescription />
      </div>
    </div>
  );
};

export default ProductDetails;
