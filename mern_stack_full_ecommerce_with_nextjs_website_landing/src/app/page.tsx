import ProductsDisplayComponent from "@/pageComponents/product/ProductsDisplayComponent";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { base_url } from "@/config";
import { FaChevronRight } from "react-icons/fa6";

interface IMainPageHeading {
  heading: string;
  description: string;
}

const MainPageHeading = ({ heading, description }: IMainPageHeading) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-2">{heading}</h1>
      <p>{description}</p>
    </div>
  );
};

const MainPage = async () => {
  let responseRandom: any;
  let responseTopRandom: any;

  try {
    responseRandom = await axios.get(
      `${base_url}/website/products/random?count=3`
    );
  } catch (e) {
    return (
      <>
        <div className="h-[100vh] w-[100vw] font-bold text-[35px] text-gray-500 flex items-center justify-center ">
          Oh no! Something went wrong, try again later.
        </div>
      </>
    );
  }

  try {
    responseTopRandom = await axios.get(
      `${base_url}/website/products/random?count=3&top=true`
    );
  } catch (e) {
    return (
      <>
        <div className="h-[100vh] w-[100vw] font-bold text-[35px] text-gray-500 flex items-center justify-center ">
          Oh no! Something went wrong, try again later.
        </div>
      </>
    );
  }

  return (
    <>
      <section id="home">
        <div
          className="bg-cover mt-14 w-full  h-[70vh] bg-top bg-no-repeat"
          style={{
            backgroundImage: `url('https://www.madam-classic.com/image/cachewebp/catalog/001-DEMO/arise-home-banner-2-1903x595.webp')`,
          }}
        ></div>
      </section>
      <section id="products" className=" mt-10 container mx-auto">
        <div className="2xl:mx-28  lg:mx-4 mx-2 ">
          <MainPageHeading
            heading="Our Products"
            description="Check out our latest products."
          />
          <div className="mt-10 grid grid-cols-12 gap-4">
            {responseRandom.data.data.map((product: any, index: any) => (
              <div key={index} className="lg:col-span-4 col-span-12">
                <ProductsDisplayComponent product={product} />
              </div>
            ))}
          </div>
          <div className=" flex justify-end mt-10">
            <Link
              href={"/products"}
              className="flex-row flex mt-5 gap-[-20px] items-center"
            >
              <div className="font-bold text-[30px]"> Explore </div>
              <FaChevronRight className="mr-[-20px]" size={30} />{" "}
              <FaChevronRight className="mr-[-20px]" size={40} />
              <FaChevronRight className="" size={50} />
            </Link>
          </div>
        </div>
      </section>

      <section id="top_products" className="container mt-10 mx-auto">
        <div className="2xl:mx-28  lg:mx-4 mx-2 ">
          {" "}
          <MainPageHeading
            heading="Top Products"
            description="Check out our top products."
          />
          <div className="mt-10 grid grid-cols-12 gap-4">
            {responseTopRandom.data.data.map((product: any, index: any) => (
              <div key={index} className="lg:col-span-4 col-span-12">
                <ProductsDisplayComponent product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
