const ProductDetails = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-full border border-red-500">
        <div className="w-full h-full border">Image Slider</div>
        <div className="w-full h-full border">Product Custom Choice</div>
      </div>
      <div className="flex flex-col md:flex-row w-full h-full border border-red-500">
        <div className="w-full h-full border">Product Description</div>
        <div className="w-full h-full border">Other Detail / Optional</div>
      </div>
    </>
  );
};
export default ProductDetails;
