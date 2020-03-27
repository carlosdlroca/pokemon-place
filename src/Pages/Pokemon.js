import React, { useEffect, useState } from "react";
import { PokemonPage } from "./Styles";
import List from "../components/List";
import { getPokemonByGeneration } from "../api/pokeAPI";
import { Link } from "react-router-dom";

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
            <select onChange={onChange}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
            </select>
            <List renderListItemChildren={renderPokemon} items={pokemonArr} />
        </PokemonPage>
    );
};
