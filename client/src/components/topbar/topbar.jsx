import React from "react";
import "../../styles/topbar.css";
import { Link } from "react-router-dom";
export default function topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="TopLeft">
        <i className=" topIcon fab fa-facebook-square"></i>
        <i className=" topIcon fab fa-linkedin"></i>
        <i className=" topIcon fab fa-instagram-square"></i>
        <i className=" topIcon fab fa-twitter-square"></i>
      </div>
      <div className="TopCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              {user && "Logout"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="TopRight">
        {user ? (
          <img
            className="topImg"
            src="https://miro.medium.com/max/560/1*MccriYX-ciBniUzRKAUsAw.png"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fab fa-searchengin"></i>
      </div>
    </div>
  );
}
