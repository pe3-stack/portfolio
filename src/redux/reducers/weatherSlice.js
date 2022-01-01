import {
    createSlice,
    createAsyncThunk,
  } from "@reduxjs/toolkit";
  import axios from "axios";
  

  export const getWeather = createAsyncThunk(
    "weather/getWeather",
    async (userLoc) => {
      //console.log(userLoc)
         const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${userLoc[0]}&lon=${userLoc[1]}&exclude=minutely,hourly,daily&appid=0fb8990744a3d0ca16b1ecd17a7df8d7`);
         return response.data;
    }
  );
  
  const weatherSlice = createSlice({
    name: "weather",
    initialState: {
      data: [],
      loading: "idle",
      error: "",
    },
    reducers: {},
    extraReducers:  {
      [getWeather.pending]: (state) => {
        state.data = [];
        state.loading = "loading";
      },
      [getWeather.fulfilled]: (state, {payload}) => {
        state.data = payload;
        state.loading = "loaded";
      },
      [getWeather.rejected]: (state, action) => {
        state.loading = "error";
        state.error = action.error.message;
      }
    }
  });
    
export default weatherSlice.reducer;