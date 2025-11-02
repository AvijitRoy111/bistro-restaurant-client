import banner from "../../assets/home/chef-service.jpg";
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
    name: "ESCALOPE DE VEAU",
    description: "Grilled veal medallions paired with garden vegetables.",
    price: "$14.5",
  },
  {
    id: 6,
    name: "CHICKEN AND WALNUT SALAD",
    description: "Roasted chicken with mixed greens and walnut dressing.",
    price: "$14.5",
  },
];

const PizzaBanner = () => {
  return (
    <div>
      {/* pizza contaxt */}
      <div>
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
              <span className="text-yellow-500 font-semibold">
                {item.price}
              </span>
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

      {/* pizza banner */}
      <div
        className="relative bg-center bg-cover h-[500px] flex items-center justify-center mt-10 mb-32  "
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 rounded-md"></div>

        {/* Content Box */}
        <div className="relative flex flex-col items-center justify-center bg-black/50 text-center max-w-4xl h-[350px] mx-4 px-10 py-10 rounded-md shadow-md ">
          <h2 className="text-3xl font-serif tracking-wide mb-3 text-white">
            PIZZA
          </h2>
          <p className="text-sm text-white leading-relaxed">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PizzaBanner;
