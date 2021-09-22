import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./global.css";
import { ThemeProvider } from '@mui/styles';

import theme from './theme';
import Admin from "./pages/Admin/Admin.component";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Switch>
            <Route path="/admin">
              <Admin />
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