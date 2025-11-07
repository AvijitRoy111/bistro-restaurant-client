import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import banner1 from "../../assets/shop/banner.png";

const Shop = () => {
  const { category } = useParams();
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(category?.toUpperCase() || "SALAD");
  const [highlightId, setHighlightId] = useState(null);

  useEffect(() => {
    //  Get highlight id from URL query
    const query = new URLSearchParams(location.search);
    const highlight = query.get("highlight");
    setHighlightId(highlight);

    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_api}/menuItems`);
        setItems(res.data.data);
      } catch (err) {
        console.error("Error fetching shop items:", err);
      }
    };
    fetchData();
  }, [category, location.search]);

  const categories = [...new Set(items.map((item) => item.category.toUpperCase()))];
  const filtered = items.filter(
    (item) => item.category.toUpperCase() === active
  );

  const title = "OUR SHOP";
  const subtitle = "Would you like to try a dish";

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full h-[70vh] overflow-hidden mb-16">
        <img src={banner1} alt="banner" className="w-full h-full object-cover" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        bg-black/40 rounded-2xl px-8 py-10 text-center text-white
                        max-w-3xl h-44 md:h-64 w-[90%] backdrop-blur-sm">
          <h2 className="text-3xl sm:text-5xl font-bold mb-3">{title}</h2>
          <p className="text-sm sm:text-lg opacity-90">{subtitle}</p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center space-x-6 border-b border-gray-200 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setHighlightId(null); 
            }}
            className={`pb-3 text-sm font-semibold tracking-wide ${
              active === cat
                ? "text-yellow-500 border-b-2 border-yellow-500"
                : "text-gray-600 hover:text-yellow-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 px-4 pb-20">
        {filtered.map((item) => (
          <div
            key={item._id}
            className={`border rounded-lg shadow-sm transition p-4 relative ${
              item._id === highlightId
                ? "ring-2 ring-amber-700 bg-green-300/10  scale-[1.05]"
                : "hover:shadow-md"
            }`}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <span className="absolute top-2 right-2 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded border-b-4 border-b-amber-800">
                ${item.price}
              </span>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-sm text-gray-500 mt-2">{item.recipe}</p>
              <button className="mt-4 px-4 py-2 bg-gray-200 text-orange-600 font-medium rounded hover:bg-gray-300 transition border-b-4 border-b-orange-900">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
