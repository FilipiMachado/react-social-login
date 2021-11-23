import React from "react";
// Components
import Card from "../components/Card";
// Dummy Data
import { posts } from "../data";

const Home = () => {
  return (
    <div className="home">
      {posts.map((post) => (
        <Card key={post.id}/>
      ))}
    </div>
  );
};

export default Home;
