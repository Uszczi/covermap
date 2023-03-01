import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  value: 0,
} as {
  entities: Array<any>;
  value: number;
};

const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
  },
});

export default routesSlice.reducer;
