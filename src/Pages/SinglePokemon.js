import React from "react";
import { PokemonPage } from "./Styles";
import useFetchPokemonById from "../hooks/useFetchPokemonById";

export default () => {
    const pokemon = useFetchPokemonById();

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
                <p key={m.move.name}>{m.move.name}</p>
            ))}
        </PokemonPage>
    );
};
