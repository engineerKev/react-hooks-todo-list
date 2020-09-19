import React from 'react';

import mockApi from '../utilities/mockApi';

const listItem = (props) => {
    return (
        <div>
            <div>{props.desc}</div>
            {props.completed ? null : <button onClick={props.markComplete}>done</button>}
        </div>
    )   
}

export default listItem;