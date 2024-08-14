import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <div>
      {/* <nav className="bg-[#e42313]">

      </nav> */}

      <header className="bg-white text-[#c6414c]">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-semibold">MyApp</div>
          <ul className="flex space-x-4 font-serif">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <Link to="Login">Login</Link>
            </li>
            <li>
              <Link to="Register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Menubar;
