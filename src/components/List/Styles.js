import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(1fr, 3);
    grid-gap: 2rem;
    list-style: none;
    width: 60%;
    margin: 1rem auto;

    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid black;

    img {
        --img-size: 100px;
        display: block;
        height: var(--img-size);
        width: var(--img-size);
    }

    &:nth-of-type(3n) {
        grid-column: 3 / span 1;
    }

    @media only screen and (max-width: 768px) {
        grid-column: 1 / -1;

        &:nth-of-type(3n) {
            grid-column: 1 / -1;
        }
    }

    @media only screen and (max-width: 480px) {
        img {
            --img-size: 75px;
        }
    }
`;
