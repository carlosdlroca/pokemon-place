import React, { useEffect, useState } from "react";
import { PokemonPage } from "./Styles";
import { useParams } from "react-router-dom";
import { getPokemon } from "../api/pokeAPI";

export default () => {
    const { pokemon_id } = useParams();

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const pokemonApi = async id => {
            const pokemonObject = await getPokemon(id);
            setPokemon(pokemonObject);
        };
        pokemonApi(pokemon_id);
    }, [pokemon_id]);

    if (!pokemon) {
        return <h1>Loading...</h1>;
    }

    return (
        <PokemonPage>
            {pokemon.name}
            <p>weight: {pokemon.weight}</p>
            <img
                src={pokemon.sprites["front_default"]}
                alt='Back of the pokemon'
            />
            <img src={pokemon.sprites["back_default"]} alt='' />
            <h2>Moves:</h2>
            {pokemon.moves.map(m => (
                <p>{m.move.name}</p>
            ))}
        </PokemonPage>
    );
};
