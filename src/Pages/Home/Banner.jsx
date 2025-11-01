// import { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import banner1 from "../../assets/banner/banner-1.png";
// import banner2 from "../../assets/banner/banner-2.jpg";
// import banner3 from "../../assets/banner/banner-3.jpg";
// import banner4 from "../../assets/banner/banner-4.jpg";
// import banner5 from "../../assets/banner/banner-5.jpg";

// const images = [
//   {
//     src: banner1,
//     title: "Discover Beautiful Places",
//     subtitle: "Explore the world with us and find your dream destination.",
//   },
//   {
//     src: banner2,
//     title: "Adventure Awaits",
//     subtitle: "Experience thrilling moments in breathtaking locations.",
//   },
//   {
//     src: banner3,
//     title: "Feel the Nature",
//     subtitle: "Reconnect with the beauty of nature and find peace.",
//   },
//   {
//     src: banner4,
//     title: "Luxury Experience",
//     subtitle: "Stay in style and comfort wherever you travel.",
//   },
//   {
//     src: banner5,
//     title: "Luxury Experience",
//     subtitle: "Stay in style and comfort wherever you travel.",
//   },
// ];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="relative w-full ">
      {/* Slider Container */}
      <div className="relative w-full h-[80vh] max-h-[700px]">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out 
              ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <img
              src={img.src}
              alt={`banner-${index}`}
              className="w-full h-full object-cover"
            />

            {/* Gradient Card (Same color top to bottom) */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         bg-black/40 rounded-2xl px-8 py-10 sm:px-12 sm:py-14
                         flex flex-col justify-center items-center text-center text-white
                         max-w-3xl h-44 md:h-64 w-[90%] space-y-4"
            >
              <h2 className="text-3xl sm:text-5xl font-bold mb-3">
                {img.title}
              </h2>
              <p className="text-sm sm:text-lg opacity-90">{img.subtitle}</p>
            </div>
          </div>
        ))}

        {/* Prev / Next Buttons — Always Visible */}
        <button
          onClick={prevSlide}
          className="absolute z-30 left-5 top-1/2 transform -translate-y-1/2 
                     bg-black/40 hover:bg-black/70 text-white p-3 rounded-full shadow-md transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute z-30 right-5 top-1/2 transform -translate-y-1/2 
                     bg-black/40 hover:bg-black/70 text-white p-3 rounded-full shadow-md transition"
        >
          <FaChevronRight />
        </button>

        {/* Circle Indicators (Inside Image Bottom Center) */}
        <div className="absolute z-30 bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3.5 h-3.5 rounded-full border border-white transition-all duration-300
                ${
                  index === current
                    ? "bg-blue-500 scale-110"
                    : "bg-white/60 hover:bg-white"
                }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Thumbnail Preview Below Image */}
      <div className="flex justify-center gap-3 mt-6 mb-3">
        {images.map((thumb, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-16 h-10 cursor-pointer rounded-md overflow-hidden border-2 transition-all duration-300
              ${
                index === current
                  ? "border-blue-500 scale-110 shadow-lg"
                  : "border-transparent hover:opacity-90"
              }`}
          >
            <img
              src={thumb.src}
              alt={`thumb-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
