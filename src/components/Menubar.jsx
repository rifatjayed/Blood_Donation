import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import userImg from "../assets/img/user.png";

const Menubar = () => {
  const [active, setActive] = useState(""); // state to track the active menu item
  const [showMenu, setShowMenu] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (menuItem) => {
    setActive(menuItem); // update the active menu item
  };
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        setShowMenu(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <header className="bg-white text-black shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-semibold text-[#6A0B37]">DonorHub </div>

          {/* Hamburger Icon for Mobile */}
          {/* <div className="block md:hidden">
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
          </div> */}

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

          {/* Navigation Links */}
          <ul
            className={`md:flex md:space-x-4 font-poppins text-xl flex flex-col md:flex-row items-center justify-center ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <li className="p-2">
              <Link
                to="/"
                onClick={() => handleClick("home")}
                className={`${
                  active === "home"
                    ? "underline underline-offset-8  decoration-[#6A0B37]	decoration-4	"
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
                    ? "underline underline-offset-8 decoration-[#6A0B37]	decoration-4"
                    : ""
                }`}
              >
                About Us
              </Link>
            </li>
            <li className="p-2">
              <Link
                to="/BloodList"
                onClick={() => handleClick("bloodList")}
                className={`${
                  active === "bloodList"
                    ? "underline underline-offset-8 decoration-[#6A0B37]	decoration-4"
                    : ""
                }`}
              >
                Find Blood
              </Link>
            </li>

            {user ? (
              <div>
                <img
                  src={userImg}
                  // className="w-[30px] border border-indigo-600 rounded-full"
                  className={`${
                    active === "profile"
                      ? "w-[30px] border border-indigo-600 rounded-full"
                      : "w-[30px]"
                  }`}
                  alt=""
                  srcset=""
                  onClick={() => {
                    setShowMenu(!showMenu);
                    handleClick("profile");
                  }}
                />

                {/* Dropdown Menu */}
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2">
                    <Link
                      to="/register"
                      onClick={closeMenu}
                      className="px-4 py-2"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogOut}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 rounded-md"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div>
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
              </div>
            )}
          </ul>

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
                <div className="flex flex-col">
                  <Link to="/register" onClick={closeMenu} className="px-4">
                    Profile
                  </Link>
                  <button onClick={handleLogOut} className="text-red-600 pt-4">
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/Login">
                  <button className="border border-black px-6 py-2 rounded-lg">
                    Login
                  </button>
                </Link>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Menubar;
