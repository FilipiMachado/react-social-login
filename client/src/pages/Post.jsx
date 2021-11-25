import React from "react";
import { useLocation } from "react-router";
// Data
import { posts } from "../data";

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const post = posts.find((p) => p.id.toString() === path);

  console.log(post)
  console.log(path);
  console.log(location);
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
