import React from 'react';
import { render } from 'react-dom';

import TodoList from './containers/TodoList';
import ThemeContextProvider from './context/ThemeContext';
import NavContainer from '../js/containers/NavContainer';

import '../style/base.scss';

const App = () => {
    return (
        <ThemeContextProvider>
            <NavContainer navText={"Todo List"} />
            <TodoList />
        </ThemeContextProvider>
    );

}

render(
    <App />,
    document.getElementById('app'),
);
