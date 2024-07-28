import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProductForm from "./ProductForm";

export default function ProductCreate({ auth }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Add Products Item
        </h2>
      }
    >
      <div className="py-12">
        <ProductForm />
      </div>
    </AuthenticatedLayout>
  );
}
