import React from "react";
import image from "../../assets/home/Rectangle 11.png";
const menuItems = [
  {
    id: 1,
    name: "ROAST DUCK BREAST",
    description: "Served with potato puree and a light cherry sauce.",
    price: "$14.5",
  },
  {
    id: 2,
    name: "TUNA NIÇOISE",
    description:
      "Seared steak served with baby spring potatoes and a signature cherry sauce.",
    price: "$14.5",
  },
  {
    id: 3,
    name: "ESCALOPE DE VEAU",
    description: "Grilled veal medallions paired with garden vegetables.",
    price: "$14.5",
  },
  {
    id: 4,
    name: "CHICKEN AND WALNUT SALAD",
    description: "Roasted chicken with mixed greens and walnut dressing.",
    price: "$14.5",
  },
  {
    id: 5,
    name: "FISH PARMENTIER",
    description:
      "Mashed potato-topped fish pie served piping hot with creamy sauce.",
    price: "$14.5",
  },
  {
    id: 6,
    name: "ROASTED BEEF ROLL",
    description:
      "Herb-seasoned roasted beef roll with potato salad and signature gravy.",
    price: "$14.5",
  },
];

const OurMenuSection = () => {
  return (
    <div className="mx-4 md:mx-20 mb-28 text-center">
      {/* Title Section */}
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

      {/* Menu List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto text-left">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3"
          >
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <div />
              <img className="w-16 h-16" src={image} alt="" />
              <div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>

            {/* Right Side (Price) */}
            <span className="text-yellow-500 font-semibold">{item.price}</span>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-12">
        <button className="bg-gray-200 rounded-md  text-gray-800 font-medium px-6 py-3 hover:bg-gray-300 border-b-4 border-b-amber-700 hover:border-b-amber-950  transition">
          VIEW FULL MENU
        </button>
      </div>
    </div>
  );
};

export default OurMenuSection;
