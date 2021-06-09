import "../../styles/sidebar.css";
import React from "react";

export const sidebar = () => {
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
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
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
};
export default sidebar;
