import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Gallery = ({ galleries }) => {
  return (
    <>
      {galleries.map((gallery) => {
        const imageRef = useRef(null);
        const imageInView = useInView(imageRef, { once: false });

        return (
          <motion.div
            key={gallery.id}
            className="gallery-item p-4 rounded"
            ref={imageRef}
            initial={{ opacity: 0 }}
            animate={imageInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <img
              src={`/storage/${gallery.image_name}`}
              alt={gallery.title}
              className="w-full h-auto"
            />
          </motion.div>
        );
      })}
    </>
  );
};
export default Gallery;
