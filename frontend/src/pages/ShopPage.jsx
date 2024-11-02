import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import products from "../data/products";
import ProductsCards from "../components/ProductsCards";
import FilterSystem from "../components/FilterSystem";
const filters = {
  categories: ["all", "dress", "accessisories", "jewellery", "cosmetics"],
  colors: ["black", "white", "red", "purple", 'gold' , 'blue'],
  priceRange: [
    { label: "under $50", min: 0, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "$100 - $200", min: 100, max: 200 },
    { label: "$200 and above", min: 100, max: Infinity },
  ],
};

const ShopPage = () => {
  const [Products, setProducts] = useState(products);
    const [filter, setFilter] = useState({
      category: "all",
      color: "all",
      priceRange: "",
    });
  const applyFilter = () => {
    let filteredProducts = products;
    // filterage par categorie
    if (filter.category && filter.category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filter.category
      );
    }
    // filterage par couleur
    if (filter.color && filter.color !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === filter.color
      );
    }
    // filterage par prix min et max
    if (filter.priceRange && filter.priceRange !== "") {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.price >= filter.priceRange.min &&
          product.price <= filter.priceRange.max
      );
    }
    setProducts(filteredProducts);
  };
  const clearfilter = ()=>{
    setFilter({
      category: "all",
      color: "all",
      priceRange: "",
    })
  }
  useEffect(()=>{
        applyFilter()
      
      
  } , [filter])
  return (
    <main className="max-w-screen-2xl mx-auto">
      <section className="container mx-auto">
        <section className="flex flex-col items-center justify-center gap-5 bg-[#fae9f1]/60 h-[300px] rounded">
          <h1 className="text-5xl font-play font-bold  py-2">Shop Page</h1>
          <p className="text-xl text-neutral-500 leading-6 w-[400px] md:w-[500px] text-center">
            Discover the latest trends and styles for women. website. Explore
            the latest trends and styles for women. caters to everything from
            classic
          </p>
        </section>
      </section>
      <section className="container mx-auto flex mt-12">
        <div className="w-1/3">
            <FilterSystem  setFilter={setFilter} filter={filter} clearfilter={clearfilter}  filters={filters} /> 
        
        
        </div>
        <div className="flex flex-col gap-5 ">
        <h1 className="text-3xl">Products available {products.length}</h1>
        <ProductsCards products={Products} />
        </div>
      </section>
     
    </main>
  );
};

export default ShopPage;
