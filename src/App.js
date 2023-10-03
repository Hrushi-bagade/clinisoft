import React from "react";
import "./App.css";
import PasswordLogin from "./PasswordLogin";
import SignUp from "./SignUp";
import OtpLogin from "./OtpLogin";
import ForgotPassword from "./ForgotgotPassword";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
// import { Col, Container, Row } from "react-bootstrap";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<PasswordLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otp-login" element={<OtpLogin />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
