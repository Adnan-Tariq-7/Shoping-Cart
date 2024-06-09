import React from "react";
import { CartState } from "../context/Context";
import { Button, Rating } from "../components";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="flex justify-between p-5 w-full max-lg:flex-col-reverse gap-5 ">
      <div className="flex flex-col gap-5 flex-[5]  ">
        {cart.map((val,i) => (
          <div key={i} className="flex border justify-between items-center max-md:flex-col gap-5  p-5">
            <img src={val.image} alt="image" className="w-[200px]" />
            <h1 className="text-primary text-2xl font-bold">{val.name}</h1>
            <Rating rating={val.rating} style={true} />
            <div
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: val })
              }
              className="dark:text-dark-slate-gray"
            >
              <MdDelete size={30} />
            </div>
            <div className="flex justify-center items-center gap-4 ">
              <button
                className="w-6 h-6 bg-primary text-white text-2xl rounded-full flex justify-center items-center"
                onClick={() =>
                  val.qty < val.inStock &&
                  dispatch({
                    type: "CHANGE_CART_QTY",
                    payload: { id: val.id, qty: val.qty + 1 },
                  })
                }
              >
                +
              </button>
              <p className="w-5 h-5 text-center dark:text-dark-slate-gray">{val.qty}</p>
              <button
                className="w-6 h-6 bg-primary text-2xl text-white rounded-full flex justify-center items-center"
                onClick={() =>
                  val.qty > 1 &&
                  dispatch({
                    type: "CHANGE_CART_QTY",
                    payload: { id: val.id, qty: val.qty - 1 },
                  })
                }
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="right max-w-fit text-white rounded-md p-5 space-y-5 dark:bg-dark-forground max-md:max-h-fit  max-h-[200px] bg-primary">
        <h1 className="text-2xl font-semibold ">
          Total Products: {cart.reduce((acc, val) => acc + Number(val.qty), 0)}
        </h1>
        <p className="text-xl font-semibold">
          Total Price: {cart.reduce((acc, val) => acc + Number(val.price)*val.qty, 0)}
        </p>
        <Button name={'Proceed to Checkout'}/>
      </div>
    </div>
  );
};

export default Cart;
