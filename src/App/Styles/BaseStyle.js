import { createGlobalStyle } from "styled-components";
import themes from "./themes";

export default createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    :root {
        --color-main: ${themes.color.main};
        --color-bgDark: ${themes.color.bgDark};
        --color-textLight: ${themes.color.textLight};
        --color-textDark: ${themes.color.textDark};
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
        font-family: sans-serif;
        background-color: var(--color-bgDark);
    }
`;
