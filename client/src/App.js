import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Auth, Home } from "./components";
import "./App.css";

const App = () => (
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth/:type" exact component={Auth} />
            </Switch>
        </div>
    </Router>
);

export default App;