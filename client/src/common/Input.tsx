import React from "react";

interface IProps extends React.HTMLProps<HTMLInputElement>{
  onValueChange: (value: string) => void;
}

const Input: React.FC<IProps> = (props) => {
  return (
    <div className="input">
      <input {...props} onChange={(e) => props.onValueChange(e.target.value)}/>
    </div>
  );
}

export default Input;
