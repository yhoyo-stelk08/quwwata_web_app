import { useForm } from "@inertiajs/react";

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const GalleryEdit = ({ submitRoute, data_gallery }) => {
  const { data, setData, post, put, errors, clearErrors, processing } = useForm(
    {
      title: data?.data?.title || "",
      image_name: data?.data?.image_name || "",
      category: data?.data?.category || "",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return <div>GalleryEdit</div>;
};
export default GalleryEdit;
