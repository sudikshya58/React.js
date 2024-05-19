import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null, 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetail: (state, action) => {
    console.log("Action Payload:", action.payload); 
      state.userData = action.payload;
    },
  },
});

export const { setUserDetail } = userSlice.actions;
export default userSlice.reducer;
