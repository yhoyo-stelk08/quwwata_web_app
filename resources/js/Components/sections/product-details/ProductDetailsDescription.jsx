import DOMPurify from "dompurify";

const ProductDetailsDescription = ({ productData }) => {
  const { long_description } = productData;
  const sanitizedDescription = DOMPurify.sanitize(long_description);

  return (
    <div className="flex flex-col w-full h-full p-2 text-slate-200 xl:py-8 md:py-8 md:space-y-6 text-sm xl:text-base lg:text-base md:text-base text-left xl:text-left lg:text-center tracking-tight font-inter xl:mt-6 lg:mt-0 md:mt-0 mt-0">
      <div className="py-4 px-6 border-b border-b-slate-400 border-opacity-60 lg:items-center">
        <h3 className="hover:text-slate-50 w-full text-xl">
          Detail Description
        </h3>
      </div>
      <div
        className="mt-4 pl-6 space-y-4 text-lg italic"
        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
      />
    </div>
  );
};

export default ProductDetailsDescription;
