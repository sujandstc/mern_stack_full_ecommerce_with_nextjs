import { useEffect } from "react";
import Sidebar from "../pageComponents/sidebar";
import Header from "../pageComponents/header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../nestedPages/dashboard";
import Products from "../nestedPages/products";
import Orders from "../nestedPages/orders";

const MainPage = () => {
  useEffect(() => {
    const getAccessToken = localStorage.getItem("accessToken");
    if (!getAccessToken) {
      window.location.replace("/login");
    }
  }, []);

  return (
    <>
      <div className="w-[100vw] h-[100vh]  flex">
        <div className="  h-[100vh] w-[20%]">
          <Sidebar />
        </div>

        <div className=" h-[100vh]  w-[80%]">
          <div className="">
            <Header />
          </div>

          <div className="">
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
