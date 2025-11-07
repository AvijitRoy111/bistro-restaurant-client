import { useEffect, useState } from "react";
import axios from "axios";

const ChefRecomended = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_api}/menuItems`);
        const items = res.data.data.filter((item) => item.category === "popular");
        setPopular(items.slice(0, 3));
      } catch (err) {
        console.error("Error fetching popular:", err);
      }
    };
    fetchPopular();
  }, []);

  return (
    <div className="mb-28 mx-4 md:mx-44">
      <div className="flex flex-col items-center gap-3 pb-10">
        <h1 className="text-xl font-bold text-center text-[#D99904]">
          ---From 11:00am to 10:00pm---
        </h1>
        <hr className="border-2 border-gray-300 w-80" />
        <h2 className="text-3xl font-bold text-center text-[#151515]">
          CHEF RECOMMENDS
        </h2>
        <hr className="border-2 border-gray-300 w-80" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {popular.map((item) => (
          <div
            key={item._id}
            className="border rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col items-center bg-white"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-auto h-64 md:w-96 md:h-44 object-cover rounded-xl"
              />
              <span className="absolute top-2 right-3 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded border-b-4 border-b-amber-800">
                ${item.price}
              </span>
            </div>
            <div className="text-center mt-6 mb-4 px-2">
              <h3 className="text-2xl font-bold text-[#151515]">{item.name}</h3>
              <p className="text-base text-gray-600 mt-3 leading-relaxed">
                {item.recipe || item.description}
              </p>
              <button className="mt-6 px-5 py-2 bg-gray-200 text-orange-600 font-medium rounded hover:bg-gray-300 transition border-b-4 border-b-orange-900">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefRecomended;
