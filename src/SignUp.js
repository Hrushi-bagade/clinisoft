import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logoo from "./images/logoo.png";

const SignUp = () => {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [Password, Setpassword] = useState("");
  const [ConfirmPassword, SetConfirmPassword] = useState("");
  
  const handelsubmit=(e)=>{
    e.preventDefault();
    console.log(email);
  }
  return (
    <div className="Plogin">
    <img className="logo-img" src={logoo} alt=""/>
      <form className="Passwordlogin" onSubmit={handelsubmit} >
        <h4>Make Your Account</h4>
        <input  value={PhoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="Phone Number" />
        <input  value={FirstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name" />
        <input  value={LastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name" />
        <input  value={Address} onChange={(e)=>setAddress(e.target.value)} placeholder="Address" />
        <input  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
        <input value={Password} onChange={(e)=>Setpassword(e.target.value)} placeholder="Password" />
        <input value={ConfirmPassword} onChange={(e)=>SetConfirmPassword(e.target.value)} placeholder="Confirm Password" />
        <button className="loginbtn" type="submit">Sign Up</button>
        <p>Already have an account?<span><Link to="/"><button >Login here</button></Link></span></p>
      </form>
    </div>
  );
};

export default SignUp;