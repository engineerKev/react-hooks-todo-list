import React from 'react';
import { render } from 'react-dom';

import styled from '@xstyled/styled-components';

const H1Styled = styled.h1`
    color: gold;
`;

import '../style/base.scss';

const App = () => {
    return (
        <React.Fragment>
            <H1Styled>HELLO REACT This is a HOT Reload</H1Styled>
        </React.Fragment>
    );

}

render(
    <App />,
    document.getElementById('app'),
);
