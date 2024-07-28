export default function ProductCreate() {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Add Items To Gallery
        </h2>
      }
    >
      <div className="py-12">Product Create Form</div>
    </AuthenticatedLayout>
  );
}
