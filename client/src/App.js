import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Home } from "./components";
import "./App.css";
import SecurityPage from "./components/SecurityPage/SecurityPage";

const App = () => (
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Security" exact component={SecurityPage} />
            </Switch>
        </div>
    </Router>
);

export default App;