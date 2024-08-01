import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useCart } from "react-use-cart";

const poundage = [
  "25 lbs",
  "30 lbs",
  "35 lbs",
  "40 lbs",
  "45 lbs",
  "50 lbs",
  "55 lbs",
];

const customColor = ["Black", "Red", "Green", "White"];

const ProductDetailsOptions = ({ productType, productData }) => {
  const { addItem } = useCart();
  const [drawWeight, setDrawWeight] = useState(null);
  const [colorOption, setColorOption] = useState(null);
  const { name: productName, price, short_description } = productData;
  const [orderItem, setOrderItem] = useState({ ...productData });

  const handleLbsClick = (poundage) => {
    setDrawWeight((prev) => poundage);
    setOrderItem((prevValue) => ({
      ...prevValue,
      draw_weight: poundage,
    }));
  };

  const handleColorClick = (color) => {
    setColorOption((prev) => color);
    setOrderItem((prevValue) => ({
      ...prevValue,
      arrow_pass: color,
    }));
  };

  return (
    <div className="flex flex-col w-full h-full p-2 py-4 md:py-10 gap-2">
      <h1 className="font-medium font-roboto_condensed mt-4 text-4xl md:text-6xl lg:text-5xl xl:text-6xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-800 to-yellow-200">
        {productName}
      </h1>
      <h3 className="font-quicksand font-bold text-2xl text-slate-200 pl-2 mt-2">
        {price.toLocaleString("ID", {
          style: "currency",
          currency: "IDR",
        })}
      </h3>
      <h3 className="font-quicksand font-medium text-lg text-slate-200 pl-2 italic mt-4">
        {short_description}
      </h3>
      <div>
        <h3 className="text-slate-200 pl-2 mt-4">
          Draw Weight : <b>{drawWeight}</b>
        </h3>
        <div className=" grid grid-cols-4 lg:grid-cols-5 pl-2 mt-4 gap-4">
          {poundage.map((lbs, index) => (
            <button
              type="button"
              key={index}
              className={`py-2 px-4 bg-slate-400 text-white lg:text-sm rounded-lg ${
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
        <h3 className="pl-2  text-slate-200 mt-4">
          {productType === "Laminated Bow"
            ? "Arrow Pass : "
            : productType === "Fiber Bow"
            ? "Bow Color : "
            : "Vanes Color : "}
          {colorOption}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-auto gap-4 py-4 px-4">
          {productType === "Laminated Bow" &&
            customColor.map((color, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  onClick={() => handleColorClick(color)}
                  className={`rounded-lg py-3 px-6 bg-${
                    color === "Black"
                      ? "black text-white"
                      : color === "White"
                      ? "white"
                      : color.toLowerCase() + "-600 text-white"
                  }`}
                >
                  {color}
                </button>
              );
            })}
        </div>
      </div>
      <div className="flex gap-4 pl-2 mt-5 items-center justify-start xl:justify-end md:items-center">
        <button
          className="flex gap-2 text-white bg-gradient-to-br from-yellow-200 to-orange-600  hover:to-orange-400  active:to-orange-600 items-center justify-center py-3 px-6 ml-2 md:mr-4 rounded-md text-xs md:text-base"
          onClick={() => addItem(orderItem)}
        >
          <FaCartArrowDown className="w-6 h-6" />
          <span className=" hidden xs:block">Add To Cart</span>
        </button>
      </div>
    </div>
  );
};
export default ProductDetailsOptions;
