import { Link, router } from "@inertiajs/react";
import { FaArrowRight, FaTrash } from "react-icons/fa";
import { useCart } from "react-use-cart";

const Cart = ({ proceedToCheckout }) => {
  const {
    isEmpty,
    removeItem,
    totalItems,
    updateItemQuantity,
    items,
    cartTotal,
  } = useCart();
  let contentCart = "";
  if (isEmpty) {
    contentCart = (
      <div className="w-full bg-slate-100 h-32 flex justify-center items-center text-slate-600">
        No Item In Cart
      </div>
    );
  } else {
    contentCart = items.map((item) => (
      <div key={item.id} className="flex flex-col p-4 border-b">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={`/storage/${item.cover_image}`}
              alt={item.name}
              className="h-16 w-16 object-cover"
            />
            <div className={`ml-4 `}>
              <h4
                className={`font-quicksand ${
                  proceedToCheckout ? "text-orange-500 " : "text-slate-600 "
                }`}
              >
                {item.name}
              </h4>
              <p
                className={`text-sm ${
                  proceedToCheckout ? "text-slate-200" : "text-slate-500"
                }`}
              >
                Qty: {item.quantity}
              </p>
              <p
                className={`text-sm ${
                  proceedToCheckout ? "text-slate-200" : "text-slate-500"
                }`}
              >
                Arrow Pass: {item.arrow_pass}
              </p>
              <p
                className={`text-sm ${
                  proceedToCheckout ? "text-slate-200" : "text-slate-500"
                }`}
              >
                Draw Weight: {item.draw_weight}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              className="px-2 py-1 bg-slate-200 rounded"
            >
              -
            </button>
            <span
              className={`${
                proceedToCheckout ? "text-slate-200" : "text-slate-500"
              }`}
            >
              {item.quantity}
            </span>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              className="px-2 py-1 bg-slate-200 rounded"
            >
              +
            </button>
            <button
              onClick={() => removeItem(item.id)}
              className="flex gap-2 items-center px-2 py-1 bg-red-200 text-red-400 rounded"
            >
              <FaTrash className="w-3 h-3" color="red" />
              Remove
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span
            className={`text-sm ${
              proceedToCheckout ? "text-slate-200" : "text-slate-500"
            }`}
          >
            Sub Total:
          </span>
          <span
            className={`text-sm ${
              proceedToCheckout ? "text-slate-200" : "text-slate-500"
            }`}
          >
            {(item.quantity * item.price).toLocaleString("ID", {
              style: "currency",
              currency: "IDR",
            })}
          </span>
        </div>
      </div>
    ));
  }

  const handleCheckout = () => {
    const orderItems = items.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      product_id: item.product_id,
      arrow_pass: item.arrow_pass,
      draw_weight: item.draw_weight,
      itemTotal: item.itemTotal,
    }));

    router.post(route("cart"), {
      order_item: orderItems,
    });
  };

  return (
    <>
      <h3
        className={`text-xl tracking-wide font-quicksand py-6 pl-4 ${
          proceedToCheckout ? "text-slate-100" : ""
        }`}
      >
        Cart Items : ({totalItems})
      </h3>
      {contentCart}
      {!proceedToCheckout && !isEmpty && (
        <div>
          <div className="flex justify-between items-center mt-4 mx-4">
            <span className="text-sm text-slate-500 font-bold">
              Grand Total:
            </span>
            <span className="text-sm text-slate-500 font-bold">
              {cartTotal.toLocaleString("ID", {
                style: "currency",
                currency: "IDR",
              })}
            </span>
          </div>
          <div className="mt-3 mx-4 flex items-center justify-center">
            <button
              className="w-full bg-gradient-to-br from-yellow-200 to-orange-600 hover:to-orange-500 hover:text-slate-50 active:to-orange-600 text-slate-200 rounded-lg py-2"
              onClick={handleCheckout}
            >
              Go To Cart
            </button>
          </div>
        </div>
      )}

      {!proceedToCheckout && (
        <div className="flex items-center justify-center text-center w-full p-4 font-quicksand tracking-wide text-slate-500">
          <Link
            className="w-full py-2 flex items-center justify-center text-slate-400"
            href={route("products")}
          >
            Continue shopping
            <FaArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      )}
    </>
  );
};
export default Cart;
