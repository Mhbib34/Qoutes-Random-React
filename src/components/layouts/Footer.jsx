export default function Footer({ id }) {
  return (
    <footer className="bg-[#2b2b2b] text-white py-6 mt-10" id={id}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-primary font-medium italic text-lg lg:text-xl">
            InspireMe
          </span>

          <div className="text-center text-sm text-gray-400 ">
            © {new Date().getFullYear()} InspireMe. All rights reserved.
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition">
              <i className="bx bxl-github text-white text-3xl transition-all duration-200 ease-in hover:text-black  "></i>
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <i className="bx bx-envelope text-white text-3xl transition-all duration-200 ease-in hover:text-red-500"></i>
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <i className="bx bxl-whatsapp text-white text-3xl transition-all duration-200 ease-in hover:text-[#25D366]"></i>
            </a>
          </div>
        </div>
        <nav className="flex  gap-2 flex-col space-x-6 mt-4 md:mt-4">
          <a href="#" className="hover:text-gray-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            Favorites
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
