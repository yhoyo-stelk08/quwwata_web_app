import Cart from "@/Components/Cart";
import useResponsiveWidth from "@/hooks/UseResponsiveWidth";
import { Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaBars,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { useCart } from "react-use-cart";
import logoImg from "../../../images/logo quwwata.png";
import MegaMenu from "./MegaMenu";

const DesktopMenu = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
  const timeoutIdRef = useRef(null);
  const cartRef = useRef(null);
  const cartButtonRef = useRef(null);

  const openMegaMenu = () => setMegaMenuOpen(true);
  const closeMegaMenu = () => setMegaMenuOpen(false);

  const { totalItems } = useCart(); // Get total items from useCart

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
    }, 300);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleCartDropdown = () => {
    setCartDropdownOpen(!cartDropdownOpen);
  };

  const width = useResponsiveWidth();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        cartButtonRef.current &&
        !cartButtonRef.current.contains(event.target)
      ) {
        setCartDropdownOpen(false);
      }
    };

    if (cartDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartDropdownOpen]);

  return (
    <nav className="bg-gradient-to-r from-slate-500 to-slate-950 relative w-full xs:w-auto">
      <div
        className={`flex justify-between items-center mx-auto max-w-screen-xl p-4 ${
          mobileMenuOpen ? "flex-wrap" : ""
        }`}
      >
        <div className="flex items-center justify-between w-full md:w-1/2 space-x-4 rtl:space-x-reverse">
          <Link
            href={route("/")}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logoImg} className="h-14" alt="Quwwata Logo" />
            <span className="self-center hidden lg:block text-sm font-bold font-pacifico whitespace-nowrap text-slate-200">
              Traditional Archery Supply
            </span>
          </Link>
          <div className="flex items-center md:hidden space-x-4">
            <Link className="text-slate-200">
              <FaUser className="h-5 w-5" />
            </Link>
            <button
              ref={cartButtonRef}
              type="button"
              aria-controls="cart-dropdown"
              aria-expanded={cartDropdownOpen ? "true" : "false"}
              onClick={toggleCartDropdown}
              className="relative z-10"
            >
              <FaShoppingCart color="white" className="w-5 h-5" />
              {totalItems > 0 ? (
                <span className="absolute -bottom-2 -right-4 inline-flex items-center justify-center px-2 py-1 text-[10px] font-medium leading-none text-red-100 bg-red-600 rounded-full">
                  {totalItems}
                </span>
              ) : (
                <span className="absolute -bottom-2 -right-4 inline-flex items-center justify-center px-2 py-1 text-[10px] font-medium leading-none text-red-100 bg-red-600 rounded-full">
                  0
                </span>
              )}
            </button>
            <button
              data-collapse-toggle="mega-menu-full"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu-full"
              aria-expanded={mobileMenuOpen ? "true" : "false"}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div
          id="mega-menu-full"
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } flex-grow items-center justify-between w-full md:w-auto md:flex md:order-1`}
        >
          <ul className="flex flex-col mt-4 font-medium md:items-center md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link
                href={route("/")}
                className="block menu-link"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            {width >= 768 ? (
              <li
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  className="flex items-center justify-between w-full py-2 px-3 md:w-auto font-medium menu-link"
                  href={route("products")}
                >
                  Product{" "}
                  {megaMenuOpen ? (
                    <FaAngleUp className="ml-1" />
                  ) : (
                    <FaAngleDown className="ml-1" />
                  )}
                </Link>
                <MegaMenu isOpen={megaMenuOpen} />
              </li>
            ) : (
              <li>
                <button
                  id="product-dropdown-button"
                  data-dropdown-toggle="product-dropdown"
                  className="flex items-center justify-between w-full py-2 px-3 md:w-auto font-medium menu-link"
                  onClick={toggleMobileDropdown}
                >
                  Product{" "}
                  {mobileDropdownOpen ? (
                    <FaAngleUp className="ml-1" />
                  ) : (
                    <FaAngleDown className="ml-1" />
                  )}
                </button>
                {mobileDropdownOpen && (
                  <ul
                    id="product-dropdown"
                    className="flex flex-col mt-2 space-y-2 bg-slate-400 rounded-md p-4"
                  >
                    <li>
                      <Link
                        href={route("products-category", {
                          category: "laminated-bow",
                        })}
                        className="block menu-link"
                      >
                        Laminated Bow
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={route("products-category", {
                          category: "flat-bow",
                        })}
                        className="block menu-link"
                      >
                        Fiber Flat Bow
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={route("products-category", {
                          category: "arrows",
                        })}
                        className="block menu-link"
                      >
                        Arrow
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={route("products-category", {
                          category: "bow-accessories",
                        })}
                        className="block menu-link"
                      >
                        Accessories
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            )}

            <li>
              <Link href={route("gallery")} className="block menu-link">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="#" className="block menu-link text-nowrap">
                About Me
              </Link>
            </li>
            <li>
              <Link href={route("contact")} className="block menu-link mr-8">
                Contact
              </Link>
            </li>
          </ul>
          <div className="relative items-center hidden md:flex space-x-4">
            <Link className="text-slate-200">
              <FaUser className="h-5 w-5" />
            </Link>
            <div className="relative flex items-center">
              <button
                ref={cartButtonRef}
                type="button"
                aria-controls="cart-dropdown"
                aria-expanded={cartDropdownOpen ? "true" : "false"}
                onClick={toggleCartDropdown}
                className="relative z-10"
              >
                <FaShoppingCart color="white" className="w-5 h-5" />
                {totalItems > 0 ? (
                  <span className="absolute -bottom-2 -right-4 inline-flex items-center justify-center px-2 py-1 text-[10px] font-medium leading-none text-red-100 bg-red-600 rounded-full">
                    {totalItems}
                  </span>
                ) : (
                  <span className="absolute -bottom-2 -right-4 inline-flex items-center justify-center px-2 py-1 text-[10px] font-medium leading-none text-red-100 bg-red-600 rounded-full">
                    0
                  </span>
                )}
              </button>
              {cartDropdownOpen && (
                <div
                  ref={cartRef}
                  className="absolute right-0 top-0 mt-14 w-[500px] bg-white border border-gray-300 rounded-lg shadow-lg z-50"
                  id="cart-dropdown"
                >
                  <Cart />
                </div>
              )}
            </div>
          </div>
        </div>
        {cartDropdownOpen && width < 768 && (
          <div
            ref={cartRef}
            className="absolute right-0 top-14 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50 md:hidden"
            id="cart-dropdown"
          >
            <Cart proceedToCheckout={false} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default DesktopMenu;
