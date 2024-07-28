import { useForm } from "@inertiajs/react";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

const ProductForm = ({ product_data, submitRoute }) => {
  const { data, setData, post, errors, clearErrors, processing } = useForm({
    name: product_data?.data?.name || "",
    price: product_data?.data?.price || "",
    draw_weight: product_data?.data?.draw_weight || "",
    arrow_pass: product_data?.data?.arrow_pass || "",
    short_description: product_data?.data?.short_description || "",
    long_description: product_data?.data?.long_description || "",
    product_images: [],
  });

  const editor = useRef(null);
  const [fileError, setFileError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.product_images.length !== 8) {
      setFileError("Please upload exactly 8 images.");
      return;
    }

    // Ensure the long_description is updated with the editor's content
    setData("long_description", editor.current.value);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("draw_weight", data.draw_weight);
    formData.append("arrow_pass", data.arrow_pass);
    formData.append("short_description", data.short_description);
    formData.append("long_description", data.long_description);

    if (data.product_images.length > 0) {
      Array.from(data.product_images).forEach((file, index) => {
        formData.append(`product_images[${index}]`, file);
      });
    }

    if (product_data?.data?.id) {
      formData.append("_method", "PUT");
      post(route(submitRoute, { product: product_data.data.id }), formData, {
        forceFormData: true,
        onError: (errors) => {
          console.log(errors);
        },
      });
    } else {
      post(route(submitRoute), formData, {
        forceFormData: true,
        onError: (errors) => {
          console.log(errors);
        },
      });
    }
  };

  const handleChange = (e) => {
    const { id, type, value, files } = e.target;
    clearErrors(id);
    setData(id, type === "file" ? files : value);
  };

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div className="p-6 text-gray-900">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Product Name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                id="price"
                name="price"
                value={data.price}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Product Price"
              />
              {errors.price && (
                <p className="text-red-500 text-xs italic">{errors.price}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="draw_weight"
              >
                Draw Weight
              </label>
              <input
                id="draw_weight"
                name="draw_weight"
                type="number"
                value={data.draw_weight}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Draw Weight"
              />
              {errors.draw_weight && (
                <p className="text-red-500 text-xs italic">
                  {errors.draw_weight}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="arrow_pass"
              >
                Arrow Pass Color
              </label>
              <input
                id="arrow_pass"
                name="arrow_pass"
                value={data.arrow_pass}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Arrow Pass Color"
              />
              {errors.arrow_pass && (
                <p className="text-red-500 text-xs italic">
                  {errors.arrow_pass}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="short_description"
              >
                Short Description
              </label>
              <textarea
                id="short_description"
                name="short_description"
                value={data.short_description}
                onChange={handleChange}
                className="shadow resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Short Description"
              />
              {errors.short_description && (
                <p className="text-red-500 text-xs italic">
                  {errors.short_description}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="long_description"
              >
                Long Description
              </label>
              <JoditEditor
                ref={editor}
                value={data.long_description}
                onBlur={(newContent) => setData("long_description", newContent)}
                config={{
                  buttons:
                    "bold,italic,underline,strikethrough,ul,ol,font,fontsize,paragraph,lineHeight,classSpan,spellcheck,cut,copy,paste,selectall,copyformat,hr,link",
                  height: 300, // set desired height here
                }}
              />
              {errors.long_description && (
                <p className="text-red-500 text-xs italic">
                  {errors.long_description}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="product_images"
              >
                Product Images (Upload 8 Images)
              </label>
              <input
                id="product_images"
                name="product_images"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                multiple
                accept="image/*"
              />
              {fileError && (
                <p className="text-red-500 text-xs italic">{fileError}</p>
              )}
              {errors.product_images && (
                <p className="text-red-500 text-xs italic">
                  {errors.product_images}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={processing}
              >
                {product_data ? "Update Item" : "Add Item"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
