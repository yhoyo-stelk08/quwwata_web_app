import ProductDetails from "@/Components/sections/product-details/ProductDetails";
import ProductDetailsHeader from "@/Components/sections/product-details/ProductDetailsHeader";
import AppLayout from "@/Layouts/AppLayout";

const ProductDetailsPage = ({ category }) => {
  let headerTitle = "";
  if (category === "laminated-bow") {
    headerTitle = "Laminated Bow";
  } else if (category === "flat-bow") {
    headerTitle = "Flat Fiber Bow";
  } else if (category === "arrows") {
    headerTitle = "Arrows";
  } else {
    headerTitle = "Bow Accessories";
  }
  return (
    <AppLayout>
      <div className="flex flex-col w-full h-72 xl:h-96 md:h-[400px] mx-auto mt-0">
        <ProductDetailsHeader title={headerTitle} category={category} />
      </div>
      <div className="flex flex-col w-[90%] mx-auto my-20 mt-10 ">
        <ProductDetails />
      </div>
    </AppLayout>
  );
};
export default ProductDetailsPage;
