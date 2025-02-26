export default function Card({ data, onClick }) {
  return (
    <>
      <div className="border justify-between gap-2 rounded-lg shadow-[0_6px_8px_rgba(52,116,134,0.4)] hover:shadow-[0_10px_15px_rgba(52,116,134,0.6)] transition-shadow duration-300 ease-in-out p-4 flex lg:w-[50%] flex-col items-center">
        <span className="font-bold text-2xl">Quotes of the day</span>
        <span className="text-center italic">{data[0].content}</span>
        <span className="font-medium">~{data[0].author}~</span>
      </div>
      <div className="lg:w-[50%] flex gap-2 items-center justify-end mt-2">
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
        <i
          className="bx bx-repeat py-1.5 text-lg text-white cursor-pointer rounded-md px-3 bg-primary"
          onClick={onClick}
        ></i>
      </div>
    </>
  );
}
