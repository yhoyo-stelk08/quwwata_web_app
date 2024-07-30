import TabTheme from "@/Components/common/TabTheme";
import Gallery from "@/Components/gallery/Gallery";
import AppLayout from "@/Layouts/AppLayout";
import axios from "axios";
import { Tabs } from "flowbite-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function GalleryPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [allGalleries, setAllGalleries] = useState([]);
  const [filteredGalleries, setFilteredGalleries] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        // fetching gallery data from backend
        const response = await axios.get("/all-gallery-data");
        setAllGalleries(response.data);
        setFilteredGalleries(response.data); // Initialize with all galleries
      } catch (error) {
        console.error("There was an error when fetching gallery data: ", error);
      }
    };
    fetchGalleryData();
  }, []);

  useEffect(() => {
    let category = "";
    switch (activeTab) {
      case 1:
        category = "laminated bow";
        break;
      case 2:
        category = "flat bow";
        break;
      case 3:
        category = "arrows";
        break;
      case 4:
        category = "accessories";
        break;
      default:
        category = "";
        break;
    }

    if (category) {
      setFilteredGalleries(
        allGalleries.filter((gallery) => gallery.category === category)
      );
    } else {
      setFilteredGalleries(allGalleries);
    }
  }, [activeTab, allGalleries]);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

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
        {/* Gallery Tab */}
        <div className="gap-2 mt-10 overflow-x-auto whitespace-nowrap">
          <Tabs
            aria-label="Tabs with underline"
            variant="underline"
            className="gap-4 transition-all duration-300 justify-start md:justify-center"
            theme={TabTheme}
            onActiveTabChange={handleTabChange}
          >
            <Tabs.Item title="All" className="inline-block">
              {/* Gallery Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                <Gallery galleries={filteredGalleries} />
              </div>
            </Tabs.Item>
            <Tabs.Item className="inline-block" title="Laminated Bow">
              {/* Gallery Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                <Gallery galleries={filteredGalleries} />
              </div>
            </Tabs.Item>
            <Tabs.Item className="inline-block" title="Fiber Flat Bow">
              {/* Gallery Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                <Gallery galleries={filteredGalleries} />
              </div>
            </Tabs.Item>
            <Tabs.Item className="inline-block" title="Arrow">
              {/* Gallery Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                <Gallery galleries={filteredGalleries} />
              </div>
            </Tabs.Item>
            <Tabs.Item className="inline-block" title="Accessories">
              {/* Gallery Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                <Gallery galleries={filteredGalleries} />
              </div>
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    </AppLayout>
  );
}
