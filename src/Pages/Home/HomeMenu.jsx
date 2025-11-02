import image from "../../assets/home/featured.jpg";

const HomeMenu = () => {
  return (
    <div
      className="mx-4 md:mx-28 bg-cover bg-center bg-no-repeat rounded-md flex items-center justify-center mb-16"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-black/60 text-white text-center py-20 md:text-left  rounded-md  w-full flex flex-col items-center justify-center">
        {/* text section */}
        <div className="flex flex-col items-center  justify-center space-y-3 mb-8">
          <p className="text-yellow-500 italic mb-2">---Check it out---</p>
          <hr className="border-2 border-gray-300 w-64 md:w-80" />
          <h2 className="text-2xl font-bold tracking-wide">FROM OUR MENU</h2>
          <hr className="border-2 border-gray-300 w-64 md:w-80" />
        </div>

        {/* image & text section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              className="w-[320px] h-[260px] md:w-[380px] md:h-[300px] rounded-md object-cover"
              src={image}
              alt="menu"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col items-center md:items-start max-w-lg space-y-4">
            <h1 className="text-lg md:text-xl font-normal text-white">
              March 20, 2023
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              WHERE CAN I GET SOME?
            </h2>
            <p className="text-sm md:text-base font-light text-gray-200 text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="bg-black/40 border-b-4 border-white hover:bg-black/70 transition-all py-2 px-6 rounded-md text-lg font-medium">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
