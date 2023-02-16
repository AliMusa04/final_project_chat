import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slice/userSlice/userSlice";

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
export default store;
