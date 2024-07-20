import { useEffect, useState } from "react";
import MegaMenuItem from "./MegaMenuItem";

const MegaMenu = ({ isOpen }) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    let timeout;
    if (isOpen) {
      setVisible(true);
    } else {
      timeout = setTimeout(() => setVisible(false), 500); // Duration of fade-slide-out animation
    }
    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <div
      className={`relative transition-all duration-500 z-10  ${
        isOpen ? "animate-fade-slide-in-from-bottom" : "animate-fade-slide-out"
      } ${!visible ? "hidden" : ""}`}
    >
      {/* pointer */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-7 w-4 h-4 bg-gray-50 dark:bg-gray-800 rotate-45 border border-gray-200 dark:border-gray-600 opacity-90"></div>
      {/* mega menu content */}
      <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-2 md:px-6 bg-gradient-to-t from-slate-500 to-white dark:bg-gray-800 border-gray-200 shadow-sm border-y dark:border-gray-600 absolute left-1/2 transform -translate-x-1/2 w-full sm:w-[400px] md:w-[600px] lg:w-[600px] xl:w-[800px] 2xl:w-[800px] mt-9 rounded-2xl opacity-100">
        <ul aria-labelledby="mega-menu-full-dropdown-button" className="mx-2">
          <MegaMenuItem
            title={"Turkish Laminated Bow"}
            description={
              "New laminated bow made with new materials, more flexible than the E-fiberglass. Very accurate and smooth to draw"
            }
          />
          <MegaMenuItem
            title={"Tartar Laminated Bow"}
            description={
              "New laminated bow made with new materials, more flexible than the E-fiberglass. Very accurate and smooth to draw"
            }
          />
          <MegaMenuItem
            title={"Cremean Laminated Bow"}
            description={
              "New laminated bow made with new materials, more flexible than the E-fiberglass. Very accurate and smooth to draw"
            }
          />
        </ul>
        <ul className="mx-2">
          <MegaMenuItem
            title={"Turkish Flat Fiber Bow"}
            description={
              "New flat fiber bow made with new materials, more flexible than the E-fiberglass. Very accurate and smooth to draw"
            }
          />
          <MegaMenuItem
            title={"Bow String"}
            description={
              "Custom Strings, we strive to provide top quality custom options for all your traditional longbow, compound, and recurve needs"
            }
          />
          <MegaMenuItem
            title={"Arrow"}
            description={
              "A very straight bamboo with a large leaf. Makes a dense screen and is a slow spreading bamboo that prefers shady locations"
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default MegaMenu;
