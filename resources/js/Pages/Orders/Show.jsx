import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

const OrderDetails = ({ orders, auth }) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Detail Products
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
      </div>
    </AuthenticatedLayout>
  );
};
export default OrderDetails;
