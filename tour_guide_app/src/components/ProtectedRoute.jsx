import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthProvider";

const ProtectedRoute = ({children})=>{
    const { user }=useUserAuth();

    if (!user) {
        return <Navigate to="/signin" replace />;
      }

      return children;
}

export default ProtectedRoute;