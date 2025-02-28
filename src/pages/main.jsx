import Card from "../components/Fragments/Card";
import { useState, useEffect } from "react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import SocialMediaLinks from "../components/Fragments/SocialMediaLinks";
import RepeatButton from "../components/Common/RepeatButton";
import Swal from "sweetalert2";
import LoadingAnimations from "../components/Fragments/LoadingAnimations";

export default function Main() {
  const [data, setData] = useState(null);
  const [dataRandom, setDataRandom] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return storedFavorites;
  });

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.quotable.io/quotes/random");
      if (!response.ok) throw new Error("fetch data failed!");
      const data = await response.json();
      setData(data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDataRandom = async () => {
    try {
      const response = await fetch(
        "https://api.quotable.io/quotes/random?limit=30"
      );
      if (!response.ok) throw new Error("fetch data failed!");
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

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function handleAddFavorites(item) {
    setFavorites((prev) => {
      if (!prev.some((fav) => fav._id === item._id)) {
        return [...prev, item];
      }
      return prev;
    });

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      iconColor: "#347486",
      title: "Quotes Added Successfully",
    });
  }

  if (!data) {
    return <LoadingAnimations />;
  }

  return (
    <>
      <div className="relative px-3 lg:px-10">
        <Navbar
          Favorites="Favorites"
          url="#"
          hamburgerHome="#"
          classHamburger="hidden"
        />
        <div className="mt-14  flex gap-2 justify-center items-center flex-col   ">
          <Card
            text="Quotes Of The Day"
            data={data}
            className="border justify-between gap-2 rounded-lg shadow-[0_6px_8px_rgba(52,116,134,0.4)] hover:shadow-[0_10px_15px_rgba(52,116,134,0.6)] transition-shadow duration-300 ease-in-out p-4 flex lg:w-[50%] flex-col items-center"
          />
          <div className="lg:w-[50%] flex gap-2 items-center justify-end mt-2">
            <SocialMediaLinks data={data} />
            <RepeatButton onClick={fetchData} />
            <div onClick={() => handleAddFavorites(data)}>
              <i className="bx bxs-bookmark-star text-white text-lg bg-primary py-1.5 px-3 rounded-md cursor-pointer"></i>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-wrap gap-2 mt-10 lg:px-10">
          {dataRandom.map((item) => (
            <Card
              key={item._id}
              data={item}
              className="border mt-2 w-[48%] relative justify-between  gap-2 rounded-lg shadow-[0_6px_8px_rgba(52,116,134,0.4)] hover:shadow-[0_10px_15px_rgba(52,116,134,0.6)] transition-shadow duration-300 ease-in-out p-4 flex lg:w-[30%] flex-col items-center"
            >
              <div className="absolute h-full w-full  top-0 left-0 rounded-lg bg-linear-to-b from-primary to-transparent opacity-0 hover:opacity-100 flex justify-center items-center gap-2 transition-opacity duration-300">
                <SocialMediaLinks data={item} />
                <div onClick={() => handleAddFavorites(item)}>
                  <i className="bx bxs-bookmark-star text-white text-lg bg-primary py-1.5 px-3 rounded-md cursor-pointer"></i>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer id="footer" url="/favorites" />
    </>
  );
}
