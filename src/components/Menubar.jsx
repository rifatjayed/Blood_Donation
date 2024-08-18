// import { Link } from "react-router-dom";

// const Menubar = () => {
//   return (
//     <div>
//       {/* <nav className="bg-[#e42313]">

//       </nav> */}

//       <header className="bg-white text-[#c6414c]">
//         <nav className="container mx-auto flex justify-between items-center p-4">
//           <div className="text-2xl font-semibold">MyApp</div>
//           <ul className="flex space-x-4 font-serif">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="AboutUs">About Us</Link>
//             </li>
//             <li>
//               <Link to="Login">Login</Link>
//             </li>
//             <li>
//               <Link to="Register">Register</Link>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     </div>
//   );
// };

import { useState } from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="bg-white text-[#c6414c] shadow-md">
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
            className={`md:flex md:space-x-4 font-serif ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <li className="p-2">
              <Link to="/" className="hover:text-[#e42313]">
                Home
              </Link>
            </li>
            <li className="p-2">
              <Link to="/AboutUs" className="hover:text-[#e42313]">
                About Us
              </Link>
            </li>
            <li className="p-2">
              <Link to="/Login" className="hover:text-[#e42313]">
                Login
              </Link>
            </li>
            <li className="p-2">
              <Link to="/Register" className="hover:text-[#e42313]">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Menubar;
