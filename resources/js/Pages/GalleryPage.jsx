import AppLayout from "@/Layouts/AppLayout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function GalleryPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2, once: false });

  return (
    <AppLayout>
      <div className="flex flex-col w-[90%] mx-auto my-16">
        {/* Gallery Header */}
        <div className="flex w-full mx-auto justify-center items-center">
          <motion.h3
            className="text-slate-200 text-3xl md:text-5xl lg:text-6xl font-raleway tracking-widest"
            initial={{ x: "100vw" }}
            animate={inView ? { x: 0 } : {}}
            transition={{ duration: 1 }}
            ref={ref}
          >
            Gallery
          </motion.h3>
        </div>
        {/* Galery Content */}
        <div className="grid grid-cols-4 gap-4"></div>
      </div>
    </AppLayout>
  );
}
