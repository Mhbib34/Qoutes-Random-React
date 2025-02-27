import Card from "../components/Fragments/Card";
import { useState, useEffect } from "react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

export default function Main() {
  const [data, setData] = useState(null);
  const [dataRandom, setDataRandom] = useState([]);

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
  const fetchDataRandom = async () => {
    try {
      const response = await fetch(
        "https://api.quotable.io/quotes/random?limit=30"
      );
      if (!response.ok) {
        throw new Error("fetch data failed!");
      }
      const data = await response.json();
      setDataRandom(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataRandom();
  }, []);

  if (!data) {
    return (
      <div className="w-full flex h-screen justify-center items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid border-r-transparent"></div>
      </div>
    );
  }

  return (
    <>
      <div className="relative px-3 lg:px-10">
        <Navbar />
        <div className="mt-14  flex gap-2 justify-center items-center flex-col   ">
          <Card data={data} onClick={fetchData} />
        </div>
        <div className="flex justify-between flex-wrap gap-2 mt-10 lg:px-10">
          {dataRandom.map((item) => (
            <div
              key={item._id}
              className="border mt-2 w-[48%] relative justify-between  gap-2 rounded-lg shadow-[0_6px_8px_rgba(52,116,134,0.4)] hover:shadow-[0_10px_15px_rgba(52,116,134,0.6)] transition-shadow duration-300 ease-in-out p-4 flex lg:w-[30%] flex-col items-center"
            >
              <span className="text-center italic">{item.content}</span>
              <span className="font-medium text-sm">
                ~{item.author.substring(0, 10)}~
              </span>

              <div className="absolute h-full w-full  top-0 left-0 rounded-lg bg-linear-to-b from-primary to-transparent opacity-0 hover:opacity-100 flex justify-center items-center gap-2 transition-opacity duration-300">
                <a
                  href={`https://x.com/intent/post?text=${encodeURIComponent(
                    item.content
                  )} ~ ${item.author}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-twitter text-white text-lg bg-[#1DA1F2] py-1.5 px-3 rounded-md"></i>
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    item.content
                  )} ~ ${item.author}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-whatsapp text-white text-lg bg-[#25D366] py-1.5 px-3 rounded-md"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer id="footer" />
    </>
  );
}
