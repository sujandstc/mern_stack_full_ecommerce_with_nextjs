"use client";

import axiosInstance from "@/app/utils/axiosInstance";
import axios from "axios";
import { useState } from "react";

const AddToCartComponent = (props: any) => {
  const [isLoading, setisLoading] = useState(false);
  const [quantity, setQuanity] = useState(1);

  const addToCart = async () => {
    setisLoading(true);
    try {
      const response = await axiosInstance.post(`/website/products/addToCart`, {
        product_id: props.id,
        quantity: quantity,
      });
      setisLoading(false);
    } catch (e) {
      setisLoading(false);
    }
  };

  return (
    <>
      <div className="flex cursor-pointer">
        <div className="flex">
          <div
            className="p-5"
            onClick={() => {
              if (quantity < 2) return;
              setQuanity(quantity - 1);
            }}
          >
            -
          </div>
          <div className="p-5">{quantity}</div>
          <div
            className="p-5"
            onClick={() => {
              setQuanity(quantity + 1);
            }}
          >
            +
          </div>
        </div>

        <button
          className="p-3 bg-red-500 text-black"
          onClick={() => {
            addToCart();
          }}
        >
          Add to cart
        </button>
      </div>
    </>
  );
};
export default AddToCartComponent;
