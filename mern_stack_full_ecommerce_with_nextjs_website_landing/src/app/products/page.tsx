import axios from "axios";
import Link from "next/link";

const ProductsPage = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/v1/website/products"
  );

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
