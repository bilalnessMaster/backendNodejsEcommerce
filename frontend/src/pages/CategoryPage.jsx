import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductsCards from "../components/ProductsCards";
import Footer from "../components/Footer";
const CategoryPage = () => {
  const { CategoryName } = useParams();
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(data.length);
  useEffect(() => {
    setData(
      products.filter(
        (product) => product.category === CategoryName.toLowerCase()
      )
    );
  }, [CategoryName]);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main className="max-w-screen-2xl mx-auto">
      <section className="container mx-auto space-y-12">
        <section className="flex flex-col items-center justify-center gap-5 bg-[#fae9f1]/60 h-[300px] rounded">
          <h1 className="text-5xl font-play font-bold bg-gradient-to-b from-red-200 to-red-600 text-transparent bg-clip-text py-2">
            {CategoryName.charAt(0).toUpperCase() + CategoryName.slice(1)}
          </h1>
          <p className="text-xl text-neutral-500 leading-6 w-[400px] md:w-[500px] text-center">
            Discover the latest trends and styles for women. website. Explore
            the latest trends and styles for women. caters to everything from
            classic
          </p>
        </section>
        <ProductsCards products={data} />
      </section>
         </main>
  );
}                                                                                                                                                                         

export default CategoryPage;
