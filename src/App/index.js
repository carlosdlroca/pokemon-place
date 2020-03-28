import React from "react";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import BaseStyle from "./Styles/BaseStyle";
import Normalize from "./Styles/Normalize";

import themes from "./Styles/themes";
import PokemonStore from "../store";

export default () => (
    <ThemeProvider theme={themes}>
        <BaseStyle />
        <Normalize />
        <PokemonStore>
            <Router />
        </PokemonStore>
    </ThemeProvider>
);
