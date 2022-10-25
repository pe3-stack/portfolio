import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk(
  "users/signUp",
  async (user) => {
    return axios
      .post(
        "http://localhost:8080/api/users",
        {
          name: user.name,
          email: user.email,
          password: user.pw
        }
      )
      .then((response) => {
        console.log(response)
          return response.data;
      });
  }
);

export const signUpSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {},
  extraReducers: {
    [signUp.pending]: (state) => {
      state.user = {};
      state.loading = "loading";
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.loading = "loaded";
    },
    [signUp.rejected]: (state, action) => {
      state.loading = "error";
      state.error = action.error.message;
    },
  },
});

export default signUpSlice.reducer;
