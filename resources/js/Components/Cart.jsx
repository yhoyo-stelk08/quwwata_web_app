import { Link } from "@inertiajs/react";
import { FaArrowRight } from "react-icons/fa";

const Cart = ({ product }) => {
  return (
    <div className="">
      <h3 className="text-xl tracking-wide font-quicksand py-6 pl-4">Cart</h3>
      {product ? (
        ""
      ) : (
        <div className="w-full bg-slate-100 h-32 flex justify-center items-center text-slate-600">
          No Item In Cart
        </div>
      )}
      <div className="flex items-center justify-center text-center w-full p-4 font-quicksand tracking-wide text-slate-500">
        <Link
          className="w-full py-2 flex items-center justify-center text-slate-400"
          href={route("products")}
        >
          Continue shopping
          <FaArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
export default Cart;
