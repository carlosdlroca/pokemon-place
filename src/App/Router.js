import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { PokemonPage } from "../Pages/Styles";

export default () => (
    <Router>
        <Switch>
            <Route exact path='/'>
                <Redirect to='/pokemon' />
            </Route>
            <Route path='/pokemon/:pokemon_id'>
                <h1> THis is for a specific pokemon</h1>
            </Route>
            <Route path='/pokemon'>
                <PokemonPage />
            </Route>
        </Switch>
    </Router>
);
