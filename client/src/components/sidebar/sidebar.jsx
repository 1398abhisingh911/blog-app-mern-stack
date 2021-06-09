import "../../styles/sidebar.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://miro.medium.com/max/560/1*MccriYX-ciBniUzRKAUsAw.png"
          alt=""
        ></img>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officia
          autem quisquam facilis rerum?
        </p>
        <div className="sidebarItem">
          <span className="sidebarTitle">Categories</span>
          <ul className="sidebarList">
            {cats.map(c => (
              <Link to={`/?cat=${c.name}`} className="link">
                <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">Follow us</span>
          <div className="sidebarSocial">
            <i className=" sidebarIcon fab fa-facebook-square"></i>
            <i className=" sidebarIcon fab fa-linkedin"></i>
            <i className=" sidebarIcon fab fa-instagram-square"></i>
            <i className=" sidebarIcon fab fa-twitter-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
