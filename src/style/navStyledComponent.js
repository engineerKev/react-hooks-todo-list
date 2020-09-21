import styled from '@xstyled/styled-components';

export const StyledNav = styled.div`
    text-align: center;
    font-size: 1.5rem;
    background: ${props => props.navBg};
    color: ${props => props.color};
    height: 4.375rem;
    line-height: 4.375rem;
    text-transform: uppercase;
`;