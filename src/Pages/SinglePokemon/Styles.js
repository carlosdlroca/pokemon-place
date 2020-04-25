import styled from "styled-components";

export var Page = styled.main`
    min-height: 100vh;
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export var PokemonName = styled.h1`
    --thickness: 0.2rem;
    --textShadowColor: var(--color-textDark);
    font-size: 6rem;
    position: relative;
    color: var(--color-textLight);
    display: inline-block;
    padding: 1rem 2rem;
    text-transform: capitalize;
    text-decoration: underline;
    text-decoration-color: var(--color-textDark);
    text-shadow: calc(-1 * var(--thickness)) calc(-1 * var(--thickness)) 0
            var(--textShadowColor),
        var(--thickness) calc(-1 * var(--thickness)) 0 var(--textShadowColor),
        calc(-1 * var(--thickness)) var(--thickness) 0 var(--textShadowColor),
        var(--thickness) var(--thickness) 0 var(--textShadowColor);
    z-index: 20;
    &:before {
        content: "";
        width: 100%;
        height: 50%;
        position: absolute;
        bottom: 0;
        background-color: ${getPokemonColor};
        z-index: -1;
        transform: translateX(-2rem);
    }
`;

export var PokemonImage = styled.div`
    margin: 5rem 0;
    img {
        transform: scale(2);
    }
`;

export var PokemonStats = styled.section`
    display: flex;
    flex-flow: row wrap;

    .Stat {
        flex: 0 0 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
        .StatIcon {
        }

        .StatName {
            font-size: 2rem;
            text-transform: capitalize;
        }

        .StatNumber {
            font-size: 3rem;
        }
    }
`;

function getPokemonColor(props) {
    return props.theme.speciesColor[props.pokemonColor];
}
