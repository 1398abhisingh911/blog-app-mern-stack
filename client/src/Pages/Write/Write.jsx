import "../../styles/write.css";

import React from "react";

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://media.istockphoto.com/photos/tree-foliage-in-beautiful-morning-light-with-sunlight-in-summer-picture-id1204371996?b=1&k=6&m=1204371996&s=170667a&w=0&h=5PLwUlnY31n9sh0J7bcrmLa95kZRSY5p5s5KqwtCryE="
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileinput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell Your Story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
