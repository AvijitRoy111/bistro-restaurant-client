// import React, { useState } from "react";
// import {
//   FaStar,
//   FaQuoteLeft,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";

// const testimonials = [
//   {
//     id: 1,
//     name: "Jane Doe",
//     text: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
//     rating: 4,
//     image: "https://randomuser.me/api/portraits/women/1.jpg",
//   },
//   {
//     id: 2,
//     name: "John Smith",
//     text: "Excellent service and great attention to detail. Highly recommended!",
//     rating: 5,
//     image: "https://randomuser.me/api/portraits/men/2.jpg",
//   },
//   {
//     id: 3,
//     name: "Sophia Lee",
//     text: "Very professional and friendly. My experience was wonderful!",
//     rating: 5,
//     image: "https://randomuser.me/api/portraits/women/3.jpg",
//   },
//   {
//     id: 4,
//     name: "Michael Brown",
//     text: "They made everything so easy. I’ll definitely return again.",
//     rating: 4,
//     image: "https://randomuser.me/api/portraits/men/4.jpg",
//   },
//   {
//     id: 5,
//     name: "Emily Davis",
//     text: "Amazing quality and very fast support. Totally satisfied.",
//     rating: 5,
//     image: "https://randomuser.me/api/portraits/women/5.jpg",
//   },
//   {
//     id: 6,
//     name: "Chris Johnson",
//     text: "Very smooth experience, would highly recommend to anyone.",
//     rating: 4,
//     image: "https://randomuser.me/api/portraits/men/6.jpg",
//   },
//   {
//     id: 7,
//     name: "Isabella Clark",
//     text: "I loved the design and user experience. Absolutely fantastic!",
//     rating: 5,
//     image: "https://randomuser.me/api/portraits/women/7.jpg",
//   },
//   {
//     id: 8,
//     name: "Ethan Wilson",
//     text: "Their customer service is top-notch. Great job team!",
//     rating: 5,
//     image: "https://randomuser.me/api/portraits/men/8.jpg",
//   },
//   {
//     id: 9,
//     name: "Olivia Taylor",
//     text: "Beautiful design and really easy to use. Loved it!",
//     rating: 5,
//     image: "https://randomuser.me/api/portraits/women/9.jpg",
//   },
//   {
//     id: 10,
//     name: "Liam Martinez",
//     text: "A perfect experience from start to finish. Highly appreciated!",
//     rating: 5,
//     image: "https://randomuser.me/api/portraits/men/10.jpg",
//   },
// ];

// const Testimonials = () => {
//   const [index, setIndex] = useState(0);
//   const { name, text, rating, image } = testimonials[index];

//   const nextSlide = () => {
//     setIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <div className="bg-white py-16 px-4 text-center relative max-w-3xl mx-auto">
//       {/* tesmonial text section */}
//       <div className="flex flex-col items-center justify-center space-y-3 mb-6">
//         <p className="text-yellow-500 italic mb-2">
//           ---What Our Clients Say---
//         </p>
//         <hr className="border-2 border-gray-300 w-80" />
//         <h2 className="text-2xl font-bold tracking-wide">TESTIMONIALS</h2>
//         <hr className="border-2 border-gray-300 w-80 " />
//       </div>

      {/* Rating */}
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`mx-1 ${
              i < rating ? "text-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <FaQuoteLeft className="text-4xl text-gray-400 mx-auto mb-4" />

      {/* Testimonial Text */}
      <p className="text-gray-600 text-sm md:text-base px-4 mb-6">{text}</p>

      {/* User Info */}
      <div className="flex flex-col items-center space-y-2">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500"
        />
        <p className="text-yellow-600 font-semibold uppercase">{name}</p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white shadow-md rounded-full p-2 ml-2 hover:bg-orange-600 transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2  bg-orange-500 text-white shadow-md rounded-full p-2 mr-2 hover:bg-orange-600 transition"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Testimonials;
