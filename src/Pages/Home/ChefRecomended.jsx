import banner1 from "../../assets/shop/banner.png";
import image1 from "../../assets/home/slide1.jpg";
import image2 from "../../assets/home/slide4.jpg";
import image3 from "../../assets/home/slide5.jpg";

const items = [
  {
    id: 1,
    name: "Caesar Salad",
    description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets",
    price: "$14.5",
    image: image1,
  },
  {
    id: 2,
    name: "Pizza Margherita",
    description: "Tomato sauce, mozzarella cheese, fresh basil leaves",
    price: "$18.0",
    image: image2,
  },
  {
    id: 3,
    name: "Hot Soup Bowl",
    description: "Fresh vegetables, aromatic herbs, and tender chicken broth",
    price: "$12.5",
    image: image3,
  },
];

const ChefRecomended = () => {
  return (
    <div className="mb-28 mx-4 md:mx-44">
      {/* Title Section */}
      <div className="flex flex-col items-center gap-3 pb-10">
        <h1 className="text-xl font-bold text-center text-[#D99904]">
          ---From 11:00am to 10:00pm---
        </h1>
//         <hr className="border-2 border-gray-300 w-80" />
//         <h2 className="text-3xl font-bold text-center text-[#151515]">
//           CHEF RECOMMENDS
//         </h2>
//         <hr className="border-2 border-gray-300 w-80" />
//       </div>

      {/* Cards Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//         {items.map((item) => (
//           <div
//             key={item.id}
//             className="border rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col items-center bg-white"
//           > */}
            {/* Image Section */}
            <div className="relative ">
              <img
                src={item.image}
                alt={item.name}
                className="w-80 h-64 md:w-96 md:h-80 object-cover rounded-xl "
              />

            {/* Text Section */}
            <div className="text-center mt-6 mb-4 px-2">
              <h3 className="text-2xl font-bold text-[#151515]">{item.name}</h3>
              <p className="text-base text-gray-600 mt-3 leading-relaxed">
                {item.description}
              </p>
              <button className="mt-6 px-5 py-2 bg-gray-200 text-orange-600 font-medium rounded hover:bg-gray-300 transition border-b-4 border-b-orange-900">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefRecomended;
