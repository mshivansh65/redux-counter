import { createSlice } from "@reduxjs/toolkit";
const defaultState = {
  counter: 0,
  toggleState: true
};
const counterSlice = createSlice({
  name: "counter",
  initialState: defaultState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementByAmount(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleState(state) {
      state.toggleState = !state.toggleState;
    }
  }
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
