import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch data from API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get("http://localhost:5000/reviews");
        setReviews(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // jodi data na thake
  if (!reviews.length && !loading) {
    return (
      <div className="text-center py-10 text-gray-500 font-semibold">
        No reviews found.
      </div>
    );
  }

  const { name, details, rating } = reviews[index] || {};
  const image =
    reviews[index]?.image ||
    `https://randomuser.me/api/portraits/men/${(index % 10) + 1}.jpg`;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="bg-white py-16 px-4 text-center relative max-w-3xl mx-auto shadow-lg rounded-2xl mb-20">
      {loading ? (
        // 🩶 Skeleton Loader Layout
        <div className="animate-pulse space-y-6">
          {/* Header Skeleton */}
          <div className="flex flex-col items-center space-y-3">
            <div className="h-4 w-48 bg-gray-300 rounded"></div>
            <div className="h-8 w-64 bg-gray-300 rounded"></div>
          </div>

          {/* Rating Skeleton */}
          <div className="flex justify-center space-x-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-5 w-5 bg-gray-300 rounded"></div>
            ))}
          </div>

          {/* Quote Icon Skeleton */}
          <div className="flex justify-center mt-6">
            <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
          </div>

          {/* Text Skeleton */}
          <div className="space-y-2 mt-6 px-6">
            <div className="h-3 w-full bg-gray-300 rounded"></div>
            <div className="h-3 w-5/6 bg-gray-300 rounded"></div>
            <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
          </div>

          {/* Image + Name Skeleton */}
          <div className="flex flex-col items-center space-y-3 mt-6">
            <div className="w-16 h-16 rounded-full bg-gray-300"></div>
            <div className="h-4 w-32 bg-gray-300 rounded"></div>
          </div>

          {/* Navigation Buttons Skeleton */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      ) : (
        //  Actual Testimonial Content
        <>
          {/* Section Header */}
          <div className="flex flex-col items-center justify-center space-y-3 mb-6">
            <p className="text-yellow-500 italic mb-2">
              ---What Our Clients Say---
            </p>
            <hr className="border-2 border-gray-300 w-80" />
            <h2 className="text-2xl font-bold tracking-wide">TESTIMONIALS</h2>
            <hr className="border-2 border-gray-300 w-80" />
          </div>

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

          {/* Review Text */}
          <p className="text-gray-600 text-sm md:text-base px-4 mb-6">
            {details}
          </p>

          {/* User Info */}
          <div className="flex flex-col items-center space-y-2">
            <img
              src={image}
              alt={name}
              className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500"
            />
            <p className="text-yellow-600 font-semibold uppercase">{name}</p>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white shadow-md rounded-full p-2 ml-2 hover:bg-orange-600 transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white shadow-md rounded-full p-2 mr-2 hover:bg-orange-600 transition"
          >
            <FaChevronRight />
          </button>
        </>
      )}
    </div>
  );
};

export default Testimonials;
