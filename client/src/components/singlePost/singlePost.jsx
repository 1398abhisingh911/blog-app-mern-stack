import "../../styles/singlePost.css";

import React from "react";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://previews.123rf.com/images/ongkachakon/ongkachakon1507/ongkachakon150700149/43126204-bamboo-leaf-and-green-nature-light-bokeh-background.jpg"
          alt=""
          className="singlePostImage"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Abhijeet</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, quibusdam! Rem, vitae ullam. Ut voluptas eum veniam
          possimus ullam consectetur magni. Iste incidunt temporibus fugit sed
          omnis! Nam, ratione officia!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reprehenderit, quibusdam! Rem, vitae ullam. Ut
          voluptas eum veniam possimus ullam consectetur magni. Iste incidunt
          temporibus fugit sed omnis! Nam, ratione officia! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Reprehenderit, quibusdam! Rem,
          vitae ullam. Ut voluptas eum veniam possimus ullam consectetur magni.
          Iste incidunt temporibus fugit sed omnis! Nam, ratione officia! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
          quibusdam! Rem, vitae ullam. Ut voluptas eum veniam possimus ullam
          consectetur magni. Iste incidunt temporibus fugit sed omnis! Nam,
          ratione officia!
        </p>
      </div>
    </div>
  );
}
