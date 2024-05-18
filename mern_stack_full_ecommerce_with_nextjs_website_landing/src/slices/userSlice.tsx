import { createSlice } from "@reduxjs/toolkit/react";

interface IUserData {
  email?: string;
  name?: string;
}

export interface IUserSliceData {
  isLogged: boolean;
  userData: IUserData;
}

const userSliceState: IUserSliceData = { isLogged: false, userData: {} };

const userSlice = createSlice({
  name: "user",
  initialState: userSliceState,
  reducers: {
    login: (state, actions) => {
      const payload = actions.payload;
      state.userData = payload;
      state.isLogged = true;
    },

    logout: (state, actions) => {
      state.isLogged = false;
      state.userData = {};
      localStorage.removeItem("accessToken");
    },
  },
});

export default userSlice;
