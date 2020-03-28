import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonPage } from "./Styles";
import List from "../components/List";
import Select from "../components/Select";

import { StoreContext } from "../store";
import { SET_POKEMON, SET_SELECTED_GENERATION } from "../store/actionTypes";

import { getPokemonByGeneration } from "../api/pokeAPI";

export default () => {
    const [state, dispatch] = useContext(StoreContext);

    useEffect(() => {
        const setPokemonFromApi = async () => {
            const pokemon = await getPokemonByGeneration(
                state.selectedGeneration
            );
            dispatch({ type: SET_POKEMON, pokemon });
        };
        setPokemonFromApi();
    }, [dispatch, state.selectedGeneration]);

    const renderPokemon = (pokemon, itemIndex) => (
        <React.Fragment>
            <img src={pokemon.sprite} alt={`${pokemon.name}`} />
            <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
        </React.Fragment>
    );

    const onChange = e => {
        const { value } = e.target;
        dispatch({
            type: SET_SELECTED_GENERATION,
            selectedGeneration: Number(value)
        });
    };

    if (!state.pokemon.length) {
        return <h1>Loading...</h1>;
    }

    return (
        <PokemonPage>
            <Select
                numOfShifts={7}
                valuePrefix='Gen '
                onChange={onChange}
                selectedOption={state.selectedGeneration}
            />
            <List
                renderListItemChildren={renderPokemon}
                items={state.pokemon}
            />
        </PokemonPage>
    );
};
