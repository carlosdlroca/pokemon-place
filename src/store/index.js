import React from "react";
import { useReducer, createContext } from "react";
import {
    SET_POKEMON,
    SET_SELECTED_GENERATION,
    SET_SELECTED_POKEMON
} from "./actionTypes";

const initialState = {
    pokemon: [],
    selectedGeneration: 1,
    selectedPokemon: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_POKEMON:
            const { pokemon } = action;
            return {
                ...state,
                pokemon
            };
        case SET_SELECTED_GENERATION:
            const { selectedGeneration } = action;
            return {
                ...state,
                selectedGeneration
            };
        case SET_SELECTED_POKEMON:
            const { selectedPokemon } = action;
            return {
                ...state,
                selectedPokemon
            };
        default:
            return state;
    }
};

export const StoreContext = createContext({});

export default ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    );
};
