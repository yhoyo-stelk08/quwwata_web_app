import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

const OrderDetails = ({ orderData, auth }) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Detail Orders
        </h2>
      }
    >
      <div className="max-w-4xl mx-auto my-4 p-4 sm:p-6 lg:p-8 bg-white shadow-sm sm:rounded-lg">
        <Link
          href={route("orders.index")}
          className="text-indigo-600 hover:text-indigo-900 mb-4 inline-block"
        >
          &larr; Back to Orders
        </Link>
        <h1 className="text-2xl font-bold my-4">
          Transaction ID #{orderData.data.transaction_id}
        </h1>
        <h2 className="text-xl font-bold py-4">Customer Details : </h2>
        <div className="grid grid-cols-2 gap-4 mt-2 bg-blue-50 p-6 rounded text-slate-600">
          <div>
            <strong>Customer Name:</strong> {orderData.data.customer_name}
          </div>
          <div>
            <strong>Customer Email:</strong> {orderData.data.customer_email}
          </div>
          <div>
            <strong>Customer Phone:</strong> {orderData.data.customer_phone}
          </div>
          <div>
            <strong>Shipping Address:</strong>{" "}
            {`${orderData.data.customer.address}, ${orderData.data.customer.city}, ${orderData.data.customer.province}, ${orderData.data.customer.zip_code}`}
          </div>
        </div>
        <h2 className="text-xl font-bold mt-8">Payment Details : </h2>
        <div className="grid grid-cols-2 gap-4 mt-2 bg-blue-50 p-6 rounded text-slate-600">
          <div>
            <strong>Payment Status:</strong> {orderData.data.payment_status}
          </div>
          <div>
            <strong>Payment Method:</strong> {orderData.data.payment_method}
          </div>
        </div>
        <h2 className="text-xl font-bold mt-8">Order Details : </h2>
        <table className="w-full mt-4 p-4">
          <thead className="text-left bg-blue-500 text-slate-100 border-2">
            <tr>
              <th className="border-2 py-2 pl-4">Product Name</th>
              <th className="border-2 py-2 pl-2">Price</th>
              <th className="border-2 py-2 text-center">Quantity</th>
              <th className="border-2 py-2 pl-2">Remark</th>
              <th className="border-2 py-2 pl-2">Subtotal</th>
            </tr>
          </thead>
          <tbody className="bg-blue-50 text-slate-600">
            {orderData.data.order_items.map((item, index) => (
              <tr key={index}>
                <td className="border-r-2 py-2 pl-4">{item.product_name}</td>
                <td className="border-r-2 py-2 pl-2">
                  $ {item.sub_total / item.quantity}
                </td>
                <td className="py-2 border-r-2 text-center">{item.quantity}</td>
                <td className="py-2 border-r-2 pl-2">{item.remark}</td>
                <td className="py-2 pl-2">$ {item.sub_total}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={4} className="text-left py-2 pl-4 border-t-2">
                <strong>Total Payment:</strong>
              </td>
              <td className="pl-2 border-t-2">
                <strong>$ {orderData.data.total_payment}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AuthenticatedLayout>
  );
};
export default OrderDetails;
