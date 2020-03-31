import styled from "styled-components";

const Page = styled.main`
    min-height: 100vh;
`;

export const PokemonPage = styled(Page)`
    font-size: 2rem;
`;

export const NoMatch = styled(Page)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #222;
    color: white;
`;

export const Type = styled.div`
    display: inline-block;
    padding: 1rem 2rem;
    background-color: ${props => props.theme.types[props.type]};
    color: white;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 0.1rem;

    --border-radius: 20rem;

    &:first-child {
        border-radius: var(--border-radius) 0 0 var(--border-radius);
    }
    &:last-child {
        border-radius: 0 var(--border-radius) var(--border-radius) 0;
    }

    &:only-child {
        border-radius: var(--border-radius);
    }
`;
