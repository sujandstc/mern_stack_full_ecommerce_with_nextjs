import axiosInstance from "@/app/utils/axiosInstance";
import { base_url } from "@/config";
import AddToCartComponent from "@/pageComponents/product/addToCartComponent";
import axios from "axios";
import Link from "next/link";

const SingleProductPage = async ({ params }: any) => {
  let response: any;

  try {
    response = await axios.get(`${base_url}/website/products?_id=${params.id}`);
  } catch (e) {
    return (
      <>
        <div className="h-[100vh] w-[100vw] font-bold text-[35px] text-gray-500 flex items-center justify-center ">
          Oh no! Something went wrong, try again later.
        </div>
      </>
    );
  }

  const product_name = response.data.data[0].product_name;

  return (
    <>
      <Link href={"/products"}> {"<"} Products</Link>

      <Link href={"/checkout"}> {"<"} Go to checkout</Link>

      <div className="m-auto max-w-[500px]">{product_name} test</div>

      <AddToCartComponent id={response.data.data[0]._id} />
    </>
  );
};

export default SingleProductPage;
