import { configureStore } from "@reduxjs/toolkit";
import orders from './Reducer'

export const store = configureStore({
    reducer: {
      //   general syntax to pass all reducer to store
      orders: orders,
    },
});