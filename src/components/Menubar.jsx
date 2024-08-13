const Menubar = () => {
  return (
    <div>
      {/* <nav className="bg-[#e42313]">

      </nav> */}

      <header className="bg-[#e42313] text-white">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-semibold">MyApp</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#login" className="hover:text-gray-400">
                Login
              </a>
            </li>
            <li>
              <a href="#register" className="hover:text-gray-400">
                Register
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Menubar;
