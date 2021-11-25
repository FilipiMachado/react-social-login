import React from "react";
// Data
import { posts } from "../data";

const Post = () => {
  const post = posts[2];
  return (
    <div className="post">
      <img className="post-img" src={post.img} alt="images" />
      <h1 className="post-title">{post.title}</h1>
      <p className="post-desc">{post.desc}</p>
      <p className="post-long-desc">{post.longDesc}</p>
    </div>
  );
};

export default Post;
