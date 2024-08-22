import { useState } from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  const [active, setActive] = useState(""); // state to track the active menu item

  const handleClick = (menuItem) => {
    setActive(menuItem); // update the active menu item
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="bg-white text-black shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-semibold">MyApp</div>

          {/* Hamburger Icon for Mobile */}
          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#c6414c] focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            className={`md:flex md:space-x-4 font-poppins text-xl flex flex-col items-center justify-center ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <li className="p-2">
              <Link
                to="/"
                onClick={() => handleClick("home")}
                className={`${
                  active === "home"
                    ? "underline underline-offset-8 decoration-[#4B4949]	decoration-4	"
                    : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="p-2">
              <Link
                to="/AboutUs"
                onClick={() => handleClick("aboutUs")}
                className={`${
                  active === "aboutUs"
                    ? "underline underline-offset-8 decoration-[#4B4949]	decoration-4"
                    : ""
                }`}
              >
                About Us
              </Link>
            </li>
            <li className="p-2">
              <Link
                to="/Register"
                onClick={() => handleClick("register")}
                className={`${
                  active === "register"
                    ? "underline underline-offset-8 decoration-[#4B4949]	decoration-4"
                    : ""
                }`}
              >
                Register
              </Link>
            </li>
            <Link to="/Login">
              <button
                onClick={() => handleClick("login")}
                className={`border border-black rounded-lg md:py-2 px-4 md:px-16${
                  active === "login" ? " bg-[#6A0B37] text-white" : ""
                }`}
              >
                <li className="p-2">Login</li>
              </button>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Menubar;
