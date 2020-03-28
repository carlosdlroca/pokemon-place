import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PokemonPage } from "./Styles";
import List from "../components/List";
import Select from "../components/Select";

import { getPokemonByGeneration } from "../api/pokeAPI";

export default () => {
    const [pokemonArr, setPokemonArr] = useState([]);
    const [generation, setGeneration] = useState(1);

    useEffect(() => {
        const setPokemonFromApi = async () => {
            const pokemon = await getPokemonByGeneration(generation);
            setPokemonArr(pokemon);
        };
        setPokemonFromApi();
    }, [generation]);

    const renderPokemon = (pokemon, itemIndex) => (
        <React.Fragment>
            <img src={pokemon.sprite} alt={`${pokemon.name}`} />
            <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
        </React.Fragment>
    );

    const onChange = e => {
        const { value } = e.target;
        setGeneration(Number(value));
    };

    if (!pokemonArr.length) {
        return <h1>Loading...</h1>;
    }

    return (
        <PokemonPage>
            <h3>Select a generation: </h3>
            <Select numOfShifts={7} valuePrefix='Gen ' onChange={onChange} />
            <List renderListItemChildren={renderPokemon} items={pokemonArr} />
        </PokemonPage>
    );
};
