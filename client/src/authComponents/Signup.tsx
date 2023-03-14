import React from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import { signup } from "../services/authService";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/auth.css";

  const Signup = () =>  {
    const [name, setName] = useState<String>("");
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");

  let handleBtnSignup = (e: React.MouseEvent<HTMLButtonElement>)=> {
    // e.preventDefault();
    console.log(name, email, password);
    signup(name, email, password);
  };

  return (
      <div className="auth">
      <div className="title">Signup page</div>
      <Input
        label="Name"
        name="Name"
        placeholder="Password"
        onValueChange={setName}
      />
      <Input
        label="Email"
        name="email"
        placeholder="Email"
        onValueChange={setEmail}
      />
      <Input
        label="Password"
        name="password"
        placeholder="Password"
        onValueChange={setPassword}
      />
      <Button text="Signup" onClick={handleBtnSignup} />
      <div>- - - - - OR - - - - -</div>
      <Link to="/login">Back to Login page</Link>
    </div>
  );
}

export default Signup
