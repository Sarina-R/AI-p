import React from "react";
import "./article.css";

const Article = ({ title, date, img }) => {
  return (
    <div className="grid-a">
      <div className="img-a">
        <img src={img} />
      </div>

      <div className="text-container">
        <p>{date}</p>
        <h2>{title}</h2>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
