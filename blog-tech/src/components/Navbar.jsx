import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import Search from "./Search";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled ? "fixed top-0 left-0 right-0 bg-white shadow-md" : ""
      }`}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between py-4 px-4 border-b">
        <Link to="/" className="uppercase font-bold text-purple-700 text-lg">
          LOGO
        </Link>
        <Search />
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-purple-600 font-semibold border-b-2 border-purple-600 pb-1"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-500 font-semibold hover:text-purple-500"
          >
            About
          </Link>
          <Link
            to="/press"
            className="text-gray-500 font-semibold hover:text-purple-500"
          >
            Press
          </Link>
          <Link
            to="/contact"
            className="text-gray-500 font-semibold hover:text-purple-500"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-gray-500 font-semibold hover:text-purple-500"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-gray-700 font-semibold px-3 py-1 rounded hover:bg-purple-50"
          >
            Register
          </Link>
        </div>

        <div className="md:hidden">
          <button className="text-gray-700">
            <FaBars size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
