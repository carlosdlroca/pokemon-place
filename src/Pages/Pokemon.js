import React, { useEffect, useState } from "react";
import { PokemonPage } from "./Styles";
import List from "../components/List";
import { getPokemon } from "../api/pokeAPI";

export default () => {
    const [pokemonArr, setPokemonArr] = useState([]);

    useEffect(() => {
        const setPokemonFromApi = async () => {
            const pokemon = await getPokemon();
            setPokemonArr(pokemon);
        };
        setPokemonFromApi();
    }, []);

    const renderPokemon = (pokemon, itemIndex, ListComponent) => (
        <ListComponent key={itemIndex}>
            {pokemon.name}
            <img src={pokemon.sprite} alt={`${pokemon.name}`} />
        </ListComponent>
    );

    return (
        <PokemonPage>
            <List render={renderPokemon} items={pokemonArr} />
        </PokemonPage>
    );
};
