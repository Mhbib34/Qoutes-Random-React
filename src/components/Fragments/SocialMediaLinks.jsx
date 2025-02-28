import SocialMediaIcon from "../Common/SocialMediaIcon";

export default function SocialMediaLinks({ data }) {
  return (
    <>
      <a
        href={`https://x.com/intent/post?text=${encodeURIComponent(
          data.content
        )} ~ ${data.author}`}
        target="_blank"
      >
        <SocialMediaIcon className="bxl-twitter bg-[#1DA1F2] py-1.5 px-3 rounded-md text-lg " />
      </a>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(data.content)} ~ ${
          data.author
        }`}
        target="_blank"
      >
        <SocialMediaIcon className="bxl-whatsapp bg-[#25D366] py-1.5 px-3 rounded-md text-lg " />
      </a>
    </>
  );
}
