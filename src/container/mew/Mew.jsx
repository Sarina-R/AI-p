import React from "react";
import "./mew.css";
import Features from "../../components/feature/Features";

const items = [
  {
    id: 1,
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    id: 2,
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    id: 3,
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    id: 4,
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
  },
];

const Mew = () => {
  return (
    <div className="section-m">
      <div className="left">
        <h1>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="right">
        {items.map((item) => (
          <Features
            {...item}
            title={item.title}
            text={item.text}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Mew;
