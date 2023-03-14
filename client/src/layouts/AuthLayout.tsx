import { Navigate, Outlet } from "react-router-dom";
import Header from "../common/Header";
import "../assets/styles/main-layout.css"
import LeftMenu from "../common/LeftMenu";

const AuthLayout = () => {

    if (localStorage.getItem("token")) {
    return <>
      <Header auth={true}/>
      <div className="main-layout">
        <LeftMenu />
        <div className="main-layout-outlet">
          <Outlet />
        </div>
      </div>
    </>;
  }

  return <Navigate to="/login" />;
}

export default AuthLayout;