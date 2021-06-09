import "../../styles/posts.css";
import Post from "../post/post";
import React from "react";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map(p => (
        <Post post={p} />
      ))}
    </div>
  );
}
