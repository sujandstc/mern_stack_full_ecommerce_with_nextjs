"use client";

import axiosInstance from "@/app/utils/axiosInstance";
import { IProduct, IcartItem } from "@/app/utils/interfaces";
import { useEffect, useState } from "react";

const CartItemComponenet = (props: any) => {
  const cartItem: IcartItem = props.cartItem;

  const [quantity, setQuanity] = useState(0);

  const addQuantity = async () => {
    try {
      const response = await axiosInstance.post(`/website/products/addToCart`, {
        product_id: cartItem.product_id._id,
        quantity: 1,
      });
    } catch (e) {}
  };

  const decreaseQuantity = async () => {
    try {
      const response = await axiosInstance.delete(
        `/website/products/removeFromCart/${cartItem._id}`
      );
    } catch (e) {}
  };

  useEffect(() => {
    setQuanity(cartItem.quantity);
  }, []);

  return (
    <>
      {cartItem.product_id.product_name}

      <div className="flex">
        <div
          className="p-5"
          onClick={() => {
            if (quantity < 2) return;
            setQuanity(quantity - 1);
            decreaseQuantity();
          }}
        >
          -
        </div>
        <div className="p-5">{quantity}</div>
        <div
          className="p-5"
          onClick={() => {
            setQuanity(quantity + 1);
            addQuantity();
          }}
        >
          +
        </div>
      </div>
    </>
  );
};

export default CartItemComponenet;
