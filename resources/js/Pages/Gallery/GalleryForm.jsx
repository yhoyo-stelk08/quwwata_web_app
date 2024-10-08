import { router, useForm } from "@inertiajs/react";

const GalleryForm = ({ gallery_data, submitRoute }) => {
  const { data, setData, errors, clearErrors, processing } = useForm({
    title: gallery_data?.data?.title || "",
    image_name: "", // Reset image_name to handle new file upload
    category: gallery_data?.data?.category || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("category", data.category);
    if (data.image_name instanceof File) {
      formData.append("image_name", data.image_name);
    }

    if (gallery_data?.data?.id) {
      formData.append("_method", "PUT");
      router.post(
        route(submitRoute, { gallery: gallery_data.data.id }),
        formData,
        {
          onError: (errors) => {
            console.log(errors);
          },
          preserveState: true,
        }
      );
    } else {
      router.post(route(submitRoute), formData, {
        onError: (errors) => {
          console.log(errors);
        },
        preserveState: true,
      });
    }
  };

  const handleChange = (e) => {
    const { id, type, value, files } = e.target;
    clearErrors(id);
    setData(id, type === "file" ? files[0] : value);
  };

  return (
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
                <p className="text-red-500 text-xs italic">{errors.title}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="w-full py-2 px-3"
                value={data.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option value="laminated bow">Laminated Bow</option>
                <option value="flat bow">Flat Bow</option>
                <option value="arrows">Arrows</option>
                <option value="accessories">Accessories</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-xs italic">{errors.category}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image_name"
              >
                Image
              </label>
              {gallery_data?.data?.image_name && (
                <div className="mb-2">
                  <img
                    src={`/storage/${gallery_data.data.image_name}`}
                    alt="Current Image"
                    className="max-h-40"
                  />
                </div>
              )}
              <input
                id="image_name"
                name="image_name"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-0 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                accept="image/*"
              />
              {errors.image_name && (
                <p className="text-red-500 text-xs italic">
                  {errors.image_name}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={processing}
              >
                {gallery_data ? "Update Item" : "Add Item"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GalleryForm;
