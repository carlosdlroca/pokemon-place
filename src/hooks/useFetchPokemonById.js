import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../store";
import { SET_SELECTED_POKEMON } from "../store/actionTypes";
import { getPokemonById } from "../api/pokeAPI";

export default (id) => {
    const { pokemon_id } = useParams();
    const [state, dispatch] = useContext(StoreContext);
    useEffect(() => {
        const pokemonApi = async (id) => {
            const selectedPokemon = await getPokemonById(id);
            dispatch({ type: SET_SELECTED_POKEMON, selectedPokemon });
        };
        if (!state.selectedPokemon || state.selectedPokemon.id !== pokemon_id) {
            pokemonApi(pokemon_id);
        }
    }, [dispatch, pokemon_id, state.selectedPokemon]);

    return state.selectedPokemon;
};
