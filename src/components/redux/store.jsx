import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../../components/feateure/loginSlice";

export const store = configureStore({
  reducer: {
    loginR: LoginReducer,
  },
});

export default store;
