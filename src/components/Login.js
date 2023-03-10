import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loginform from "./Loginform";
import Signupform from "./Signupform";
import '../components_css/Login.css';

const Login = () => {
  const navigate = useNavigate();
  let [changeform, setchangeform] = useState(true);
  const handleChange = () => {
    return setchangeform(!changeform);
  };

  const backtoHome = () => {
    navigate("/");
  };
  return (
    <div>
      <div>
        <button onClick={() => handleChange()}>login</button>
        <button onClick={() => handleChange()}>signup</button>
      </div>
      <div>
        {changeform ? (
          <Loginform></Loginform>
        ) : (
          <Signupform></Signupform>
        )}
      </div>
      <div>
        <button onClick={() => backtoHome()}>Back to Home</button>
      </div>
    </div>
  );
};

export default Login;
