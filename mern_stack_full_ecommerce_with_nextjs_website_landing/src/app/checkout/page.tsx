"use client";

import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import CartItemComponenet from "@/pageComponents/product/cartItemsComponent";
import { IProduct, IcartItem } from "../utils/interfaces";

const CheckoutPage = () => {
  const [isLoading, setisLoading] = useState(false);
  const [cartItems, setcartItems] = useState([]);

  const getCartItems = async () => {
    setisLoading(true);
    try {
      const response = await axiosInstance.get(`/website/products/cart`);
      setisLoading(false);
      setcartItems(response.data.data);
    } catch (e) {
      setisLoading(false);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <>
      Checkout: <br />
      <br />
      {cartItems.map((cartItem: IcartItem) => (
        <CartItemComponenet cartItem={cartItem} />
      ))}
    </>
  );
};

export default CheckoutPage;
