import React from "react";

interface IProps {
  icon: string;
  text: string;
}

const DashboardBlock1: React.FC<IProps> = (props) => {

  return (
    <div className="dashboard-block1-items">
      <i className={props.icon}></i>{props.text}
    </div>
  );
}

export default DashboardBlock1