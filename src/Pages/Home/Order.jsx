import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const Order = () => {
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_api}/menuItems`);
        const grouped = res.data.data.reduce((acc, item) => {
          if (!acc[item.category]) acc[item.category] = item.image;
          return acc;
        }, {});
        setCategories(
          Object.keys(grouped).slice(0, 6).map((cat) => ({
            name: cat.toUpperCase(),
            image: grouped[cat],
          }))
        );
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  // Skeleton Loader UI
  if (loading) {
    return (
      <div className="w-full py-20 bg-white flex flex-col items-center">
        <div className="flex flex-col items-center gap-3 pb-10">
          <div className="h-6 w-80 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-1 w-80 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-8 w-60 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-1 w-80 bg-gray-300 rounded animate-pulse"></div>
        </div>

        <div className="w-full max-w-7xl px-4 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-300 animate-pulse h-[320px]"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-20 bg-white flex flex-col items-center">
      {/* Title Section */}
      <div className="flex flex-col items-center gap-3 pb-10">
        <h1 className="text-xl font-bold text-center text-[#D99904]">
          ---From 11:00am to 10:00pm---
        </h1>
        <hr className="border-2 border-gray-300 w-80" />
        <h2 className="text-3xl font-bold text-center text-[#151515]">
          ORDER ONLINE
        </h2>
        <hr className="border-2 border-gray-300 w-80" />
      </div>

      {/* Swiper Section */}
      <div className="w-full max-w-7xl px-4 md:px-24">
        <Swiper
          modules={[FreeMode, Autoplay]}
          freeMode={true}
          grabCursor={true}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex % categories.length)
          }
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => navigate(`/shop/${cat.name.toLowerCase()}`)}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end justify-center pb-6">
                  <h2 className="text-white text-2xl font-bold">{cat.name}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {categories.map((_, index) => (
            <button
              key={index}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-orange-500 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
