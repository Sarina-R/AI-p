import React from "react";
import "./blog.css";
import Article from "../../components/article/Article";
import item from "./data.js ";

const Blog = () => {
  return (
    <div>
      <Article data={item} />
    </div>
  );
};

export default Blog;
