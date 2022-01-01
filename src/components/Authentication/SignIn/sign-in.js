import React, { useState, useEffect } from "react";
import { Link  } from "react-router-dom";
import { useDispatch } from "react-redux";

import Title from "../../../atoms/title/title";
import Button from "../../../atoms/button/button";
import Input from "../../input-text/input-text";

import { signIn } from '../../../redux/reducers/signInSlice';

import "./sign-in.scss";

const SignIn = ({ click }) => {
  const emailRef = React.useRef();
  const pwRef = React.useRef();

  // const user_status = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [user, setUser] = useState({ email: "", pw: "" });

  useEffect(() => {
  
  })

  const handleChange = (evt) => {
    setUser({
      email: emailRef.current.value,
      pw: pwRef.current.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(user));
    
    document.querySelector('[js-auth-modal]').classList.remove('-opened');
  };

  return (
    <div>
      <div className="rzv-sign-in__header">
        <Title>Sign-in</Title>
      </div>
      <form className="rzv-sign-in" id="signIn" onSubmit={handleSubmit}>
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
            dark
            type="submit"
            value="Submit"
            form="signIn"
            submitForm={handleSubmit}
            >Login</Button>
          <Link className="rzv-switch-cta" to="#" onClick={click}>SignUp</Link>
           </div>
      </form>
   </div>
  );
};

export default SignIn;
