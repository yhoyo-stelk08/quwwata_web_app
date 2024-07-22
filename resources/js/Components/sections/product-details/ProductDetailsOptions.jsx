import { useState } from "react";

const poundage = [
  "25 lbs",
  "30 lbs",
  "35 lbs",
  "40 lbs",
  "45 lbs",
  "50 lbs",
  "55 lbs",
];

const ProductDetailsOptions = ({ productType }) => {
  const [drawWeight, setDrawWeight] = useState(null);
  const handleLbsClick = (poundage) => {
    setDrawWeight((prev) => poundage);
  };
  return (
    <div className="flex flex-col border w-full h-full p-2 py-4 md:py-10 gap-2">
      <h1 className="font-medium font-roboto_condensed mt-4 text-4xl md:text-6xl lg:text-5xl xl:text-6xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-800 to-yellow-200">
        Turkish Laminated Bow
      </h1>
      <h3 className="font-quicksand font-bold text-2xl text-slate-200 pl-2 mt-2">
        Rp. 3.500.000
      </h3>
      <h3 className="font-quicksand font-medium text-lg text-slate-200 pl-2 italic mt-4">
        A traditional, powerful, handcrafted bow with layered wood and bamboo.
      </h3>
      <div>
        <h3 className="text-slate-200 pl-2 mt-4">
          Draw Weight : <b>{drawWeight}</b>
        </h3>
        <div className=" grid grid-cols-4 lg:grid-cols-5 pl-2 mt-4 gap-4">
          {poundage.map((lbs, index) => (
            <button
              key={index}
              className={`py-2 px-4 bg-slate-400 text-white rounded-lg ${
                drawWeight === lbs ? "bg-slate-700" : ""
              }`}
              onClick={() => handleLbsClick(lbs)}
            >
              {lbs}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="pl-2 text-xl text-slate-200 mt-4">
          {productType === "Laminated Bow"
            ? "Arrow Pass"
            : productType === "Fiber Bow"
            ? "Bow Color"
            : "Vanes Color"}
        </h3>
      </div>
      <div className="flex gap-4">
        <div>Quantity</div>
        <div>Button Add To Cart</div>
      </div>
    </div>
  );
};
export default ProductDetailsOptions;
