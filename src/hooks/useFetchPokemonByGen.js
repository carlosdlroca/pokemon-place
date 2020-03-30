import { useContext, useEffect } from "react";
import { StoreContext } from "../store";
import { SET_POKEMON } from "../store/actionTypes";
import { getPokemonByGeneration } from "../api/pokeAPI";

export default () => {
    const [state, dispatch] = useContext(StoreContext);

    useEffect(() => {
        const setPokemonFromApi = async () => {
            const pokemon = await getPokemonByGeneration(
                state.selectedGeneration
            );
            dispatch({ type: SET_POKEMON, pokemon });
        };
        if (state.pokemon.length <= 0) {
            setPokemonFromApi();
        }
    }, [dispatch, state.selectedGeneration, state.pokemon.length]);

    return [state, dispatch];
};
