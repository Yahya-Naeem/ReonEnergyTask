import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./counter";

export default configureStore({
  reducer: {
    Data: DataReducer
  }
});
