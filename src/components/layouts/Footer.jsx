import CopyRight from "../Fragments/CopyRight";
import SocialMedia from "../Fragments/SocialMedia";

export default function Footer({ id, url }) {
  return (
    <footer className="bg-[#2b2b2b] text-white py-6 mt-10" id={id}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-primary font-medium italic text-lg lg:text-xl">
            InspireMe
          </span>
          <CopyRight />
          <SocialMedia />
        </div>
        <nav className="flex  gap-2 flex-col  mt-4 md:mt-4 text-center justify-center lg:items-start ">
          <a href="#" className="hover:text-gray-400 transition">
            Home
          </a>
          <a href={url} className="hover:text-gray-400 transition">
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
