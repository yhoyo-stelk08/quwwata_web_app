import TabTheme from "@/Components/common/TabTheme";
import ProductCard from "@/Components/sections/product-details/ProductCard";
import AppLayout from "@/Layouts/AppLayout";
import { usePage } from "@inertiajs/react";
import axios from "axios";
import { Tabs } from "flowbite-react";
import { useEffect, useRef, useState } from "react";

export default function ProductsPage() {
  const { props } = usePage();
  const { category } = props;
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const tabsRef = useRef(null); // Use TabsRef

  // Fetch all products on component mount
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get("/api/all-products");
        setAllProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("There was an error when fetching product data: ", error);
      }
    };
    fetchProductData();
  }, []);

  // Set the active tab and filtered products based on the menu choosen
  useEffect(() => {
    let tabIndex = 0;
    if (category) {
      switch (category) {
        case "laminated-bow":
          tabIndex = 1;
          break;
        case "flat-bow":
          tabIndex = 2;
          break;
        case "arrows":
          tabIndex = 3;
          break;
        case "accessories":
          tabIndex = 4;
          break;
        default:
          tabIndex = 0;
          break;
      }
      const filtered = allProducts.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts);
    }
    if (tabsRef.current) {
      tabsRef.current.setActiveTab(tabIndex);
    }
  }, [category, allProducts]);

  // handleTabChange function to filter products based on the selected tab manually
  const handleTabChange = (index) => {
    let newCategory = "";
    switch (index) {
      case 1:
        newCategory = "laminated-bow";
        break;
      case 2:
        newCategory = "flat-bow";
        break;
      case 3:
        newCategory = "arrows";
        break;
      case 4:
        newCategory = "accessories";
        break;
      default:
        newCategory = "";
        break;
    }
    const filtered = allProducts.filter(
      (product) => product.category === newCategory
    );
    setFilteredProducts(filtered.length ? filtered : allProducts);
  };

  return (
    <AppLayout>
      <div className="flex flex-col w-[90%] mx-auto my-16">
        <div className="flex w-full mx-auto justify-center items-center">
          <h3 className="text-slate-200 text-3xl md:text-5xl lg:text-6xl font-raleway tracking-widest">
            Our Collections
          </h3>
        </div>
        <div className="gap-2 mt-10 overflow-x-auto whitespace-nowrap">
          <Tabs
            aria-label="Tabs with underline"
            variant="underline"
            className="gap-4 transition-all duration-300 justify-start md:justify-center"
            theme={TabTheme}
            ref={tabsRef} // Reference to the Tabs
            onActiveTabChange={handleTabChange}
          >
            <Tabs.Item title="All" className="inline-block">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10">
                {filteredProducts.map((data) => (
                  <ProductCard data={data} key={data.id} />
                ))}
              </div>
            </Tabs.Item>
            <Tabs.Item title="Laminated Bow" className="inline-block">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10">
                {filteredProducts
                  .filter((product) => product.category === "laminated-bow")
                  .map((data) => (
                    <ProductCard data={data} key={data.id} />
                  ))}
              </div>
            </Tabs.Item>
            <Tabs.Item title="Flat Bow" className="inline-block">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10">
                {filteredProducts
                  .filter((product) => product.category === "flat-bow")
                  .map((data) => (
                    <ProductCard data={data} key={data.id} />
                  ))}
              </div>
            </Tabs.Item>
            <Tabs.Item title="Arrows" className="inline-block">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10">
                {filteredProducts
                  .filter((product) => product.category === "arrows")
                  .map((data) => (
                    <ProductCard data={data} key={data.id} />
                  ))}
              </div>
            </Tabs.Item>
            <Tabs.Item title="Accessories" className="inline-block">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10">
                {filteredProducts
                  .filter((product) => product.category === "accessories")
                  .map((data) => (
                    <ProductCard data={data} key={data.id} />
                  ))}
              </div>
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    </AppLayout>
  );
}
