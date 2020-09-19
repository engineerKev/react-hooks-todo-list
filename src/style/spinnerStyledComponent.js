import styled from '@xstyled/styled-components';

export const SpinnerDiv = styled.div`
    position: fixed;
    top: calc(50% - 10em);
    left: calc(50% - 5em);
    margin: 3.75rem auto;
    font-size: 0.625rem;
    text-indent: -9999em;
    border-top: 1.1em solid #ffd700;
    border-right: 1.1em solid #ffd700;
    border-bottom: 1.1em solid #ffd700;
    border-left: 1.1em solid #ff8c00;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 .45s infinite linear;
    animation: load8 1.1s infinite linear;
    border-radius: 50%;
    width: 10em;
    height: 10em;
    ::after {
        border-radius: 50%;
        width: 10em;
        height: 10em;
    }
    @-webkit-keyframes load8 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        25% {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
        }
        50% {

            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }
        75% {

            -webkit-transform: rotate(270deg);
            transform: rotate(270deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes load8 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        25% {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
        }
        50% {

            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }
        75% {

            -webkit-transform: rotate(270deg);
            transform: rotate(270deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`;