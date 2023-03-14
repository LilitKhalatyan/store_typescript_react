import logo from "../assets/img/logo.png"
import user from "../assets/img/user.png"
import "../assets/styles/header.css"

interface IProps {
  auth: boolean;
}

const Header: React.FC<IProps> = (props) => {

  return (
    <div className="header">
      <div className="logo" ><img src={logo} alt="logo" /></div>
      <div className="header-right" >
        <div className="header-search-box">
          <input type="text" className="header-search"/>
          <i className="fa fa-magnifying-glass"></i>
        </div>
        <i className="fa-regular fa-bell"></i>
        <div className="user" ><img src={user} alt="user" hidden={!props.auth}/></div>
        <div className="logout" hidden={!props.auth}>
        </div>
        <div className="logout" hidden={props.auth}>
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
        </div>
      </div>
    </div>
  );
}

export default Header
