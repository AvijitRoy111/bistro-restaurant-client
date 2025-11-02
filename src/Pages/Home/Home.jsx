import Banner from "./Banner"
import BistroBoss from "./BristoBoss"
import ChefRecomended from "./ChefRecomended"
import Contact from "./Contact"
import HomeMenu from "./HomeMenu"
import Order from "./Order"
import OurMenuSection from "./OurMenuSection"
import Testimonials from "./Testimonials"

const Home = () => {
  return (
    <div className="w-full">
            <Banner/>
            <Order/>
            <BistroBoss/>
            <OurMenuSection/>
            <Contact/>
            <ChefRecomended/>
            <HomeMenu/>
            <Testimonials/>
    </div>
  )
}

export default Home









