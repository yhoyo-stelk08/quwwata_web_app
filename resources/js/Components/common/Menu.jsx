import { Link } from "@inertiajs/react";
import { Navbar } from "flowbite-react";

const Menu = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Quwwata Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Quwwata Archery
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Gallery</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Menu;
