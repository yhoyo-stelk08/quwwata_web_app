import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";

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

const ProductDetailsOptions = ({ productType }) => {
  const [drawWeight, setDrawWeight] = useState(null);
  const [colorOption, setColorOption] = useState(null);
  const [qty, setQty] = useState(1);

  const handleLbsClick = (poundage) => {
    setDrawWeight((prev) => poundage);
  };

  const handleColorClick = (color) => {
    setColorOption((prev) => color);
  };

  const handleQtyChange = (e) => {
    setQty((prev) => e.target.value);
  };

  const incrementQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decrementQty = () => {
    setQty((prevQty) => Math.max(prevQty - 1, 0)); // prevent quantity from going below 0
  };

  return (
    <div className="flex flex-col w-full h-full p-2 py-4 md:py-10 gap-2">
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
      <div className="flex gap-4 pl-2 mt-5 items-center md:items-start">
        <div className="flex flex-col xl:flex-col md:flex-row gap-2 ">
          <div className="flex items-center">
            <button
              onClick={decrementQty}
              className="w-10 h-10 bg-slate-500 text-white rounded-l-lg flex justify-center items-center ml-2"
            >
              -
            </button>
            <input
              type="text"
              readOnly
              value={qty}
              onChange={handleQtyChange}
              className="w-20 h-10 text-center bg-slate-400 bg-opacity-80 text-slate-50"
            />
            <button
              onClick={incrementQty}
              className="w-10 h-10 bg-slate-500 text-white rounded-r-lg flex justify-center items-center"
            >
              +
            </button>
          </div>
        </div>
        <button className="flex gap-2 text-white bg-gradient-to-br from-yellow-200 to-orange-600 items-center justify-center py-3 px-6 rounded-md">
          <FaCartArrowDown className="w-6 h-6" />
          Add To Cart
        </button>
      </div>
    </div>
  );
};
export default ProductDetailsOptions;
