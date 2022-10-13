import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false
};
const auth = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logIN(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    }
  }
});
export const authActions = auth.actions;
export default auth.reducer;
