import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './redux/store'
import {configureStore} from '@reduxjs/toolkit'
import reducer from './redux/reducers/experienceSlice'


/****************/

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(),
    preloadedState,
    enhancers: [],
  })

  return store
}


ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
