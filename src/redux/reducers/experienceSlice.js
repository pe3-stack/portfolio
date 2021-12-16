import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getExperience = createAsyncThunk(
    'experience/getExperience',
    async () => {
        const response = await axios.get("http://nodejs-env.eba-quc3ihcv.us-east-2.elasticbeanstalk.com/info");  //http://nodejs-env.eba-quc3ihcv.us-east-2.elasticbeanstalk.com/info
        return response.data;
    }
);

// ACCORDION EXPERIENCE
const experienceSlice = createSlice({
    name: "experience",
    initialState: {
      categories: [],
      loading: "idle",
      error: "",
    },
    reducers: {},
    extraReducers:  {
      [getExperience.pending]: (state) => {
        state.categories = [];
        state.loading = "loading";
      },
      [getExperience.fulfilled]: (state, { payload }) => {
        state.categories = payload;
        state.loading = "loaded";
      },
      [getExperience.rejected]: (state, action) => {
        state.loading = "error";
        state.error = action.error.message;
      }
    },
});
  

  export default experienceSlice.reducer;