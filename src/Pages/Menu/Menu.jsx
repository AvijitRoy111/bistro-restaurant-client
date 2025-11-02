import banner1 from "../../assets/menu/banner3.jpg";
import DessertBanner from "./DessertBanner";
import PizzaBanner from "./PizzaBanner";
import SaladBanner from "./SaladBanner";
import SoupsBanner from "./SoupsBanner";
import TodayOffer from "./TodayOffer";

const Menu = () => {
  const title = "OUR MENU";
  const subtitle = "Would you like to try a dish";

  return (
    <div className="mb-0 md:mb-24 lg:mb-32">
      <div className="relative w-full h-[30vh] md:h-[80vh] max-h-[700px] overflow-hidden">
        {/* Background Banner */}
        <div>
          <img
            src={banner1}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Gradient Card */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   bg-black/40 rounded-2xl px-8 py-10 sm:px-12 sm:py-14
                   flex flex-col justify-center items-center text-center text-white
                   max-w-3xl w-[90%] space-y-4 backdrop-blur-sm"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-3">{title}</h2>
          <p className="text-sm sm:text-lg opacity-90">{subtitle}</p>
        </div>
      </div>

      {/* offer section */}
      <div className="mt-10 md:mt-16 lg:mt-20">
        <TodayOffer />
        <DessertBanner />
        <PizzaBanner />
        <SaladBanner />
        <SoupsBanner />
      </div>
    </div>
  );
};

export default Menu;
