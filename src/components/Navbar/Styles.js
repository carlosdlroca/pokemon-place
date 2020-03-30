import styled from "styled-components";

export default styled.nav`
    background-color: #dd2c14;
    padding: 1.5rem 3rem;
`;

export const NavTitle = styled.h1`
    display: flex;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    img {
        --size: 1.5rem;
        height: var(--size);
        width: var(--size);
        margin-right: 1rem;
    }
`;
