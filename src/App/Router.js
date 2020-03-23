import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Page = ({ h }) => <h1>{h}</h1>;

export default () => (
    <Router>
        <Switch>
            <Route exact path='/'>
                <Page h='First' />
            </Route>
            <Route path='/poop'>
                <Page h='Popo' />
            </Route>
        </Switch>
    </Router>
);
