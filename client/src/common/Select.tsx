import React from "react";

// interface IProps extends React.HTMLProps<HTMLSelectElement>{
  interface IProps {
    className: string;
    options: number[];
    handleSelect: (e:React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<IProps> = (props) => {
  return (
    <div className="select">
      <select {...props} onChange={(e) => props.handleSelect(e)}
        {...props.options && props.options.map((val: string | number , index) => (
          <option value={val} key={index}>{val}</option>
        ))}
      />
    </div>
  );
}

export default Select;
