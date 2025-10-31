import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home/Home";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts/>,
    children:[
      {
            path:"/",
            element:<Home/>
      },
      {
            path:"/navbar",
            element:<Navbar/>
      },
      {
            path:"/footer",
            element:<Footer/>
      },
    ]
  },
]);

export default router;
