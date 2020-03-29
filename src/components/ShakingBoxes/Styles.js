import styled, { keyframes } from "styled-components";

export const Box = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 1rem;

    background: ${({ image, color }) =>
        image ? `url(${image})` : color ? color : "white"};
    font-size: 2rem;
    background-position: center;
    background-size: cover;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        text-decoration: none;
        font-size: 4rem;
        height: 100%;
    }
`;

const rotateBox1 = keyframes`
    0% {
        transform: rotate(0deg)
    }
    25% {
        transform: rotate(30deg)
    }
    50% {
        transform: rotate(0deg)
    }
    75% {
        transform: rotate(-30deg)
    }
    100% {
        transform: rotate(0deg)
    }
`;

const rotateBox2 = keyframes`
    0% {
        transform: rotate(0deg) scale(1);
    }
    25% {
        transform: rotate(-30deg) scale(1.4);
    }
    50% {
        transform: rotate(0deg) scale(1);
    }
    75% {
        transform: rotate(30deg) scale(1.2)
    }
    100% {
        transform: rotate(0deg) scale(1);
    }
`;

const rotateBox3 = keyframes`
    from {
        transform: rotate(-45deg) scale(1);
    }
    to {
        transform: rotate(45deg) scale(1.5);
    }
`;

export const Boxes = styled.div`
    --size: ${props => (props.size ? props.size : 250)}px;
    height: var(--size);
    width: var(--size);
    position: relative;
    &:hover,
    &:focus {
        cursor: pointer;
        ${Box} {
            &:nth-of-type(3) {
                animation: 1s ${rotateBox1} ease-out infinite;
            }
            &:nth-of-type(2) {
                animation: 1s ${rotateBox2} ease infinite;
            }
            &:nth-of-type(1) {
                animation: 1s ${rotateBox3} linear alternate infinite;
            }
        }
    }
`;
