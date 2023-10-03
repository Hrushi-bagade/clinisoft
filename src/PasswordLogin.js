import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logoo from "./images/logoo.png";
const PasswordLogin = () => {
const [email, setEmail] = useState("");
const [Password, Setpassword] = useState("");
  return (
  <div>

    <div className="Plogin">
      <img className="logo-img" src={logoo} alt=""/>
      <form className="Passwordlogin">
        <input  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email or Phone Number" />
        <input  value={Password} onChange={(e)=>Setpassword(e.target.value)} placeholder="Enter Password" />
        <Link to="/forget-password"><button className="Forgot">Forgot Password</button></Link>
        <Link to="/header"><button className="loginbtn" type="submit">Login</button></Link>
        <Link to="/otp-login"><button type="OtpLogin">Login with Otp?</button></Link>
        <p>Dont Have Any Account?<span>
        <Link to="/signup"><button >Sign up</button></Link></span></p>
      </form>
    </div>
  </div> 
  );
};

export default PasswordLogin;

