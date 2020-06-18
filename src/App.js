import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { appRoutes } from "./routers";
import "./App.css";
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

const App = () => {
  return (
    <Router>
      <Switch>
        {appRoutes.map(route => (
          <Route key={route.name} {...route} />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
