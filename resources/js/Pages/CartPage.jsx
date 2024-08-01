import Cart from "@/Components/Cart";
import AppLayout from "@/Layouts/AppLayout";

export default function CartPage({ orderItems }) {
  console.log(orderItems);
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
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto mt-10 bg-slate-100">
          <div>
            <Cart proceedToCheckout={true} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
