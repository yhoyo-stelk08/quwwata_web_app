import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
const ProductShow = ({ product, auth }) => {
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
          href={route("manage-products.index")}
          className="text-indigo-600 hover:text-indigo-900 mb-4 inline-block"
        >
          &larr; Back to Products
        </Link>
        <h2 className="text-2xl font-bold mb-4">{product.data.name}</h2>
        <div className="mb-4">
          <strong>Price:</strong> {product.data.price}
        </div>
        <div className="mb-4">
          <strong>Draw Weight:</strong> {product.data.draw_weight}
        </div>
        <div className="mb-4">
          <strong>Arrow Pass Color:</strong> {product.data.arrow_pass}
        </div>
        <div className="mb-4">
          <strong>Category:</strong> {product.data.category}
        </div>
        <div className="mb-4">
          <strong>Short Description:</strong>
          <p>{product.data.short_description}</p>
        </div>
        <div className="mb-4">
          <strong>Long Description:</strong>
          <div
            dangerouslySetInnerHTML={{ __html: product.data.long_description }}
          />
        </div>
        <div className="mb-4">
          <strong>Images:</strong>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {product.data.product_images.map((image, index) => (
              <img
                key={index}
                src={`/storage/${image.path}`}
                alt={image.image_name}
                className="object-cover w-full h-48 rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};
export default ProductShow;
