import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import image1 from "../../assets/home/slide1.jpg";
import image2 from "../../assets/home/slide2.jpg";
import image3 from "../../assets/home/slide3.jpg";
import image4 from "../../assets/home/slide4.jpg";
import image5 from "../../assets/home/slide5.jpg";

const slides = [
  { image: image1, title: "SALADS" },
  { image: image2, title: "PIZZAS" },
  { image: image3, title: "SOUPS" },
  { image: image4, title: "DESSERTS" },
  { image: image5, title: "DRINKS" },
  { image: image2, title: "PIZZAS" },
  { image: image3, title: "SOUPS" },
  { image: image4, title: "DESSERTS" },
];

const Order = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

      {/* Swiper Container */}
      <div className="w-full max-w-7xl px-4 md:px-10">
        <Swiper
          modules={[FreeMode, Autoplay]}
          freeMode={true}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex % slides.length)
          }
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[320px] object-cover"
                />
                {/* Overlay + Title */}
                <div className="absolute inset-0 bg-black/30 flex items-end justify-center pb-6">
                  <h2 className="text-white text-2xl font-bold">
                    {slide.title}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
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
