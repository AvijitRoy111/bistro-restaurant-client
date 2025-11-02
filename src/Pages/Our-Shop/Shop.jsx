import React from "react";
import banner1 from "../../assets/shop/banner.png";
import image1 from "../../assets/shop/dessert-bg.jpeg"
import image2 from "../../assets/shop/pizza-bg.jpg"
import image3 from "../../assets/shop/salad-bg.jpg"
import image4 from "../../assets/shop/slide1.jpg"
import image5 from "../../assets/shop/slide3.jpg"
import image6 from "../../assets/shop/soup-bg.jpg"
const categories = ["SALAD", "PIZZA", "SOUP", "DESSERTS", "DRINKS"];
const items = [
  {
    id: 1,
    name: "Caesar Salad",
    description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets",
    price: "$14.5",
    image:image1,
  },
  {
    id: 2,
    name: "Caesar Salad",
    description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets",
    price: "$14.5",
    image:image2,
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets",
    price: "$14.5",
    image:image3,
  },
  {
    id: 4,
    name: "Caesar Salad",
    description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets",
    price: "$14.5",
    image:image4,
  },
  {
    id: 5,
    name: "Caesar Salad",
    description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets",
    price: "$14.5",
    image:image5,
  },
  {
    id: 6,
    name: "Caesar Salad",
    description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets",
    price: "$14.5",
    image:image6,
  },

];


const Shop = () => {
  const [active, setActive] = React.useState("SALAD");
  const title = "OUR SHOP";
  const subtitle = "Would you like to try a dish";
  
  return (
    <div>
      {/* banner section */}
      <div className="relative w-full h-[80vh] max-h-[700px] overflow-hidden mb-32">
        {/* Background Banner */}
        <img
          src={banner1}
          alt="banner"
          className="w-full h-full object-cover"
        />

        {/* Center Gradient Card */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                             bg-black/40 rounded-2xl px-8 py-10 sm:px-12 sm:py-14
                             flex flex-col justify-center items-center text-center text-white
                             max-w-3xl h-44 md:h-64 w-[90%] space-y-4 backdrop-blur-sm"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-3">{title}</h2>
          <p className="text-sm sm:text-lg opacity-90">{subtitle}</p>
        </div>
      </div>

      {/* card section  */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Category Tabs */}
        <div className="flex justify-center space-x-6 border-b border-gray-200 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
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

        {/* Cards Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow-sm hover:shadow-md transition p-4"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <span className="absolute top-2 right-2 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded border-b-4 border-b-amber-800">
                  {item.price}
                </span>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                <button className="mt-4 px-4 py-2 bg-gray-200 text-orange-600 font-medium rounded hover:bg-gray-300 transition border-b-4 border-b-orange-900">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
