import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = createAsyncThunk(
//   "users/getAllUsers",
//   async (thunkApi) => {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users?_limit=5"
//     );
//     const data = await response.json();
//     return data;
//   }
// );

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
