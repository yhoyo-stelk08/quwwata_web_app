const ProductDetailsDescription = () => {
  return (
    <div className="flex flex-col w-full h-full p-2 text-slate-200 xl:py-8 md:py-8 md:space-y-6 text-sm xl:text-base lg:text-base md:text-base text-left xl:text-left lg:text-center tracking-tight font-inter xl:mt-6 lg:mt-0 md:mt-0 mt-0">
      <div className="py-4 px-6 border-b border-b-slate-400 border-opacity-60 lg:items-center">
        <h3 className=" hover:text-slate-50 w-full">Detail Description</h3>
      </div>
      <div className="mt-4 pl-6 space-y-2 italic">
        <p className="">Handcrafted bow with layered wood and bamboo</p>
        <p className="">Length: 56″</p>
        <p className="">Draw length: up to 30″</p>
        <p className="">Wood for handle and tips: Stabilized wood</p>
        <p>High modulus black fiberglass with additional 90° fibers</p>
        <p>Natural action bamboo cores</p>
        <p>Brown phenolic composite tips and string bridge</p>
        <p>Hand stitched veg-tanned chrome free leather grip</p>
        <p className="py-6">Fast flight string and bow sleeve included.</p>
        <p>
          The indicated draw weight is measured at 28″ draw length and has a
          plus or minus 2 pounds range. For example, 40# can be 38# to 42#.
        </p>
        <p>If you are looking for a specific poundage please contact me.</p>
      </div>
      <p className="font-bold items-start ml-6 mt-4">
        Current wait time is an estimated 1 -3 months if not in stock
      </p>
    </div>
  );
};
export default ProductDetailsDescription;
