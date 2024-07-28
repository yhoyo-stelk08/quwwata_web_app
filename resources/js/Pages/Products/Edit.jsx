import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProductForm from "./ProductForm";

export default function ProductEdit({ auth, product_data }) {
  console.log(product_data);
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Update Products Item
        </h2>
      }
    >
      <div className="py-12">
        <ProductForm
          submitRoute="manage-products.update"
          product_data={product_data}
        />
      </div>
    </AuthenticatedLayout>
  );
}
