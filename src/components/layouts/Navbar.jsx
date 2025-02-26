export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-[#2b2b2b] lg:w-[60%] py-3 mx-auto sticky top-1 px-5 lg:px-8 rounded-md">
      <span className="text-primary font-medium italic lg:text-xl">
        InspireMe
      </span>
      <nav className="">
        <ul className="flex gap-3 justify-center">
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
    </header>
  );
}
