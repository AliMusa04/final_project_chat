import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "users",
  initialState: {
    value: null,
  },
  reducers: {
    SetUser: (state, action) => {
      // return { ...state, value: action.payload };
      state.value = action.payload;
      console.log(action.payload);
    },
  },
});

export const { SetUser } = userSlice.actions;
// export default userSlice.reducer;
