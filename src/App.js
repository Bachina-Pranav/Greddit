import React from "react";
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from "./Home";
import Loginform from "./components/Loginform";
import Login from "./components/Login";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>} />
      <Route path="/profile" element={<div><h1>Profile</h1></div>} />
    </Routes>
    </Router>
  );
}

export default App;
