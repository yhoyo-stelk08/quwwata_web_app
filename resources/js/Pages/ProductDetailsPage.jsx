import ProductDetails from "@/Components/sections/product-details/ProductDetails";
import ProductDetailsHeader from "@/Components/sections/product-details/ProductDetailsHeader";
import AppLayout from "@/Layouts/AppLayout";
import { useEffect, useState } from "react";

const ProductDetailsPage = ({ category, name, id }) => {
  const [productData, setProductData] = useState();

  // fetch data from database based on product id
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`/api/products-details/${id}`);
        setProductData(response.data);
      } catch (error) {
        console.error(
          "There was an error when fetching products-details data: ",
          error
        );
      }
    };
    fetchProductData();
  }, []);

  console.log(productData);

  return (
    <AppLayout>
      <div className="flex flex-col w-full h-72 xl:h-96 md:h-[400px] mx-auto mt-0">
        <ProductDetailsHeader title={name} category={category} />
      </div>
      <div className="flex flex-col w-[90%] mx-auto my-20 mt-10 ">
        <ProductDetails />
      </div>
    </AppLayout>
  );
};
export default ProductDetailsPage;
