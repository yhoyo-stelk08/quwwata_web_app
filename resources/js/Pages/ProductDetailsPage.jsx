import ProductDetails from "@/Components/sections/product-details/ProductDetails";
import ProductDetailsHeader from "@/Components/sections/product-details/ProductDetailsHeader";
import AppLayout from "@/Layouts/AppLayout";

const ProductDetailsPage = () => {
  return (
    <AppLayout>
      <div className="flex flex-col w-full h-96 mx-auto mt-0">
        <ProductDetailsHeader />
      </div>
      <div className="flex md:flex-col w-[90%] h-screen mx-auto my-10 border">
        <ProductDetails />
      </div>
    </AppLayout>
  );
};
export default ProductDetailsPage;
