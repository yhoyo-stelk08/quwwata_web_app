import Cart from "@/Components/Cart";
import AppLayout from "@/Layouts/AppLayout";
import { router } from "@inertiajs/react";
import { useCart } from "react-use-cart";

export default function CartPage() {
  const { cartTotal, items } = useCart();

  const handleProceedToCheckout = () => {
    router.post(route("checkout"), {
      orderItems: items,
    });
  };

  return (
    <AppLayout>
      <div className="flex flex-col w-[90%] mx-auto my-16">
        {/* Cart Title */}
        <div className="flex w-full mx-auto justify-center items-center">
          <h3 className="text-slate-200 text-3xl md:text-5xl font-inter tracking-widest">
            Cart
          </h3>
        </div>
        {/* Cart Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto mt-14 gap-8">
          <div className="bg-gradient-to-b from-slate-600 to-slate-800">
            <Cart proceedToCheckout={true} />
          </div>
          <div>
            <div className="flex flex-col w-full h-fit p-2 py-4 md:py-10 gap-2 bg-gradient-to-b from-slate-600 to-slate-800 ">
              <h3 className="font-quicksand font-bold text-2xl text-slate-200 pl-2 mt-2">
                Total :{" "}
                {cartTotal.toLocaleString("ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </h3>
              <button
                className="bg-slate-500 hover:bg-slate-400 active:bg-slate-500 text-white font-semibold py-2 px-4 rounded-lg mt-4"
                onClick={handleProceedToCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
