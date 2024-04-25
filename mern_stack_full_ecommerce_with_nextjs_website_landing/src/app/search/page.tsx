"use client";

import { base_url } from "@/config";
import ProductsDisplayComponent from "@/pageComponents/product/ProductsDisplayComponent";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const ProductsPage = (data: any) => {
  const searchData = data.searchParams.search;
  const textRef: any = useRef();

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let response: any;

    try {
      response = await axios.get(
        `${base_url}/website/products?search=${searchData}`
      );
      setProducts(response.data.data);
    } catch (e) {}
  };

  const searchWithText = async () => {
    let response: any;

    try {
      response = await axios.get(
        `${base_url}/website/products?search=${textRef.current.value}`
      );
      setProducts(response.data.data);
    } catch (e) {}
  };

  useEffect(() => {
    getProducts();
    textRef.current.value = searchData;
  }, []);

  return (
    <section id="products" className="container mx-auto mt-28">
      <div className="2xl:mx-28  lg:mx-4 mx-2 ">
        <h1 className="text-4xl text-center my-8 font-bold">
          Search Results:{" "}
        </h1>
        <div>
          <input
            type="text"
            className="p-5 border-solid border-gray-400 border-2 w-[80vw]"
            ref={textRef}
          ></input>

          <button
            className="bg-black p-2 m-2 rounded-lg text-white"
            onClick={searchWithText}
          >
            Search
          </button>
        </div>{" "}
        <br />
        {products.length} Results found! <br />
        <hr className="mb-10" />
        <div className="mt-10 grid grid-cols-12 gap-4">
          {products.map((product: any, index: any) => (
            <div key={index} className="lg:col-span-4 col-span-12">
              <ProductsDisplayComponent product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
