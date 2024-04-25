"use client";

import { base_url } from "@/config";
import axios from "axios";
import { useState } from "react";
import ProductsDisplayComponent from "./product/ProductsDisplayComponent";

const MoreProducts = () => {
  const [products, setProducts] = useState([]);
  const [paginationPage, setPaginationPage] = useState(2);

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `${base_url}/website/products?pagination_page=${paginationPage}&pagination_limit=3`
      );
      const data: any = [...products, ...response.data.data];
      setProducts(data);
      setPaginationPage(paginationPage + 1);
    } catch (e) {}
  };

  return (
    <>
      {products.map((product: any) => (
        <>
          <div key={product._id} className="lg:col-span-4 col-span-12">
            <ProductsDisplayComponent product={product} /> <br />
          </div>
        </>
      ))}
      <div className="text-center flex justify-center items-center">
        <button className="bg-black p-3 mt-10 text-white" onClick={getProduct}>
          {" "}
          Load more
        </button>
      </div>
    </>
  );
};

export default MoreProducts;
