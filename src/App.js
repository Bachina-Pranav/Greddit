import React from "react";
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from "./Home";
import Loginform from "./components/Login";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Loginform></Loginform>} />
    </Routes>
    </Router>
  );
}

export default App;
