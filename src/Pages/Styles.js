import styled from "styled-components";

const Page = styled.main`
    min-height: calc(100vh - 4.5rem);
`;

export const PokemonPage = styled(Page)`
    font-size: 2rem;

    --hover-time: 0.2s;

    .PokemonItem {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;

        position: relative;

        .PokemonId {
            font-size: 2rem;
            color: ${(props) => props.theme.color.textLight};
        }

        .PokemonImage {
            --img-size: 100px;
            display: block;
            height: var(--img-size);
            width: var(--img-size);
        }

        .PokemonLink {
            display: flex;
            align-items: center;
            justify-content: center;

            color: ${(props) => props.theme.color.main};
            padding: 1rem 0.4rem;
            position: relative;
            margin-bottom: 1rem;
            text-decoration: none;

            transition: color var(--hover-time) ease-out;

            &::before {
                content: "";
                width: 0;
                height: 100%;
                position: absolute;
                background-color: ${(props) => props.theme.color.main};
                transition: width var(--hover-time) 0.1s ease-out;
                z-index: -1;
            }

            &:hover {
                color: ${(props) => props.theme.color.textLight};
                &::before {
                    width: 100%;
                }
            }
        }

        &::before {
            content: "";
            position: absolute;
            top: 100%;
            height: 100%;
            width: 100%;
            background: ${(props) => props.theme.color.textLight};
            z-index: -1;
            transition: top var(--hover-time) ease;
        }

        &:hover {
            .PokemonId {
                color: ${(props) => props.theme.color.dark};
            }
            &::before {
                top: 0;
            }
        }
    }
`;

export const NoMatch = styled(Page)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #222;
    color: white;
`;
