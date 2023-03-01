import { configureStore } from "@reduxjs/toolkit";
import routesReducer from "~/slices/routesSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      routes: routesReducer,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
