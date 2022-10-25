import { configureStore } from '@reduxjs/toolkit';

<<<<<<< HEAD
=======
import contactSlice from './reducers/contactSlice';
>>>>>>> parent of a52bb13 (massive update)
import experienceSlice from './reducers/experienceSlice'
import weatherSlice from './reducers/weatherSlice'

 const store = configureStore({
  reducer: {
<<<<<<< HEAD
=======
    products: productSlice,
    user: signInSlice,
    contact: contactSlice,
>>>>>>> parent of a52bb13 (massive update)
    experience: experienceSlice,
    weather: weatherSlice
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store;