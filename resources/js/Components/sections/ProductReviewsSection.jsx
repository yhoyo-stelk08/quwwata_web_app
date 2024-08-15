const reviewsData = [];

const ProductReviewsSection = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-full h-auto py-8 mt-10 border-b">
        {/* Header */}
        <h1 className="text-4xl text-slate-200 font-quicksand font-semibold italic tracking-wider">
          REVIEWS
        </h1>
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center border-b p-8">
        {/* Reviews */}
        {reviewsData.length > 0 ? (
          ""
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl text-slate-200 font-sans  tracking-wider">
              No Reviews Yet, Write One ?
            </h3>
            <button className=" text-slate-200 px-8 py-2 rounded-full mt-4 bg-slate-700 hover:bg-slate-200 hover:text-slate-800  duration-300 ">
              Write a Review
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductReviewsSection;
