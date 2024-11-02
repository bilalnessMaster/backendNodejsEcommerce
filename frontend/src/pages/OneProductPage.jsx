import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products.json";
import RattingSystem from "../components/RattingSystem";
import { useCarteStore } from "../Stores/useCarteStore";

const OneProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const { cartItems, TotalPrice, calculateTotal, addToCart } = useCarteStore();

  useEffect(() => {
    const foundProduct = products.find((item) => item.id == id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const setCartItem = (id, quantity) => {
    if (product) {
      addToCart(id, quantity);
      console.log("Added to cart:", cartItems, TotalPrice);
    }
  };

  if (!product) {
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
            {product.name}
          </p>
        </section>
        <article className="flex flex-col md:flex-row gap-3 md:gap-3 px-2 md:px-0 bg-gray-50 rounded">
          <div className="w-full md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between  gap-3">
            <div className="">
              <div className="flex items-end gap-1">
                <h1 className="font-semibold text-4xl">${product.price}</h1>
                {product.oldPrice && (
                  <p className="font-medium text-2xl">
                    <span className="line-through text-gray-600/65">
                      ${product.oldPrice}
                    </span>
                  </p>
                )}
              </div>
              <p className="text-sm text-gray-400">Price shown before tax</p>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <h1 className="font-medium text-xl">Description:</h1>
                <p className="text-gray-500/90">{product.description}</p>
              </div>
              <div>
                <h1 className="font-medium text-xl">Color:</h1>
                <p
                  style={{ backgroundColor: product.color }}
                  className="px-4 py-1 w-fit rounded font-mono capitalize font-bold"
                >
                  {product.color}
                </p>
              </div>
              <div>
                <h1 className="font-medium text-xl">Rating:</h1>
                <RattingSystem rating={product.rating} />
              </div>
            </div>
            <div>
              <button
                onClick={() => setCartItem(product, 1)}
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
