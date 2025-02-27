export default function NavLink() {
  return (
    <nav className="">
      <ul className="lg:flex hidden gap-3 justify-center ">
        <a href="#">
          <li className="text-sm lg:text-[16px]   rounded-md hover:text-gray-400 transition-all duration-200 ease-in cursor-pointer text-white">
            Home
          </li>
        </a>
        <li className="text-sm lg:text-[16px]  rounded-md hover:text-gray-400 transition-all duration-200 ease-in cursor-pointer text-white">
          Favorites
        </li>
        <a href="#footer">
          <li className="text-sm lg:text-[16px]  rounded-md hover:text-gray-400 transition-all duration-200 ease-in cursor-pointer text-white">
            About
          </li>
        </a>
      </ul>
    </nav>
  );
}
