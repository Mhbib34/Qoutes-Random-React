import SocialMediaIcon from "../Common/SocialMediaIcon";
export default function SocialMedia() {
  return (
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a href="#" className="hover:text-gray-400 transition">
        <SocialMediaIcon className="bxl-github hover:text-black" />
      </a>
      <a href="#" className="hover:text-gray-400 transition">
        <SocialMediaIcon className="bx-envelope hover:text-red" />
      </a>
      <a href="#" className="hover:text-gray-400 transition">
        <SocialMediaIcon className="bxl-whatsapp hover:text-[#25D366] " />
      </a>
    </div>
  );
}
