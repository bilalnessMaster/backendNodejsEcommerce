import React from "react";
import card1 from "../assets/card-1.png";
import card2 from "../assets/card-2.png";
import card3 from "../assets/card-3.png";
import CardFashion from "./CardFashion";

const fashion = [
  {
    id: 1,
    img: card1,
    trend: "2024 Trending",
    title: "Women Fashion",
  },
  {
    id: 2,
    img: card2,
    trend: "2024 Trending",
    title: "Women Dresses",
  },
  {
    id: 3,
    img: card3,
    trend: "2024 Trending",
    title: "Women casuals",
  },
];
const Fashion = () => {
  return (
    <section className="container mx-auto flex flex-col items-center gap-12 mt-12 ">
      <h1 className="text-5xl  font-play font-bold">Fashion</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {fashion.map(({ id, img, title, trend }) => {
          return <CardFashion key={id} img={img} trend={trend} title={title} />;
        })}
      </div>
    </section>
  );
};

export default Fashion;
