import React from "react";

const Card = ({ post }) => {
  return (
    <div className="card">
      <span className="card-title">{post.title}</span>
      <img src={post.img} alt="" className="card-img" />
      <p className="card-desc">{post.desc}</p>
      <button className="card-button">Read More</button>
    </div>
  );
};

export default Card;
