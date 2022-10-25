import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signIn = createAsyncThunk(
  "users/signIn",
  async (user) => {
    return axios
      .post(
        `${process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : ''}/users/login`,
        {
          email: user.email,
          password: user.pw
        }
      )
      .then((response) => {
          return response.data;
      })
      .catch((err) => {
        throw err;
      })
  }
);

export const signInSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuth: false,
    error: '',
    loading: ''
  },
  reducers: {},
  extraReducers: {
    [signIn.pending]: (state) => {
      state.user = {};
      state.loading = "loading";
    },
    [signIn.fulfilled]: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("token", JSON.stringify(state.user.token));
      if (localStorage.getItem("token")) state.isAuth= true;
      state.loading = "loaded";
    },
    [signIn.rejected]: (state, action) => {
      state.loading = "error";
      state.error = action.error.message;
    },
  },
});


export default signInSlice.reducer;