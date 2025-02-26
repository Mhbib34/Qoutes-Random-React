export default function NavLink() {
  return (
    <nav className="">
      <ul className="lg:flex hidden gap-3 justify-center ">
        <li className="text-sm lg:text-[16px]   rounded-md hover:opacity-85 transition-all duration-200 ease-in cursor-pointer text-white">
          Home
        </li>
        <li className="text-sm lg:text-[16px]  rounded-md hover:opacity-85 transition-all duration-200 ease-in cursor-pointer text-white">
          Favorites
        </li>
        <li className="text-sm lg:text-[16px]  rounded-md hover:opacity-85 transition-all duration-200 ease-in cursor-pointer text-white">
          About us
        </li>
      </ul>
    </nav>
  );
}
