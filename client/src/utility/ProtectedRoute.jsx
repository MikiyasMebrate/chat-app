import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext, } from "react";


const ProtectedRoute = () => {
    const {user} = useContext(AuthContext)

    return user ? <Outlet /> : <Navigate to="/login" />
}
 
export default ProtectedRoute;