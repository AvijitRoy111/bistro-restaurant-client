import { useContext } from "react";import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
;


const AdminPrivateRoutes = ({children}) => {
     const {user, loading} = useContext(AuthContext);
     const location = useLocation();

     if(loading){
          return <progress className="progress w-56 text-center"></progress>
     }

    const adminEmail = "avijit@gmail.com";

     if(user?.email== adminEmail){
          return children
     }
     return <Navigate to="/signIn" state={{from : location}} replace></Navigate>
};

export default AdminPrivateRoutes;