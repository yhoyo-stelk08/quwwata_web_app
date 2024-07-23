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

  const customTheme = {
    base: "flex flex-col gap-4",
    tablist: {
      base: "flex overflow-x-auto whitespace-nowrap scrollbar-hide",
      variant: {
        default: "border-b border-gray-200 dark:border-gray-700",
        underline: "-mb-px text-xl",
        pills: "space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
        fullWidth:
          "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400",
      },
      tabitem: {
        base: "flex items-center justify-center p-4 text-sm md:text-lg font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        variant: {
          default: {
            base: "",
            active: {
              on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
              off: "text-gray-500 hover:bg-gray-50 hover:text-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300",
            },
          },
          underline: {
            base: "",
            active: {
              on: "border-b-2 border-slate-200 text-slate-200",
              off: "border-b-2 border-transparent text-slate-500 hover:text-slate-100 hover:border-b-slate-200 dark:text-gray-400 dark:hover:text-gray-300",
            },
          },
          pills: {
            base: "",
            active: {
              on: "rounded-lg bg-cyan-600 text-white",
              off: "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white",
            },
          },
          fullWidth: {
            base: "w-full first:ml-0",
            active: {
              on: "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white",
              off: "bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white",
            },
          },
        },
        icon: "mr-2 h-5 w-5",
      },
    },
    tabitemcontainer: {
      base: "",
      variant: {
        default: "",
        underline: "",
        pills: "",
        fullWidth: "",
      },
    },
    tabpanel: "py-3",
  };

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
            theme={customTheme}
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
