import "../../styles/register.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your Email"
        />
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your Username"
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your Password"
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
