import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components_css/Signupform.css";

const Signupform = () => {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [contactNo, setcontactNo] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName,setlastName] = useState("");
    const [age,setage] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        navigate('/profile');
    }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <h2>signup</h2>
        <div className="form-group">
          <label htmlFor="firstname">First Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setfirstName(e.target.value)}
            value={firstName}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setlastName(e.target.value)}
            value={lastName}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="name">username: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setusername(e.target.value)}
            value={username}
          ></input>
        </div>
        <div>
          <label htmlFor="email">email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          ></input>
        </div>
        <div>
          <label htmlFor="phone">contactNo: </label>
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={(e) => setcontactNo(e.target.value)}
            value={contactNo}
          ></input>
        </div>
        <div>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="Age">Age: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setage(e.target.value)}
            value={age}
          ></input>
        </div>
        <div>
          <input type="submit" value="LOGIN" disabled={!username || !password || !email || !contactNo || !firstName || !lastName || !age}></input>
        </div>
      </div>
    </form>
  );
};

export default Signupform;
