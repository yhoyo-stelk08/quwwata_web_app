import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GalleryForm from "./GalleryForm";

const GalleryCreate = ({ auth }) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Add Items To Gallery
        </h2>
      }
    >
      <div className="py-12">
        <GalleryForm submitRoute={"galleries.store"} />
      </div>
    </AuthenticatedLayout>
  );
};

export default GalleryCreate;
