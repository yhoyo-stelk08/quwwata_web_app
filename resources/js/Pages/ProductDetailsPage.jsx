import ProductDetails from "@/Components/sections/product-details/ProductDetails";
import ProductDetailsHeader from "@/Components/sections/product-details/ProductDetailsHeader";
import AppLayout from "@/Layouts/AppLayout";

const ProductDetailsPage = () => {
  return (
    <AppLayout>
      <div className="flex flex-col w-full h-72 xl:h-96 md:h-[400px] mx-auto mt-0">
        <ProductDetailsHeader />
      </div>
      <div className="flex flex-col w-[90%] mx-auto my-20 mt-0  border">
        <ProductDetails />
      </div>
    </AppLayout>
  );
};
export default ProductDetailsPage;
