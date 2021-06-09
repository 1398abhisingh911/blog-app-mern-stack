import React from "react";
import "../../styles/Header.css";
import Posts from "../Posts/Posts";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">TECHNOCRATS</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://thumbs.dreamstime.com/b/autumn-landscape-nature-background-dried-flowers-water-drops-rain-field-banner-selective-focus-75038244.jpg"
        alt=""
      ></img>
    </div>
  );
}
