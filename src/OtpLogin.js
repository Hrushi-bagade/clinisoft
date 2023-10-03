import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logoo from "./images/logoo.png";

const OtpLogin = () => {
  const [PhoneNumber, setPhoneNumber] = useState("");
  
  const handelsubmit=(e)=>{
    e.preventDefault();
    console.log(PhoneNumber);
  }
  return (
    <div className="Plogin">
      <img className="logo-img" src={logoo} alt=""/>
      <form className="Passwordlogin" onSubmit={handelsubmit} >
        <input  value={PhoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="Enter Phone Number" />
        <button className="loginbtn" type="submit">Get Otp</button>
        <Link to="/"><button type="OtpLogin">Login with Password</button></Link>
        <p>Dont't Have Any Account?<span><Link to="/signup"><button>Sign up</button></Link></span></p>
      </form>
    </div>
  );
};

export default OtpLogin;

