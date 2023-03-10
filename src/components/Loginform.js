import React from "react";
import '../components_css/Loginform.css';
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
    const navigate = useNavigate();
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        if ( username != "admin" && password != "admin" )
        {
            console.log("Details do not match!");
            setusername("");
            setpassword("");
            navigate('/login');
        }
        else
        {
            navigate("/profile");
        }
    }

    return (
<form onSubmit={submitHandler}>
      <div>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="name">username: </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            onChange={(e) => setusername(e.target.value)}
            value={username}
          ></input>
        </div>
        <div>
          <label htmlFor="password">password: </label>
          <input
            required
            type="password"
            name="password"
            id="password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
          ></input>
        </div>
        <div>
          <input
            type="submit"
            value="LOGIN"
            disabled={!username || !password}
          ></input>
        </div>
      </div>
    </form>
    )
}

export default Loginform;