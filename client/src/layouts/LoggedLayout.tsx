import { Outlet, Navigate } from "react-router-dom";

const LoggedLayout = () => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/dashboard" />;
  }
  return <Outlet />;
};

export default LoggedLayout;
