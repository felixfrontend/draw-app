import { configureStore } from "@reduxjs/toolkit";
import tool from "./slices/tool";

const store = configureStore({
  reducer: {
    tool,
  },
});

export default store;
