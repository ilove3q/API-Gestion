import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./routes";
import Menu from "./components/Menu";

const ShowContentMenu = routes => {
  let result = (routes.length === 0 ? null : routes.map((route, key) => (
        <Route
          key={key}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      )));

  return <Switch>{result}</Switch>;
};

const App = () => {
  return (
    <Router>
      <div>
      <Menu />
      <div className="container mt-4">
        <div className="row">
          {ShowContentMenu(routes)}
        </div>
      </div>
    </div>
    </Router>
  );
};

export default App;
