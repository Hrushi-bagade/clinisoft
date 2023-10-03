import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logoo from "./images/logoo.png";

const ForgotPassword = () => {
  const [PhoneNumber, setPhoneNumber] = useState("");
  
  const handelsubmit=(e)=>{
    e.preventDefault();
    console.log(PhoneNumber);
  }
  return (
    <div className="Plogin">
    <img className="logo-img" src={logoo} alt=""/>
      <form className="Passwordlogin" onSubmit={handelsubmit} >
        <input  value={PhoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="Email/Phone Number" />
        <div>
        <button className="loginbtn" type="submit">Get Otp</button>
        <Link to="/"><button className="loginbtn" type="submit">Cancel</button></Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;

