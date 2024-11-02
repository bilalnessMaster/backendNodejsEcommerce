import React from "react";
import category1 from "../assets/category-1.jpg";
import category2 from "../assets/category-2.jpg";
import category3 from "../assets/category-3.jpg";
import category4 from "../assets/category-4.jpg";
import { Link } from "react-router-dom";
import CardCategory from "./CardCategory";
const categories = [
  { name: "Accessories", path: "accessories", img: category1 },
  { name: "Dress collection", path: "dress", img: category2 },
  { name: "Jewellery", path: "jewellery", img: category3 },
  { name: "Cosmetics", path: "cosmetics", img: category4 },
];
const Categories = () => {
  return (
    <section className="container mx-auto flex flex-col items-center gap-12 mt-12">
        <h1 className="text-5xl  font-play font-bold">Categories</h1>
    <div className=" grid grid-cols-2 lg:grid-cols-4 gap-16">
      {categories.map(({ name, path, img }) => {
        return (
           <CardCategory key={path} name={name} path={path} img={img} />
        );
      })}

    </div>
    </section>
  );
};

export default Categories;
