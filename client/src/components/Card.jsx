import React from "react";
// React Router
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="card">
      <Link className="link" to={`/post/${post.id}`}>
        <span className="card-title">{post.title}</span>
        <img src={post.img} alt="" className="card-img" />
        <p className="card-desc">{post.desc}</p>
        <button className="card-button">Leia Mais</button>
      </Link>
    </div>
  );
};

export default Card;
