import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(1fr, 4);
    grid-gap: 2rem;
    list-style: none;
    width: 60%;
    margin: 1rem auto;
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

    &:nth-of-type(4n) {
        grid-column: 4 / span 1;
    }
`;
