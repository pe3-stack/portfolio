import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './reducers/contactSlice';

import experienceSlice from './reducers/experienceSlice'
import weatherSlice from './reducers/weatherSlice'

 const store = configureStore({
  reducer: {
    contact: contactSlice,
    experience: experienceSlice,
    weather: weatherSlice
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store;