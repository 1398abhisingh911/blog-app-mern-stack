import "../../styles/post.css";
import React from "react";

export default function post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://www.clickandlearnphotography.com/wp-content/uploads/2019/01/using-natural-light-photography.jpg"
        alt=""
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour Ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia non
        similique reprehenderit, adipisci laudantium, officia voluptas obcaecati
        ducimus at dolorem rem quisquam quis, debitis impedit voluptatem est
        repellendus deserunt! Odio?
      </p>
    </div>
  );
}
