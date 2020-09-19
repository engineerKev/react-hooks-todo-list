import React from 'react';
import { render } from 'react-dom';

import TodoList from './containers/TodoList';

import '../style/base.scss';

const App = () => {
    return (
        <React.Fragment>
            <TodoList />
        </React.Fragment>
    );

}

render(
    <App />,
    document.getElementById('app'),
);
