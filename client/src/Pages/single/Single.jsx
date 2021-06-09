import "../../styles/single.css";
import Sidebar from "../../components/sidebar/sidebar";
import SinglePost from "../../components/singlePost/singlePost";
import React from "react";

export default function Single() {
  return (
    <>
      <div className="single">
        <SinglePost />
        <Sidebar />
      </div>
    </>
  );
}
