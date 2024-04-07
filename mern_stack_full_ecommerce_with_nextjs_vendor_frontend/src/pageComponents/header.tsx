import { useContext } from "react";
import { userContext } from "../contexts/userContext";
import { Popover } from "antd";

const Header = () => {
  const userContextData = useContext(userContext);

  return (
    <>
      <div className="p-5 bg-gray-800 text-bold text-white flex justify-between items-center shadow-2xl">
        <div>{userContextData.business_name}</div>

        <Popover
          content={
            <>
              {userContextData.business_name} <br />
              <div
                className="font-bold p-2 text-red-700 cursor-pointer"
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  window.location.replace("/login");
                }}
              >
                Logout
              </div>
            </>
          }
          trigger={"click"}
        >
          <div className="h-[20px] w-[20px] bg-white rounded-full text-black flex items-center justify-center p-4 font-bold cursor-pointer">
            {userContextData.business_name[0]}
          </div>
        </Popover>
      </div>
    </>
  );
};

export default Header;
