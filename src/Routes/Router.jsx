import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home/Home";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Error from "../Components/Error/Error";
import Menu from "../Pages/Menu/Menu";
import Contact from "../Pages/Contact Us/Contact";
import Shop from "../Pages/Our-Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts/>,
    errorElement:<Error/>,
    children:[
      {
            path:"/",
            element:<Home/>
      },
      {
            path:"/menu",
            element:<Menu/>
      },
      {
            path:"/shop",
            element:<Shop/>
      },
       {
            path:"/contact",
            element:<Contact/>
      },
      {
            path:"/navbar",
            element:<Navbar/>
      },
      {
            path:"/footer",
            element:<Footer/>
      },
       {
            path:"/error",
            element:<Error/>
      },
    ]
  },
]);

export default router;
