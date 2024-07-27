import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GalleryForm from "./GalleryForm";

const GalleryEdit = ({ auth, data_gallery }) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Update Gallery Items
        </h2>
      }
    >
      <div className="py-12">
        <GalleryForm
          submitRoute={"galleries.update"}
          gallery_data={data_gallery}
        />
      </div>
    </AuthenticatedLayout>
  );
};
export default GalleryEdit;
