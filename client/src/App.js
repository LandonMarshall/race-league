import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./global.css";
import { ThemeProvider } from '@material-ui/core/styles';

import raceTheme from "theme";
import Users from "pages/Users/Users.component";
import Teams from "pages/Teams/Teams.component";
import Header from "components/Header/Header.component";
import { getSeasons } from "api/seasons-api";

const App = () => {
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState();

  const handleSeasonSelect = (event, value) => {
    setSelectedSeason(event.target.value)
  };

  useEffect(() => {
    getSeasons().then((response) => {
      setSeasons(response.data);
      // TODO: For now, set selected season to the last created one
      //  eventually, find current season based on time
      setSelectedSeason(response.data[response.data.length - 1]['id']);
    })
  }, [])

  return (
    <ThemeProvider theme={raceTheme}>
      <Header seasons={seasons} selectedSeason={selectedSeason} setCurrentSeason={handleSeasonSelect}/>
      <Router>
          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/teams">
              <Teams />
            </Route> 
            <Route path="/race/:id">
              <div>
                WIP
              </div>
            </Route>
            <Route path="/">
              <div>
                WIP
              </div>
            </Route>
          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;