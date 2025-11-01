import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"


const AuthLayouts = () => {
  return (
    <div>
      <Navbar/>

      <Outlet/>

    </div>
  )
}

export default AuthLayouts
