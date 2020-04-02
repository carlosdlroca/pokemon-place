import React from "react";
import { SinglePokemonPage, Type } from "./Styles";
import useFetchPokemonById from "../hooks/useFetchPokemonById";

export default () => {
    const pokemon = useFetchPokemonById();

    if (!pokemon) {
        return <h1>Loading...</h1>;
    }

    return (
        <SinglePokemonPage>
            {pokemon.name}
            <p>weight: {pokemon.weight}</p>
            <img
                src={pokemon.sprites["front_default"]}
                alt='Back of the pokemon'
            />
            <img src={pokemon.sprites["back_default"]} alt='' />
            <div className='typed'>
                {pokemon.types.map(type => (
                    <Type key={type.name} type={type.name}>
                        {type.name}
                    </Type>
                ))}
            </div>
            <div className='stats'>
                {pokemon.stats.map(stat => (
                    <p className='stat'>
                        <span className='BaseStat'>{stat.base_stat}</span>
                        <span className='StatName'>{stat.name}</span>
                    </p>
                ))}
            </div>
            <h2>Moves:</h2>
            {pokemon.moves.map(move => (
                <p key={move.name}>{move.name}</p>
            ))}
        </SinglePokemonPage>
    );
};
