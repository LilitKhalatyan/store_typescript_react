import React from "react";
import "../assets/styles/button.css"

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
// interface IProps {
  icon?: string;
  text?: string;
  disabled?: boolean;
}

const Button: React.FC<IProps> = (props) => {
  const {icon, text, ...rest} = props;
  return (
    <button {...rest}>
      {icon && <i className={props.icon}></i>}
      {text && text}
    </button>
  );
}

export default Button;
