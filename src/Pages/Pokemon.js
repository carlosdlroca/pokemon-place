import React from "react";
import { Link } from "react-router-dom";
import { PokemonPage } from "./Styles";
import List from "../components/List";
import Select from "../components/Select";

import useFetchPokemonByGen from "../hooks/useFetchPokemonByGen";
import { SET_SELECTED_GENERATION } from "../store/actionTypes";

export default () => {
    const [{ pokemon, selectedGeneration }, dispatch] = useFetchPokemonByGen();

    const renderPokemon = (pokemon, itemIndex) => (
        <div className='PokemonItem'>
            <span className='PokemonId'>#{pokemon.id}</span>
            <img
                className='PokemonImage'
                src={pokemon.sprite}
                alt={`${pokemon.name}`}
            />
            <Link className='PokemonLink' to={`/pokemon/${pokemon.id}`}>
                {pokemon.name}
            </Link>
        </div>
    );

    const onChange = e => {
        const { value } = e.target;
        dispatch({
            type: SET_SELECTED_GENERATION,
            selectedGeneration: Number(value)
        });
    };

    if (!pokemon.length) {
        return <h1>Loading...</h1>;
    }

    return (
        <PokemonPage>
            <Select
                numOfShifts={7}
                valuePrefix='Gen '
                onChange={onChange}
                selectedOption={selectedGeneration}
            />
            <List renderListItemChildren={renderPokemon} items={pokemon} />
        </PokemonPage>
    );
};
