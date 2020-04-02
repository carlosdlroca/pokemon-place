import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 2rem;
    grid-row-gap: 4rem;
    width: 60%;
    margin: 1rem auto;
    list-style: none;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: all 0.2s ease-in;
    &:hover {
        box-shadow: 0 0 1rem rgba(12, 12, 12, 0.5);
    }
`;
