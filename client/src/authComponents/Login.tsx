// import React from "react";
import Button from "../common/Button";
import Input from "../common/Input";

import { login } from "../services/authService";
import { Link } from "react-router-dom";
import { User } from "../types/user";
import { ChangeEvent, useState } from "react";
import { EventEmitter } from "stream";
import "../assets/styles/auth.css";


const Login = () =>  {

    const [email, setEmail] = useState<String>("")
    const [password, setPassword] = useState<String>("")

  let handleBtnLogin = (e: React.MouseEvent<HTMLButtonElement>)=> {
    // e.preventDefault();
    console.log(email, password);
    login(email, password);
  };

  return (
    <div className="auth">
      <div className="title">Login Page</div>
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
      <Button text="Login" onClick={handleBtnLogin} />
      <div>Don't have an account?</div>
      <Link to="/signup">Go To Signup page</Link>
    </div>
  );
}

export default Login;
