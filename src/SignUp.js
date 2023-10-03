import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logoo from "./images/logoo.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    PhoneNumber: "",
    FirstName: "",
    LastName: "",
    Address: "",
    email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.email);
  };

  return (
    <div className="Plogin">
      <img className="logo-img" src={logoo} alt="" />
      <form className="Passwordlogin" onSubmit={handleSubmit}>
        <h4>Make Your Account</h4>
        <input
          name="PhoneNumber"
          value={formData.PhoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <input
          name="FirstName"
          value={formData.FirstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          name="LastName"
          value={formData.LastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          name="Address"
          value={formData.Address}
          onChange={handleChange}
          placeholder="Address"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="Password"
          value={formData.Password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          name="ConfirmPassword"
          value={formData.ConfirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <button className="loginbtn" type="submit">
          Sign Up
        </button>
        <p>
          Already have an account ?<span><Link to="/">Login here</Link></span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
