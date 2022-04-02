import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Explore from "./routes/Explore";
import ForgetPassword from "./routes/ForgetPassword";
import Offers from "./routes/Offers";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";


const App = () => {
  return (
    <>
      <Router>
       <Routes>
          <Route path="/" element={<Explore/>} />
          <Route path="/offers" element={<Offers/>} />
          <Route path="/profile" element={<SignIn/>} />
          <Route path= "/sign-in" element= {<SignIn/>} />
          <Route path= "/sign-up" element= {<SignUp/>} />
          <Route path= "/forget-password" element={<ForgetPassword/>} />
        </Routes>
        <Navbar />
      </Router>
      
    </>
    
  );
}

export default App;
