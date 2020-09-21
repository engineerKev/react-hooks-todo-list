import styled from '@xstyled/styled-components';

export const ListItem = styled.div`
    background-color: #fff;
    margin: 0.625rem auto;
    max-width: 34.375rem;
    height: 1.875rem;
    width: 100%;
    border-radius: 0.25rem;
    box-shadow: 0.25rem 0.25rem 0.625rem -0.1875rem #777;
    display: flex;
    justify-content: space-between;
    border: 0.0625rem solid #aaa;
    padding: 0.625rem 1.25rem;
    @media (min-width: 17.5rem) and (max-width: 64rem) {
        flex-direction: column;
        max-width: 55vw;
        height: auto;
        align-items: stretch;
        justify-content: center;
    }
`;

export const ListItemButton = styled.button`
    overflow: hidden;
    font-family: inherit;
    max-width: 10.625rem;
    height: 1.875rem;
    padding: 0.3125rem 0.625rem;
    border-radius: 0.25rem;
    border: 0.0625rem solid;
    background-color: white;
    flex-grow: 1;
    color: ${props => props.color};
    text-transform: capitalize;
    border-color: transparent;
    display: flex;
    align-items: center;
    div {
        text-align: center;
        opacity: 0;
        font-size: 1.25rem;
        width: 0%;
        &:nth-child(2) {
            &.fade-in {
                animation: show .10s forwards;
            }
        }
        &:first-child {
            opacity: 1;
            font-size: 1rem;
            width: 100%;
            &.fade-out  {
                animation: hide .10s forwards;
            }
        }
    }
    :hover {
        background-color: ${props => props.color};
        border-color: ${props => props.color};
        color: white;
    }
    @keyframes hide {
        0% {
            opacity: 0;
            width: 50%;
        }
        25% {
            opacity: 0;
            width: 0%;
        }
        50% {
            opacity: 0;
            width: 0%;
        }
        100% {
            opacity: 0;
            width: 0%;
        }
    }
    @keyframes show {
        0% {
            opacity: 0;
            width: 50%;
        }
        25% {
            opacity: 0;
            width: 100%;
        }
        50% {
            opacity: .25;
            width: 100%;
        }
        75% {
            opacity: .50;
            width: 100%;
        }
        100% {
            opacity: 1;
            width: 100%;
        }
    }
    @media (min-width: 17.5rem) and (max-width: 64rem) {
        max-width: 60%;
        margin: 20px auto;
        width: 100%;
        background-color: ${props => props.color};
        color: white;
        border-color: ${props => props.color};
        div {
            width: 100%;
            opacity: 1;
            &:nth-child(1) {
                display: none;
            }
        }
    }
`;

export const ListItemDescription = styled.div`
    text-decoration: ${props => props.textDecoration};
    color: ${props => props.color};
    padding: 0.3125rem 0.625rem;
    flex-grow: 2;
    font-size: 1.125rem;
    text-align: left;
    ${props => props.animation}
    ${props => props.keyframes}
    @media (min-width: 17.5rem) and (max-width: 64rem) {
        padding: 20px 30px;
        text-transform: uppercase;
        font-weight: 600;
        text-align: center;
    }
`;