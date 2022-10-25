import {
    createSlice,
    createAsyncThunk,
  } from "@reduxjs/toolkit";
  import axios from "axios";
  require('dotenv').config();
  
  export const getContact = createAsyncThunk(
      'contact/getContact',
      async () => {
          const response = await axios.get(`${process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : ''}/contact`);
          return response.data[0];
      }
      
  );
  
  // ACCORDION EXPERIENCE
  const contactSlice = createSlice({
      name: "contact",
      initialState: {
        profile: {},
        loading: "idle",
        error: "",
      },
      reducers: {},
      extraReducers:  {
        [getContact.pending]: (state) => {
          state.profile = {};
          state.loading = "loading";
        },
        [getContact.fulfilled]: (state, { payload }) => {
          state.profile = payload.profile;
          state.loading = "loaded";
        },
        [getContact.rejected]: (state, action) => {
          state.loading = "error";
          state.error = action.error.message;
        }
      },
  });
    
  
  export default contactSlice.reducer;