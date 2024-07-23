import { motion } from "framer-motion";

const GalleryItem = ({ gallery }) => {
  return (
    <motion.div
      key={gallery.id}
      className="gallery-item p-4 rounded"
      initial={{ scale: 0.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={`/storage/${gallery.image_name}`}
        alt={gallery.title}
        className="w-full h-auto"
      />
    </motion.div>
  );
};

export default GalleryItem;
