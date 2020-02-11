import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RequestForm from "./components/requestForm.jsx";


function App() {
    return (<Router>

        <Switch>
            {/* <Route exact path='/' component={Home} /> */}
            <Route path="/request-form" component={RequestForm} />

        </Switch>
    </Router>);
}

export default App;