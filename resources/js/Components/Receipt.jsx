import { Link } from "@inertiajs/react";
import { useEffect } from "react";
import { useCart } from "react-use-cart";

const Receipt = ({ transactionId, amount, order }) => {
  const { emptyCart } = useCart();

  // empty the cart after the transaction
  useEffect(() => {
    emptyCart();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center md:py-8 mx-4 my-auto bg-transparent">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl text-center">
        <h1 className="text-3xl font-bold text-slate-600 mb-4">
          Payment Successful!
        </h1>
        <p className="text-lg mb-2">Thank you for your purchase.</p>
        <p className="text-md mb-4">
          Transaction ID: <span className="font-semibold">{transactionId}</span>
        </p>
        <p className="text-md mb-6">
          Amount Paid: <span className="font-semibold">${amount}</span>
        </p>
        <p className="text-md mb-4">Order Details:</p>
        <table className="text-left mb-4">
          <thead>
            <tr>
              <th className="">Product</th>
              <th className="pl-2">Quantity</th>
              <th className="pl-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {order.order_items.map((item) => (
              <tr key={item.id} className="text-sm">
                <td>{item.product.name}</td>
                <td className="text-center">{item.quantity}</td>
                <td className="pl-2">${item.sub_total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link
          href={route("products")}
          className="bg-slate-600 text-white py-2 px-4 rounded hover:bg-slate-700"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Receipt;
