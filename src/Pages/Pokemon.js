import React, { useEffect, useState } from "react";
import { PokemonPage } from "./Styles";
import List from "../components/List";
import { getPokemon } from "../api/pokeAPI";

export default () => {
    const [pokemonArr, setPokemonArr] = useState([]);

    useEffect(() => {
        const setPokemonFromApi = async () => {
            const pokemon = await getPokemon(4);
            setPokemonArr(pokemon);
        };
        setPokemonFromApi();
    }, []);

    const renderPokemon = (pokemon, itemIndex) => (
        <React.Fragment>
            {pokemon.name}
            <img src={pokemon.sprite} alt={`${pokemon.name}`} />
        </React.Fragment>
    );

    return (
        <PokemonPage>
            <List renderListItemChildren={renderPokemon} items={pokemonArr} />
        </PokemonPage>
    );
};
