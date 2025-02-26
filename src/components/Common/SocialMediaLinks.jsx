export default function SocialMediaLinks({ data }) {
  return (
    <>
      <a
        href={`https://x.com/intent/post?text=${encodeURIComponent(
          data[0].content
        )} - ${data[0].author}`}
        target="_blank"
      >
        <i className="bx bxl-twitter text-white text-lg bg-[#1DA1F2] py-1.5 px-3 rounded-md"></i>
      </a>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(data[0].content)} - ${
          data[0].author
        }`}
        target="_blank"
      >
        <i className="bx bxl-whatsapp text-white text-lg bg-[#25D366] py-1.5 px-3 rounded-md"></i>
      </a>
    </>
  );
}
