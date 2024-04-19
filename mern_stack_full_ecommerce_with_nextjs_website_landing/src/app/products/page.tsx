import { base_url } from "@/config";
import axios from "axios";
import Link from "next/link";

const ProductsPage = async () => {
  let response: any;

  try {
    response = await axios.get(`${base_url}/website/products`);
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
      All products:{" "}
      <div className="flex flex-wrap items-center justify-center">
        {response.data.data.map((el: any) => (
          <>
            <Link href={`/product/${el._id}`}>
              <div className="p-2 font-bold shadow-lg h-[200px] w-[200px] flex items-center flex-col justify-center cursor-pointer">
                {el.product_name}

                <span className=" text-green-800 font-semibold ">
                  Rs. {el.product_price}
                </span>
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
