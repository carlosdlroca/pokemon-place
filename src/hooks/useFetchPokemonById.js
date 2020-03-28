import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../store";
import { SET_SELECTED_POKEMON } from "../store/actionTypes";
import { getPokemonById } from "../api/pokeAPI";

export default id => {
    const { pokemon_id } = useParams();
    const [state, dispatch] = useContext(StoreContext);
    useEffect(() => {
        const pokemonApi = async id => {
            const selectedPokemon = await getPokemonById(id);
            dispatch({ type: SET_SELECTED_POKEMON, selectedPokemon });
        };
        pokemonApi(pokemon_id);
    }, [dispatch, pokemon_id]);

    return state.selectedPokemon;
};
