import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import PokemonPage from "../Pages/Pokemon";
import SinglePokemon from "../Pages/SinglePokemon";
import NoMatch from "../Pages/NoMatch";

export default () => (
    <Router>
        <Switch>
            <Route exact path='/'>
                <Redirect to='/pokemon' />
            </Route>
            <Route path='/pokemon/:pokemon_id'>
                <SinglePokemon />
            </Route>
            <Route path='/pokemon'>
                <PokemonPage />
            </Route>
            <Route path='*'>
                <NoMatch />
            </Route>
        </Switch>
    </Router>
);
