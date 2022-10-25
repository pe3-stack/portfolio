import { configureStore } from '@reduxjs/toolkit';

import themeSlice from './reducers/theme/themeSlice';
import contactSlice from './reducers/contactSlice';
import experienceSlice from './reducers/experienceSlice'
import productSlice from './reducers/products/productSlice';
import signInSlice from './reducers/signInSlice';
import weatherSlice from './reducers/weatherSlice'

 const store = configureStore({
  reducer: {
    theme: themeSlice,
    products: productSlice,
    user: signInSlice,
    contact: contactSlice,
    experience: experienceSlice,
    weather: weatherSlice
  },
  devTools: true,
})

export default store;