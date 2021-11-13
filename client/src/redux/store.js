import { configureStore } from '@reduxjs/toolkit';

import experienceSlice from './reducers/experienceSlice'
import weatherSlice from './reducers/weatherSlice'

 const store = configureStore({
  reducer: {
    experience: experienceSlice,
    weather: weatherSlice
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store;