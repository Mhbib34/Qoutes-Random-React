import Card from "../components/Fragments/Card";
import { useState, useEffect } from "react";
import Navbar from "../components/layouts/Navbar";

export default function Main() {
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
    <div className="relative px-2 lg:px-0">
      <Navbar />
      <div className="mt-20  flex gap-2 justify-center items-center flex-col lg:px-0 px-5 ">
        <Card data={data} onClick={fetchData} />
      </div>
    </div>
  );
}
