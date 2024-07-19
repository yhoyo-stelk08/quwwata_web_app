import { useRef, useState } from "react";
import { FaAngleDown, FaAngleUp, FaBars } from "react-icons/fa";
import logoImg from "../../../images/logo quwwata.png";
import MegaMenu from "./MegaMenu";

const DesktopMenu = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const timeoutIdRef = useRef(null);

  const openMegaMenu = () => setMegaMenuOpen(true);
  const closeMegaMenu = () => setMegaMenuOpen(false);

  const handleMouseEnter = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
    openMegaMenu();
  };

  const handleMouseLeave = () => {
    timeoutIdRef.current = setTimeout(() => {
      closeMegaMenu();
    }, 300); // Adjust timeout duration as needed
  };

  const handleMegaMenuMouseEnter = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
  };

  const handleMegaMenuMouseLeave = () => {
    closeMegaMenu();
  };

  return (
    <nav className="bg-gradient-to-r from-slate-500 to-slate-950 relative w-full xs:w-auto">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logoImg} className="h-14" alt="Flowbite Logo" />
          <span className="self-center text-sm font-bold font-pacifico whitespace-nowrap text-slate-200">
            Traditional Archery Supply
          </span>
        </a>
        <button
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded={megaMenuOpen ? "true" : "false"}
          onClick={() => setMegaMenuOpen(!megaMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <FaBars className="h-6 w-6" />
        </button>
        <div
          id="mega-menu-full"
          className={`${
            megaMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <a href="#" className="block menu-link" aria-current="page">
                Home
              </a>
            </li>
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className="flex items-center justify-between w-full py-2 px-3 md:w-auto font-medium menu-link"
              >
                Product{" "}
                {megaMenuOpen ? (
                  <FaAngleUp className="ml-1" />
                ) : (
                  <FaAngleDown className="ml-1" />
                )}
              </button>
              <MegaMenu isOpen={megaMenuOpen} />
            </li>
            <li>
              <a href="#" className="block menu-link">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="block menu-link">
                About Me
              </a>
            </li>
            <li>
              <a href="#" className="block menu-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DesktopMenu;
