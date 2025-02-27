import { Link } from "react-router-dom";

export default function NavLink({ Favorites, url }) {
  return (
    <nav className="">
      <ul className="lg:flex hidden gap-3 justify-center ">
        <a href={url}>
          <li className="text-sm lg:text-[16px]   rounded-md hover:text-gray-400 transition-all duration-200 ease-in cursor-pointer text-white">
            Home
          </li>
        </a>
        <Link to="/favorites">
          <li className="text-sm lg:text-[16px]  rounded-md hover:text-gray-400 transition-all duration-200 ease-in cursor-pointer text-white">
            {Favorites}
          </li>
        </Link>
        <a href="#footer">
          <li className="text-sm lg:text-[16px]  rounded-md hover:text-gray-400 transition-all duration-200 ease-in cursor-pointer text-white">
            About
          </li>
        </a>
      </ul>
    </nav>
  );
}
