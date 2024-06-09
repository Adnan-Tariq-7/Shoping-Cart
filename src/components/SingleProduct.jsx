import React from "react";
import Rating from "./Rating";
import { CartState } from "../context/Context";

const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="text-black rounded-md overflow-hidden shadow-lg dark:bg-dark-forground dark:text-dark-slate-gray">
      <img
        className="w-full h-64 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="p-6 space-y-2">
        <h1 className="text-2xl font-semibold text-primary ">{product.name}</h1>
        <p>${product.price}</p>
        <Rating rating={product.rating} style={true} />
        {product.fastDelivery ? <p>Fast Delivery</p> : <p>4 Days Delivery</p>}

        <div className="flex justify-end">
          {cart.some((p) => p.id === product.id) ? (
            <button
              className="bg-primary text-white py-2 px-4 md:py-3 md:px-6 text-lg md:text-xl font-semibold rounded-md"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                })
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className={`${
                !product.inStock && "bg-slate-300 text-slate-400"
              } bg-secondary py-2 px-4 md:py-3 md:px-6 text-lg md:text-xl text-white font-semibold rounded-md`}
              disabled={!product.inStock}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
            >
              {!product.inStock ? "Out of Stock" : "Add to Cart"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
