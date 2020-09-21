import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

import { StyledNav } from '../../style/navStyledComponent';

const navContainer = (props) => {
    const { theme } = useContext(ThemeContext);

    return (
        <nav>
        <StyledNav navBg={theme.colors.navBg} color={theme.colors.navFontColor}>{props.navText}</StyledNav>
        </nav>
    );
}

export default navContainer;