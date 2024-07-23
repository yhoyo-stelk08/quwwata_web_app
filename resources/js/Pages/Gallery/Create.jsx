import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

const GalleryCreate = ({ auth }) => {
  const { data, setData, post, processing, errors } = useForm({
    title: "",
    image: null,
  });

  const handleChange = (e) => {
    setData(
      e.target.name,
      e.target.type === "file" ? e.target.files[0] : e.target.value
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("galleries.store"), {
      data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

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
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Enter title"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-xs italic">
                      {errors.title}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="image"
                  >
                    Image
                  </label>
                  <input
                    id="image"
                    name="image"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="file"
                    accept="image/*"
                  />
                  {errors.image && (
                    <p className="text-red-500 text-xs italic">
                      {errors.image}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={processing}
                  >
                    Add to Gallery
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default GalleryCreate;
