import { useContext, useEffect } from "react";
import { UserContext } from "./Utils/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const Protect = () => {
  const { user } = useContext(UserContext);
  useEffect(() => {
    console.log(user);
  });
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default Protect;
