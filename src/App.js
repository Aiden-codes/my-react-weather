import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

import { Forecast } from "./components/Forecast";
import { NoMatch } from "./components/NoMatch";
import { NavigationBar } from "./components/Navbar";
import { Layout } from "./components/Layout";
import { Main } from "./components/Main";

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/forecast" component={Forecast} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
