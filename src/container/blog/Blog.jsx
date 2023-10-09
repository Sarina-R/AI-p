import React from "react";
import "./blog.css";
import Article from "../../components/article/Article";
import data from "./data";
import ai from "../../assets/ai.png";
const Blog = () => {
  return (
    <div className="blog">
      <h1>A lot is happening, We are blogging about it.</h1>
      <div className="grid">
        {data.map((datas) => (
          <Article
            {...datas}
            title={datas.title}
            text={datas.text}
            key={datas.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
