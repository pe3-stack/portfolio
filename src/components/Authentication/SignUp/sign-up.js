import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Title from "../../../atoms/title/title";
import Button from "../../../atoms/button/button";
import Input from "../../input-text/input-text";

import { signUp } from '../../../redux/reducers/signUpSlice';

import "./sign-up.scss";


const SignUp = ({click}) => {
    const usernameRef = React.useRef();
    const emailRef = React.useRef();
    const pwRef = React.useRef();

  const dispatch = useDispatch();

  const [user, setUser] = useState({ name: "", email: "", pw: "" });

  const handleChange = (evt) => {
    

    setUser({
      name: usernameRef.current.value,
      email: emailRef.current.value,
      pw: pwRef.current.value
    });

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
  };

  return (
    <div>

      <div className="rzv-sign-up__header">
        <Title>Sign-Up</Title>
      </div>
      <form className="rzv-sign-up" id="signup" onSubmit={handleSubmit}>
        <Input
            ref={usernameRef}
            change={handleChange}
            val={user.name}
            label="Name"
            type="text"
          />
          <Input
            ref={emailRef}
            change={handleChange}
            val={user.email}
            label="Email"
            type="email"
          />
          <Input
            ref={pwRef}
            change={handleChange}
            val={user.pw}
            label="Password"
            type="password"
          />
          <div className="rzv-sign-in__cta">
          <Button
            color="dark"
            type="submit"
            value="Submit"
            form="signup"
            submitForm={handleSubmit}
            >Register</Button>
          <Link className="rzv-switch-cta" to="#" onClick={click}>SignIn</Link>
          </div>
            
      </form>
   </div>
 
  );
};

export default SignUp;
