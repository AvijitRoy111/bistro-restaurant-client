import Banner from "./Banner";
import BistroBoss from "./BristoBoss";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Order from "./Order";
import OurMenuSection from "./OurMenuSection";
import ChefRecomended from "./ChefRecomended";

const Home = () => {
  return (
    <div className="w-full">
      <Banner />
      <Order />
      <BistroBoss />
      <OurMenuSection />
      <Contact />
      <ChefRecomended />
      <Testimonials />
    </div>
  );
};

export default Home;
