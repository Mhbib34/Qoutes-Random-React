import { useState } from "react";
import Card from "../components/Fragments/Card";
import SocialMediaLinks from "../components/Common/SocialMediaLinks";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

export default function Favorites() {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return storedFavorites;
  });

  return (
    <>
      <div className="relative px-3 lg:px-10 ">
        <Navbar url="/" hamburgerHome="/" />
        <h1 className="text-center text-3xl mt-10 text-primary font-bold italic">
          Your Favorites Quotes
        </h1>
        <div className="flex justify-between flex-wrap gap-2 mt-10 lg:px-10 ">
          {favorites.map((item) => (
            <Card
              key={item._id}
              data={item}
              className="border mt-2 w-[48%] relative justify-between  gap-2 rounded-lg shadow-[0_6px_8px_rgba(52,116,134,0.4)] hover:shadow-[0_10px_15px_rgba(52,116,134,0.6)] transition-shadow duration-300 ease-in-out p-4 flex lg:w-[30%] flex-col items-center"
            >
              <div className="absolute h-full w-full  top-0 left-0 rounded-lg bg-linear-to-b from-primary to-transparent opacity-0 hover:opacity-100 flex justify-center items-center gap-2 transition-opacity duration-300">
                <SocialMediaLinks data={item} />
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer id="footer" url="#" />
    </>
  );
}
