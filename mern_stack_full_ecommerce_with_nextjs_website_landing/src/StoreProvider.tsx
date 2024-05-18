"use client";

import { Provider } from "react-redux";
import store from "./store";

const StoreProvider = (props: any) => {
  return (
    <>
      <Provider store={store}>{props.children}</Provider>
    </>
  );
};

export default StoreProvider;
