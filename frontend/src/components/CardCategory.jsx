import React from "react";
import { Link } from "react-router-dom";

const CardCategory = ({name , path  , img}) => {
  return (
    <Link className="w-32  " to={`/category/${path}`}>
      <div className="flex flex-col items-center gap-2 font-play rounded-full overflow-hidden ring ring-gray-400/25 " key={name}>
        <img src={img} className="hover:scale-110 transition-all duration-300 " alt={name} />
   
      </div>
        <h2 className="font-play text-center mt-2">{name}</h2>
    </Link>
  );
};

export default CardCategory;
