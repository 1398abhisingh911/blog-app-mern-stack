import "../../styles/settings.css";
import React from "react";
import Sidebar from "../../components/sidebar/sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://media.istockphoto.com/photos/tree-foliage-in-beautiful-morning-light-with-sunlight-in-summer-picture-id1204371996?b=1&k=6&m=1204371996&s=170667a&w=0&h=5PLwUlnY31n9sh0J7bcrmLa95kZRSY5p5s5KqwtCryE="
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsIconPP far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Abhijeet" />
          <label>Email</label>
          <input type="email" placeholder="1398abhisingh911@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
