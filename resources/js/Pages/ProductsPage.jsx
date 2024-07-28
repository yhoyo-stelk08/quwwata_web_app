import AppLayout from "@/Layouts/AppLayout";

export default function ProductsPage() {
  return (
    <AppLayout>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 mx-10">
          <div className="w-full p-4">Grid 1</div>
          <div className="w-full p-4">Grid 2</div>
          <div className="w-full p-4">Grid 3</div>
          <div className="w-full p-4">Grid 4</div>
          <div className="w-full p-4">Grid 5</div>
        </div>
      </div>
    </AppLayout>
  );
}
