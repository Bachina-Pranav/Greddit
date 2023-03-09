import React from "react";
import "./Home.css";
import logo from "./images/reddit-logo.png";

const Home = () => {
  return (
    <div className="homepage">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <p>Welcome to Greddit!</p>
      <div>
        <button
          className="button-27"
          onClick={() => (window.location.href = "/login")}
        >
          Click here to Login/Signup
        </button>
      </div>
    </div>
  );
};

export default Home;
