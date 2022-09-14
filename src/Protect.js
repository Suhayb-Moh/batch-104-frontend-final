import { useContext, useEffect } from "react";
import { UserContext } from "./Utils/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const Protect = () => {
  const { user } = useContext(UserContext);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default Protect;
