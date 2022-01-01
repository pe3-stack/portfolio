import { configureStore } from '@reduxjs/toolkit';

import contactSlice from './reducers/contactSlice';
import experienceSlice from './reducers/experienceSlice'
import productSlice from './reducers/products/productSlice';
import signInSlice from './reducers/signInSlice';
import weatherSlice from './reducers/weatherSlice'

 const store = configureStore({
  reducer: {
    products: productSlice,
    user: signInSlice,
    contact: contactSlice,
    experience: experienceSlice,
    weather: weatherSlice
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store;