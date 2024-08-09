import { Link } from "@inertiajs/react";
const Receipt = ({ transactionId, amount, order }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 bg-green-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
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
        <ul className="text-left mb-4">
          {order.order_items.map((item) => (
            <li key={item.id}>
              {item.product.name} - Quantity: {item.quantity} - Subtotal: $
              {item.sub_total}
            </li>
          ))}
        </ul>
        <Link
          href="/"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Receipt;
