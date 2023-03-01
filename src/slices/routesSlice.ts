import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type Route } from "~/types/types";

const initialState = {
  routes: [],
  displayRoutes: [],
  exampleRoutes: [],
  value: 0,
} as {
  displayRoutes: Route[];
  exampleRoutes: Route[];
  routes: Route[];
  value: number;
};

const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    setRoutes(state, action: PayloadAction<Route[]>) {
      state.routes = action.payload;
    },
    setExampleRoutes(state, action: PayloadAction<Route[]>) {
      state.exampleRoutes = action.payload;
    },
  },
});

export const { increment, setRoutes, setExampleRoutes } = routesSlice.actions;
export default routesSlice.reducer;
