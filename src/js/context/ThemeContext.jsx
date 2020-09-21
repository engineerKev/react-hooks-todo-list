import React, { createContext, useState } from 'react';
import { defaultTheme } from '../../style/theme';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState(defaultTheme);
    const { children } = props;

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
