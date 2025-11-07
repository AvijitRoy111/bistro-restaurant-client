import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import banner1 from "../../assets/menu/banner3.jpg";
import banner from "../../assets/home/chef-service.jpg";
import image from "../../assets/home/Rectangle 11.png";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_api}/menuItems`);
        setMenuItems(res.data.data);
      } catch (err) {
        console.error("Error fetching menu:", err);
      }
    };
    fetchData();
  }, []);

  const title = "OUR MENU";
  const subtitle = "Would you like to try a dish";

  // Group items by category dynamically
  const grouped = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  // 🟡 Handle navigate with category + highlight ID
  const handleNavigate = (category, id) => {
    navigate(`/shop/${category.toLowerCase()}?highlight=${id}`);
  };

  return (
    <div className="mb-0 md:mb-24 lg:mb-32">
      {/* Top Banner */}
      <div className="relative w-full h-[30vh] md:h-[80vh] overflow-hidden">
        <img src={banner1} alt="banner" className="w-full h-full object-cover" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        bg-black/40 rounded-2xl px-8 py-10 text-center text-white
                        max-w-3xl w-[90%] space-y-4 backdrop-blur-sm"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-3">{title}</h2>
          <p className="text-sm sm:text-lg opacity-90">{subtitle}</p>
        </div>
      </div>

      {/* text section */}
      <div className="flex flex-col items-center justify-center space-y-3 mt-16">
        <p className="text-yellow-500 italic mb-2">---Check it out---</p>
        <hr className="border-2 border-gray-300 w-64 md:w-80" />
        <h2 className="text-2xl font-bold tracking-wide">TODAY'S OFFERED</h2>
        <hr className="border-2 border-gray-300 w-64 md:w-80" />
      </div>

      {/* Dynamic category sections */}
      {Object.keys(grouped).map((category) => (
        <div key={category} className="mt-20 mb-32">
          {/* Menu list */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto text-left px-4">
              {grouped[category].slice(0, 8).map((item) => (
                <div
                  key={item._id}
                  onClick={() => handleNavigate(item.category, item._id)} // 🟢 click event
                  className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3 cursor-pointer hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <img
                      className="w-16 h-16 object-cover"
                      src={item.image || image}
                      alt={item.name}
                      style={{
                        borderRadius: "0px 200px 200px 200px",
                      }}
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.name}
                      </h3>
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

            {/* Button */}
            <div className="mt-12 flex justify-center">
              <Link to="/shop">
                <button className="bg-gray-200 rounded-md text-gray-800 font-medium px-6 py-3 hover:bg-gray-300 border-b-4 border-b-amber-700 hover:border-b-amber-950 transition">
                  ORDER YOUR FAVOURITE FOOD
                </button>
              </Link>
            </div>
          </div>

          {/* Category banner */}
          <div
            className="relative bg-center bg-cover h-[500px] flex items-center justify-center mt-10 mb-20"
            style={{
              backgroundImage: `url(${banner})`,
            }}
          >
            <div className="absolute inset-0 bg-black/10 rounded-md"></div>

            <div className="relative flex flex-col items-center justify-center bg-black/50 text-center max-w-4xl h-[350px] mx-4 px-10 py-10 rounded-md shadow-md">
              <h2 className="text-3xl font-serif tracking-wide mb-3 text-white uppercase">
                {category}
              </h2>
              <p className="text-sm text-white leading-relaxed">
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
