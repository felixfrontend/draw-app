import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tool: "pen",
};

const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    setTool: (state, action) => {
      state.tool = action.payload;
    },
  },
});

const { actions, reducer } = toolSlice;
export default reducer;
export const { setTool } = actions;
