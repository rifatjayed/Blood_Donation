import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => setIsOpen(false))
      .catch((error) => console.log(error));
  };

  return (
    <header className="bg-white text-black shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-semibold text-[#6A0B37]">DonorHub</div>

        {/* Hamburger Icon for Mobile */}
        <div className="block md:hidden">
          <button onClick={() => setIsOpen(true)} className="text-[#c6414c]">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-4 text-xl">
          <li>
            <Link to="/" className="hover:text-[#6A0B37]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="hover:text-[#6A0B37]">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/BloodList" className="hover:text-[#6A0B37]">
              Find Blood
            </Link>
          </li>
          {user ? (
            <button onClick={handleLogOut} className="text-red-600">
              Logout
            </button>
          ) : (
            <Link to="/Login">
              <button className="border border-black px-4 py-2 rounded-lg">
                Login
              </button>
            </Link>
          )}
        </ul>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-3xl text-red-600"
        >
          &times;
        </button>

        {/* Menu Links */}
        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-2xl">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/BloodList" onClick={() => setIsOpen(false)}>
              Find Blood
            </Link>
          </li>
          {user ? (
            <button onClick={handleLogOut} className="text-red-600">
              Logout
            </button>
          ) : (
            <Link to="/Login">
              <button className="border border-black px-6 py-2 rounded-lg">
                Login
              </button>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Menubar;
