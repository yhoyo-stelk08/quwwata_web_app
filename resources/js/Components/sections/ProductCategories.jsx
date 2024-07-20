import accesories from "../../../images/categories-images/accessories.jpeg";
import arrows from "../../../images/categories-images/arrows.jpeg";
import flatBow from "../../../images/categories-images/flat-bow.jpeg";
import laminatedBow from "../../../images/categories-images/laminated-bow.jpeg";

const categoryImg = [
  { bgImage: laminatedBow, title: "Laminated Bow" },
  { bgImage: flatBow, title: "Fiber Flat Bow" },
  { bgImage: arrows, title: "Arrows" },
  { bgImage: accesories, title: "Accessories" },
];

const ProductCategories = () => {
  return (
    <section className="container flex flex-row gap-4 px-4 mx-auto mt-20 border h-96 max-w-[90%]">
      <div className="max-w-sm border border-white ">
        <img src={laminatedBow} alt="Laminated Bow" width="300px" />
      </div>
      <div className="max-w-sm border border-white ">
        <img src={laminatedBow} alt="Laminated Bow" width="300px" />
      </div>
      <div className="max-w-sm border border-white ">
        <img src={laminatedBow} alt="Laminated Bow" width="300px" />
      </div>
      <div className="max-w-sm border border-white ">
        <img src={laminatedBow} alt="Laminated Bow" width="300px" />
      </div>
    </section>
  );
};
export default ProductCategories;
