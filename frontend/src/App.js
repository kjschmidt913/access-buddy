import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RequestForm from "./components/requestForm.jsx";
import Home from "./components/home.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";
import RequestComplete from "./components/requestComplete.jsx";
import About from "./components/about.jsx"


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/request-form" component={RequestForm} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/request-complete" component={RequestComplete} />
                <Route path="/about" component={About} />

            </Switch>
        </Router>);
}

export default App;
