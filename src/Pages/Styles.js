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
