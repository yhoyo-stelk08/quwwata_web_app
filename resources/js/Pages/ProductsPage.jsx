import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // fetching product data from backend
        const response = await axios.get("/all-products");
        console.log(response.data);
        setAllProducts(response.data);
      } catch (error) {
        console.error("There was an error when fetching product data: ", error);
      }
    };
    fetchProductData();
  }, []);
  return (
    <AppLayout>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mx-10">
          {allProducts.map((data) => (
            <div
              key={data.id}
              className="max-w-sm flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <Link href="#">
                <img
                  className="rounded-t-lg"
                  src={`/storage/${data.product_images[0].path}`}
                  alt={data.name}
                />
              </Link>
              <div className="p-5 flex-grow">
                <Link href="#">
                  <h5 className="mb-2 text-2xl md:text-xl font-bold tracking-tight text-gray-900 dark:text-white font-roboto_condensed">
                    {data.name}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 italic">
                  {data.short_description}
                </p>
              </div>
              <div className="px-5 py-2">
                <Link
                  // href={`/products/${data.id}`}
                  href="#"
                  className="text-blue-500 hover:underline mt-2"
                >
                  See Details
                </Link>
              </div>
              <div className="p-5">
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-yellow-200 to-yellow-300">
                  {data.price.toLocaleString("ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
