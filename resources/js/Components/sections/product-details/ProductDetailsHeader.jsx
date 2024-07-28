import imgHeader1 from "../../../../images/detail-product/header1.jpeg";
import imgHeader2 from "../../../../images/detail-product/header2.jpeg";
import imgHeader3 from "../../../../images/detail-product/header3.jpeg";
import imgHeader4 from "../../../../images/detail-product/header4.jpeg";

const ProductDetailsHeader = ({ title, category }) => {
  let imgHeader = "";
  if (category === "laminated-bow") {
    imgHeader = imgHeader1;
  } else if (category === "flat-bow") {
    imgHeader = imgHeader2;
  } else if (category === "arrows") {
    imgHeader = imgHeader3;
  } else {
    imgHeader = imgHeader4;
  }
  return (
    <div className="m-0 w-full h-full relative opacity-70">
      <img
        src={imgHeader}
        alt=""
        className="object-cover w-full h-full absolute top-0 left-0"
      />
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded text-2xl md:text-4xl lg:text-5xl text-center font-pacifico">
        {title}
      </div>
    </div>
  );
};
export default ProductDetailsHeader;
