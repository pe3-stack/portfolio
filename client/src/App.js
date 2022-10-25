import React, { useState, useCallback, useEffect } from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";

import SideDrawer from "./components/navbar/navbar";
import Navbar from "./components/navbar/navbar";


import Main from "./containers/Main/main";
import Market from "./containers/market/market";
import Gallery from "./containers/Gallery/Gallery";

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";

// import {  getExperience } from "./redux/reducers/experienceSlice";
import { getWeather } from "./redux/reducers/weatherSlice";
import { toggleTheme } from "./redux/reducers/theme/themeSlice";

library.add(fab, faCheckSquare, faCoffee);

const App = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const toggleSideDrawer = useCallback(() => { setShowSideDrawer((value) => !value); }, [setShowSideDrawer]);

  const dispatch = useDispatch();

  const weather = useSelector((state) => state.weather);
  const theme = useSelector((state) => state.theme);
  

  useEffect(() => {
    dispatch( toggleTheme() );

    let userLocation;
    localStorage.setItem("token", "");

    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
    };

    const geoSuccess = (position) => {
      userLocation = [position.coords.latitude, position.coords.longitude];
      dispatch(getWeather(userLocation));
      setInterval(() => {
        dispatch(getWeather(userLocation));
      }, 30 * 60 * 1000);
    };

    const geoError = (error) => {
      console.log("geolocation unavailable");
      return error.message;
    };

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options);
  }, [ dispatch]);

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

  let curr_temp, weather_icon, curr_city;
  if (weather.data.current && weather.data.current !== undefined) {
    weather_icon = weather.data.current.weather[0].icon;
    curr_temp = weather.data.current.temp;
    curr_city = weather.data.timezone.slice(7);
  }

  return (
    <div className="App" style={{ background: theme.style.background, color: theme.style.color, height: '100vh' }}>
      <Router history={history}>
        <Navbar
          onToggleClick={toggleSideDrawer}
          icon={weather_icon}
          temp={(curr_temp - 273.15).toFixed(0)}
          city={curr_city}
        />
        {sideDrawer}
        <Route path="/" component={Main} exact />
        {/* {user.isAuth ? (
          <Route path="/" component={Main} exact />
        ) : (
          <Modal status={user.isAuth}>
            <SignIn />
          </Modal>
        )} */}

        <Route path="/market" component={Market} />
        <Route path="/gallery" component={Gallery} />
      </Router>
    </div>
  );
};

export default App;
