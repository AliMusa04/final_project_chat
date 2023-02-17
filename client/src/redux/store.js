import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice/userSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});
export default store;
