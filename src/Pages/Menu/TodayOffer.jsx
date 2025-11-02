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
];

const TodayOffer = () => {
  return (
    <div>
      {/* text section */}
      <div className="flex flex-col items-center justify-center space-y-3 mb-8">
        <p className="text-yellow-500 italic mb-2">---Don't miss---</p>
        <hr className="border-2 border-gray-300 w-64 md:w-80" />
        <h2 className="text-2xl font-bold tracking-wide">TODAY'S OFFER</h2>
        <hr className="border-2 border-gray-300 w-64 md:w-80" />
      </div>

      {/* Menu List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto text-left px-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3"
          >
            {/* Left Side */}
            <div className="flex items-center gap-4">
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

      {/* Button (Centered) */}
      <div className="mt-12 flex justify-center">
        <button className="bg-gray-200 rounded-md text-gray-800 font-medium px-6 py-3 hover:bg-gray-300 border-b-4 border-b-amber-700 hover:border-b-amber-950 transition">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
    </div>
  );
};

export default TodayOffer;
