import React from "react";
import "./blog.css";
import Article from "../../components/article/Article";
import data from "./data";
import blog01 from "../../assets/blog01.png";

const Blog = () => {
  const item = [
    {
      id: 1,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      img: blog01,
    },
  ];
  return (
    <div className="blog" id="blog">
      <h1>A lot is happening, We are blogging about it.</h1>
      <div className="grid">
        <div className="grid-aa">
          {item.map((items) => (
            <Article
              {...items}
              title={items.title}
              text={items.text}
              key={items.id}
            />
          ))}
        </div>
        <div className="right-a">
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
    </div>
  );
};

export default Blog;
