import { useState } from "react";
import HamburgerMenuPages from "../Fragments/HamburgerMenuPages";
import NavLink from "../Fragments/NavLink";
import HamburgerMenu from "../Common/HamburgerMenu";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  function toggleMenu() {
    setNav(!nav);
  }
  return (
    <>
      <header className="flex justify-between items-center bg-[#2b2b2b] lg:w-[60%] py-3 mx-auto sticky top-1 px-5 lg:px-8 rounded-md">
        <span className="text-primary font-medium italic lg:text-xl">
          InspireMe
        </span>
        <NavLink />
        <HamburgerMenu onClick={toggleMenu} />
      </header>
      <HamburgerMenuPages className={`${nav ? "block" : "hidden"}`} />
    </>
  );
}
