import { configureStore } from "@reduxjs/toolkit";
import RenderData from "./RenderData";

export default configureStore({
  reducer: {
    allData: RenderData,
  },
});
