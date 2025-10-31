import { useEffect, useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4); // Default 4 for desktop

  // 🔹 Change visible count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(2); // small screen → 2 cards
      } else {
        setVisibleCount(4); // large screen → 4 cards
      }
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // 🔹 Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // 🔹 Generate visible slides dynamically
  const visibleSlides = Array.from({ length: visibleCount }, (_, i) =>
    slides[(currentIndex + i) % slides.length]
  );

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

      {/* Slider Container */}
      <div className="relative w-full max-w-7xl overflow-hidden">
        <div className="flex justify-center gap-6 transition-transform duration-700 ease-in-out px-4 md:px-20">
          {visibleSlides.map((slide, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden shadow-lg ${
                visibleCount === 2 ? "w-1/2" : "w-1/4"
              }`}
            >
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
          ))}
        </div>
      </div>

      {/* Dots (Below images, center aligned) */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-blue-500 scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Order;
