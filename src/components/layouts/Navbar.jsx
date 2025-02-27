import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className=" sticky top-12 left-0 w-full bg-[#2b2b2b] shadow-lg "
          >
            <HamburgerMenuPages className={`${nav ? "block" : "hidden"}`} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
