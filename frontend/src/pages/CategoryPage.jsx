import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductsCards from "../components/ProductsCards";
import Footer from "../components/Footer";
import { useProductStore } from "../Stores/useProductStore";
const CategoryPage = () => {
  const [ pagination, setPagination ] = useState(1);
  const { CategoryName } = useParams();
  const { getProducts , products , totalePage} = useProductStore()
  const [filter , setfilter] = useState({
    page : 1 , 
    category : CategoryName 
  })
  useEffect(() => {
    setfilter({...filter , page : pagination})
  }, [pagination]);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    getProducts(filter)
  },[filter,getProducts]);
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
        <ProductsCards products={products} />
      </section>
        <div className="flex items-center justify-center ">
        {products.length > 0 && Array.from({ length: totalePage }, (_, index) => (
            <button  className="  border-2 aspect-square border-rose-500 w-10 text-lg rounded " key={index} onClick={() => setPagination(index+1)}>
              {index + 1}
            </button>
          ))}
        </div>
         </main>
  );
}                                                                                                                                                                         

export default CategoryPage;
