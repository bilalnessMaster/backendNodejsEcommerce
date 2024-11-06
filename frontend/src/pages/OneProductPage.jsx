import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products.json";
import RattingSystem from "../components/RattingSystem";
import { useCarteStore } from "../Stores/useCarteStore";
import { useProductStore } from "../Stores/useProductStore";

const OneProductPage = () => {
  const {getSingleProduct , singleProduct}  =useProductStore()
  const { id } = useParams();
 
  const {addToCart } = useCarteStore();

  // useEffect(() => {
  //   const foundProduct = products.find((item) => item.id == id);
  //   if (foundProduct) {
  //     setProduct(foundProduct);
  //   }
  // }, [id]);
  useEffect(()=>{
    getSingleProduct(id)
  }, [getSingleProduct])

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const setCartItem = (id) => {
    console.log(id);
    
    if (singleProduct) {
      addToCart(id);
    }
  };
  
  

  if (!singleProduct) {
    return <div>Loading...</div>;
  }

  return (
   
    <main className="max-w-screen-2xl mx-auto space-y-12">
      <section className="container mx-auto space-y-12">
        <section className="flex flex-col items-center justify-center gap-5 bg-[#fae9f1]/60 h-[300px] rounded">
          <h1 className="text-5xl font-play font-bold  py-2">
            Purchase with ease
          </h1>
          <p className="text-xl text-neutral-500 leading-6  flex text-center">
            <Link to="/" className="hover:text-red-500">
              Home
            </Link>
            <i className="ri-arrow-right-s-line"></i>
            <Link className="hover:text-red-500" to="/shop">
              Shop
            </Link>
            <i className="ri-arrow-right-s-line"></i>
            {singleProduct.name}
          </p>
        </section>
        <article className="flex flex-col md:flex-row gap-3 md:gap-3 px-2 md:px-0 bg-gray-50 rounded">
          <div className="w-full md:w-1/2">
            <img
              src={singleProduct.imageURL}
              alt={singleProduct.name}
              className="rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col   gap-3">
            <div className="">
              <div className="flex items-end gap-1 justify-between pr-2">
              <h1 className="font-semibold text-4xl font-play"> {singleProduct.name}</h1>
               
                <h1 className="font-semibold text-3xl">${singleProduct.price}</h1>
                {singleProduct?.oldPrice !== 0 && (
                  <p className="hidden md:blockfont-medium text-2xl">
                    <span className=" line-through text-gray-600/65">
                      ${singleProduct.oldPrice}
                    </span>
                  </p>
                )}
              </div>
              <p className="text-sm text-gray-400">Price shown before tax</p>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <h1 className="font-medium text-xl ">Description</h1>
                <p className="text-gray-500/90 w-[600px]">{singleProduct.description}</p>
              </div>
              <div>
                <h1 className="font-medium text-xl">Color:</h1>
                <p
                  style={{ backgroundColor: singleProduct.color }}
                  className="px-4 py-1 w-fit rounded font-mono capitalize font-bold"
                >
                  {singleProduct.color}
                </p>
              </div>
              <div>
                <h1 className="font-medium text-xl">Rating:</h1>
                <RattingSystem rating={singleProduct.rating} />
              </div>
            </div>
            <div>
              <button
                onClick={() => setCartItem(singleProduct._id)}
                className="text-3xl bg-red-400   px-4 py-2 rounded mb-2 text-red-900"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default OneProductPage;
