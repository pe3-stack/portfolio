import React, { useState, useCallback, useEffect } from "react";

import SideDrawer from "./components/navbar/navbar";
import Navbar from "./components/navbar/navbar";
import Main from "./containers/Main/main";


import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";

//import {  getExperience } from "./redux/reducers/experienceSlice";
import {  getWeather } from "./redux/reducers/weatherSlice";
 
library.add(fab, faCheckSquare, faCoffee);

function App() {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const toggleSideDrawer = useCallback(() => {
    setShowSideDrawer((value) => !value);
  }, [setShowSideDrawer]);

  const dispatch = useDispatch();
  
  const weather = useSelector(state => state.weather);

  useEffect(() => {
              
    let userLocation = [];

    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
    };
    const geoSuccess = (position) => {
      userLocation = [position.coords.latitude, position.coords.longitude];
      console.log('geolocation available')
      
      dispatch(getWeather(userLocation));
      
    };
    const geoError = (error) => {
      console.log('geolocation unavailable')
      return error.message;
    };
    
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options)

    //dispatch(getExperience());
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
  if(weather.data.current !== undefined) {
    wth_icon = weather.data.current.weather[0].icon;
    curr_temp = weather.data.current.temp;
    city = weather.data.timezone.slice(7);
  }


  // let accordion =  experience.loading === 'loaded' ? experience.categories.map((i) => {
  //   return (
  //     <div className="mp-accordion">
  //     <Accordion
  //       key={i._id}
  //       title={i.title}
  //       contentArr={i.data}
  //     />  </div>
  //   );
  //   }) : <div className={experience.error ? 'mp-accordion-status mp-accordion-status--error-data' : 'mp-accordion-status mp-accordion-status--loading-data'}>no data due to<br></br> <span>{experience.error ? experience.error : 'loading...'}</span></div>;
  return (
    <div className="App">
      <Navbar onToggleClick={toggleSideDrawer} icon={wth_icon} temp={(curr_temp -  273.15).toFixed(0)} city={city}/>
      {sideDrawer}
      
      <Main />     
     {/* {accordion}  */}
    </div>
  );
}

export default App;
