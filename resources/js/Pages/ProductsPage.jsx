import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";
import axios from "axios";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ProductsPage({ category }) {
  console.log(category);
  const [allProducts, setAllProducts] = useState([]);
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true });
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // fetching product data from backend
        const response = await axios.get("/api/all-products");
        // console.log(response.data);
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
              className="max-w-sm flex flex-col justify-between bg-gradient-to-b from-slate-100 to-slate-900 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              {console.log("data: ", data)}
              <Link href="#">
                <img
                  className="rounded-t-lg h-[500px] object-cover w-full"
                  src={`/storage/${data.cover_image}`}
                  alt={data.name}
                />
              </Link>
              <div className="p-5 flex-grow">
                <Link href="#">
                  <h5 className="mb-2 text-2xl md:text-xl font-bold tracking-tight text-slate-200 dark:text-white font-roboto_condensed">
                    {data.name}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-slate-200 dark:text-gray-400 italic">
                  {data.short_description}
                </p>
              </div>
              <div className="px-5 py-2">
                <Link
                  // href={`/products/${data.id}`}
                  href="#"
                  className="text-slate-200 transition-all duration-200  md:hover:text-lg mt-2"
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
