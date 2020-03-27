import React, { useEffect, useState } from "react";
import { PokemonPage } from "./Styles";
import List from "../components/List";
import { getPokemonByGeneration } from "../api/pokeAPI";
import { Link } from "react-router-dom";

export default () => {
    const [pokemonArr, setPokemonArr] = useState([]);

    useEffect(() => {
        const setPokemonFromApi = async () => {
            const pokemon = await getPokemonByGeneration(1);
            setPokemonArr(pokemon);
        };
        setPokemonFromApi();
    }, []);

    const renderPokemon = (pokemon, itemIndex) => (
        <React.Fragment>
            <img src={pokemon.sprite} alt={`${pokemon.name}`} />
            <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
        </React.Fragment>
    );

    if (!pokemonArr.length) {
        return <h1>Loading...</h1>;
    }

    return (
        <PokemonPage>
            <List renderListItemChildren={renderPokemon} items={pokemonArr} />
        </PokemonPage>
    );
};
