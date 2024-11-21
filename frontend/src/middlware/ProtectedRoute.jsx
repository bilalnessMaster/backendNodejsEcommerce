import { Navigate } from "react-router-dom";
import { useUserStore } from "../Stores/useUserStore";
import { useEffect } from "react";
import BigLoader from "../components/BigLoader";

const ProtectedRoute = ({ children, redirectTo = "/" ,admin = false }) => {
    const { user  , getProfile} = useUserStore();
    useEffect(()=>{
        getProfile()
    },[getProfile])

    
    if(!user && !admin){
        return children
    }
    if(user && user.role === 'admin' && admin){
        return children
    }
    if(user && user.role === 'customer' && admin){
        return children
    }
    
     return <Navigate to={redirectTo} />;
};

export default ProtectedRoute;


