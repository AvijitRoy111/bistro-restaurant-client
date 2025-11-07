import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OurMenuSection = () => {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_api}/menuItems`);
        // Group by category and take one item per category
        const grouped = Object.values(
          res.data.data.reduce((acc, item) => {
            if (!acc[item.category]) acc[item.category] = item;
            return acc;
          }, {})
        ).slice(0, 6);
        setMenuItems(grouped);
      } catch (err) {
        console.error("Error fetching menu:", err);
      }
    };
    fetchMenu();
  }, []);

  return (
    <div className="mx-4 md:mx-20 mb-28 text-center">
      <div className="flex flex-col items-center gap-3 pb-10">
        <h1 className="text-xl font-bold text-center text-[#D99904]">
          ---Check it out---
        </h1>
        <hr className="border-2 border-gray-300 w-80" />
        <h2 className="text-3xl font-bold text-center text-[#151515]">
          FROM OUR MENU
        </h2>
        <hr className="border-2 border-gray-300 w-80" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto text-left">
        {menuItems.map((item) => (
          <div
            key={item._id}
            onClick={() =>
              navigate(`/shop/${item.category.toLowerCase()}?highlight=${item._id}`)
            }
            className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3 cursor-pointer hover:bg-gray-50"
          >
            <div className="flex items-center gap-4">
              <img
                className="w-16 h-16 object-cover rounded-[0px_200px_200px_200px]"
                src={item.image}
                alt={item.name}
                style={{
                  borderRadius: "0px 200px 200px 200px",
                }}
              />
              <div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  {item.recipe || item.description}
                </p>
              </div>
            </div>
            <span className="text-yellow-500 font-semibold">
              ${item.price}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button
          onClick={() => navigate("/shop")}
          className="bg-gray-200 rounded-md text-gray-800 font-medium px-6 py-3 hover:bg-gray-300 border-b-4 border-b-amber-700 hover:border-b-amber-950 transition"
        >
          VIEW FULL MENU
        </button>
      </div>
    </div>
  );
};

export default OurMenuSection;
