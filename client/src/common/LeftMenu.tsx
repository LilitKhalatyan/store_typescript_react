import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "../assets/styles/left-menu.css"

const LeftMenu = () => {

  const navigate = useNavigate();

  return (
    <div className="left-menu-wrapper">
      <Button text="Dashboard" icon="fa-solid fa-table-columns" onClick={() => navigate("/dashboard")}/>
      <Button text="Statistics" icon="fa-solid fa-chart-simple" onClick={() => navigate("/statistics")}/>
      <Button text="Orders" icon="fa fa-cart-shopping" onClick={() => navigate("/orders")}/>
      <Button text="Products" icon="fa-solid fa-tags" onClick={() => navigate("/products")}/>
      <Button text="Customers" icon="fa-regular fa-user" onClick={() => navigate("/customers")}/>
      <Button text="Groups" icon="fa-solid fa-people-line" onClick={() => navigate("/groups")}/>
      <Button text="Ads" icon="fa-solid fa-rectangle-ad" onClick={() => navigate("/ads")}/>
      <Button text="Categories" icon="fa-solid fa-bars" onClick={() => navigate("/categories")}/>
      <hr></hr>
      <Button text="Settings" icon="fa-solid fa-gear"/>
      <Button text="Help" icon="fa-regular fa-circle-question"/>
    </div>
  );
}

export default LeftMenu