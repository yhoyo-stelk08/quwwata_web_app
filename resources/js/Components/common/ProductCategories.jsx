import useResponsiveWidth from "@/hooks/UseResponsiveWidth";

import CubeSlider from "./CubeSlider";

const categoryImg = [
  { imgSrc: "laminated-bow.jpeg", imgTitle: "Laminated Bow" },
  { imgSrc: "flat-bow.jpeg", imgTitle: "Fiber Flat Bow" },
  { imgSrc: "arrows.jpeg", imgTitle: "Arrows" },
  { imgSrc: "accessories.jpeg", imgTitle: "Accessories" },
];

const fiberFlatBowCategory = [
  "flat-bow-1.jpeg",
  "flat-bow-2.jpeg",
  "flat-bow-3.jpeg",
  "flat-bow-4.jpeg",
];

const arrowsCategory = [
  "arrows-1.jpeg",
  "arrows-2.jpeg",
  "arrows-3.jpeg",
  "arrows-4.jpeg",
];

const accessoriesCategory = [
  "accessories-1.jpeg",
  "accessories-2.jpeg",
  "accessories-3.jpeg",
  "accessories-4.jpeg",
];

const laminatedBowCategory = [
  "laminated-bow-1.jpeg",
  "laminated-bow-2.jpeg",
  "laminated-bow-3.jpeg",
  "laminated-bow-4.jpeg",
];

const ProductCategories = () => {
  const width = useResponsiveWidth();
  return (
    <>
      {width > 640 ? (
        <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mx-auto mt-8  max-w-[90%]">
          <CubeSlider
            pagination={false}
            timeDelay={6000}
            title={"Laminated Bow"}
            imgData={laminatedBowCategory}
            isDataArray={true}
            isAutoPlay={false}
          />
          <CubeSlider
            pagination={false}
            timeDelay={6000}
            title={"Fiber Flat Bow"}
            imgData={fiberFlatBowCategory}
            isDataArray={true}
            isAutoPlay={false}
          />
          <CubeSlider
            pagination={false}
            timeDelay={6000}
            title={"Arrows"}
            imgData={arrowsCategory}
            isDataArray={true}
            isAutoPlay={false}
          />
          <CubeSlider
            pagination={false}
            timeDelay={6000}
            title={"Accessories"}
            imgData={accessoriesCategory}
            isDataArray={true}
            isAutoPlay={false}
          />
        </section>
      ) : (
        <CubeSlider
          className={"mx-10"}
          pagination={false}
          timeDelay={6000}
          isDataArray={false}
          imgData={categoryImg}
          isAutoPlay={true}
        />
      )}
    </>
  );
};
export default ProductCategories;
