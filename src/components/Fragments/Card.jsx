import { useState, useEffect } from "react";
export default function Card() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.quotable.io/quotes/random");
      if (!response.ok) {
        throw new Error("fetch data failed!");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="w-full flex h-screen justify-center items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid border-r-transparent"></div>
      </div>
    );
  }

  return (
    <div className="h-screen flex justify-center items-center flex-col lg:px-0 px-5 ">
      <div className="border justify-between gap-2 rounded-lg shadow-[0_6px_8px_rgba(52,116,134,0.4)] hover:shadow-[0_10px_15px_rgba(52,116,134,0.6)] transition-shadow duration-300 ease-in-out p-4 flex lg:w-[50%] flex-col items-center">
        <span className="font-bold text-2xl">Qoutes of the day</span>
        <span className="text-center">{data[0].content}</span>
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
          onClick={fetchData}
        ></i>
      </div>
    </div>
  );
}
