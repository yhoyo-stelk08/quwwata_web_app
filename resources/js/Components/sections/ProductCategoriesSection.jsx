import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import ProductCategories from "@/Components/common/ProductCategories";

const ProductCategoriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      className="w-full mx-auto mt-20 xl:mt-36 flex flex-col justify-center items-center"
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 200 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col justify-center items-center w-full max-w-7xl">
        <h1 className="text-center text-slate-200 font-raleway text-6xl">
          Why choose our bow?
        </h1>
        <p className="text-center text-slate-200 font-raleway italic my-8">
          Our bows are more than just a piece of equipment; they are a testament
          to the skill and artistry of ancient bowyers. Each bow is carefully
          handcrafted using high-quality materials, ensuring durability and
          exceptional shooting experience. Whether you are a seasoned archer or
          a beginner, our bows provide a unique and rewarding way to connect
          with the history and spirit of archery.
        </p>
      </div>
      <ProductCategories />
    </motion.section>
  );
};
export default ProductCategoriesSection;
