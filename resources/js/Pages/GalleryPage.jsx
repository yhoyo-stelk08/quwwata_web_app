import Gallery from "@/Components/gallery/Gallery";
import AppLayout from "@/Layouts/AppLayout";
import axios from "axios";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function GalleryPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    const galleryData = async () => {
      try {
        const response = await axios.get("/all-gallery-data");
        setGalleries(response.data);
      } catch (error) {
        console.error("There was error when fetching gallery data: ", error);
      }
    };
    galleryData();
  }, []);

  return (
    <AppLayout>
      <div className="flex flex-col w-[90%] mx-auto my-16">
        {/* Gallery Header */}
        <div className="flex w-full mx-auto justify-center items-center">
          <motion.h3
            className="text-slate-200 text-3xl md:text-5xl lg:text-6xl font-raleway tracking-widest"
            initial={{ x: "50vw" }}
            animate={inView ? { x: 0 } : {}}
            transition={{ duration: 1 }}
            ref={ref}
          >
            Gallery
          </motion.h3>
        </div>
        {/* Gallery Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <Gallery galleries={galleries} />
        </div>
      </div>
    </AppLayout>
  );
}
