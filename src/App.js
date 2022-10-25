import React, { useState, useCallback, useEffect } from "react";

import SideDrawer from "./components/navbar/navbar";
import Navbar from "./components/navbar/navbar";
<<<<<<< HEAD
import Main from "./containers/Main/main";

import Accordion from "./components/accordion/accordion";
=======


import Main from "./containers/Main/main";
// Market
import Market from "./containers/market/market";
>>>>>>> parent of a52bb13 (massive update)

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";

<<<<<<< HEAD
import {  getExperience } from "./redux/reducers/experienceSlice";
import {  getWeather } from "./redux/reducers/weatherSlice";
 
library.add(fab, faCheckSquare, faCoffee);

function App() {
=======
// import {  getExperience } from "./redux/reducers/experienceSlice";
import { getWeather } from "./redux/reducers/weatherSlice";

library.add(fab, faCheckSquare, faCoffee);

const App = () => {
>>>>>>> parent of a52bb13 (massive update)
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const toggleSideDrawer = useCallback(() => {
    setShowSideDrawer((value) => !value);
  }, [setShowSideDrawer]);

  const dispatch = useDispatch();
<<<<<<< HEAD
  const experience = useSelector(state => state.experience);
  const weather = useSelector(state => state.weather);

  useEffect(() => {
              
    let userLocation = [];
=======

  const weather = useSelector((state) => state.weather);

  useEffect(() => {
    let userLocation;
>>>>>>> parent of a52bb13 (massive update)

    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
    };
    const geoSuccess = (position) => {
<<<<<<< HEAD
      userLocation = [position.coords.latitude, position.coords.longitude];
      console.log('geolocation available')
      
      dispatch(getWeather(userLocation));
      
=======
     userLocation = [position.coords.latitude, position.coords.longitude];
     //dispatch(getWeather(userLocation));
     setInterval(() => {
      //dispatch(getWeather(userLocation));
     }, 30 * 60 * 1000 )
     
>>>>>>> parent of a52bb13 (massive update)
    };
    const geoError = (error) => {
      console.log('geolocation unavailable')
      return error.message;
    };
    
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options)

    dispatch(getExperience());
  }, [dispatch]);

  console.log(weather)

  let sideDrawer;
  if (showSideDrawer) {
    sideDrawer = (
      <SideDrawer
        show={showSideDrawer}
        toggle={toggleSideDrawer}
        clicked={toggleSideDrawer}
      />
    );
  }

  let curr_temp, wth_icon, city;
<<<<<<< HEAD
  if(weather.data.current !== undefined) {
=======
  if (weather.data.current !== undefined) {
>>>>>>> parent of a52bb13 (massive update)
    wth_icon = weather.data.current.weather[0].icon;
    curr_temp = weather.data.current.temp;
    city = weather.data.timezone.slice(7);
  }

<<<<<<< HEAD

  let accordion =  experience.loading === 'loaded' ? experience.categories.map((i) => {
    return (
      <div className="mp-accordion">
      <Accordion
        key={i._id}
        title={i.title}
        contentArr={i.data}
      />  </div>
    );
    }) : <div className={experience.error ? 'mp-accordion-status mp-accordion-status--error-data' : 'mp-accordion-status mp-accordion-status--loading-data'}>no data due to<br></br> <span>{experience.error ? experience.error : 'loading...'}</span></div>;
  return (
    <div className="App">
      <Navbar onToggleClick={toggleSideDrawer} icon={wth_icon} temp={(curr_temp -  273.15).toFixed(0)} city={city}/>
      {sideDrawer}
      <Main />     
     {accordion} 
=======
  
  return (
    <div className="App">
      <Router history={history}>
        <Navbar
          onToggleClick={toggleSideDrawer}
          icon={wth_icon}
          temp={(curr_temp - 273.15).toFixed(0)}
          city={city}
        />
        {sideDrawer}

        <Route path="/" component={Main} exact />
        <Route path="/market" component={Market} />

      </Router>
>>>>>>> parent of a52bb13 (massive update)
    </div>
  );
}

export default App;
