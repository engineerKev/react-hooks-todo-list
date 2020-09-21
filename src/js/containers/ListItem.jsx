import React, { useState } from 'react';

import {
    ListItem,
    ListItemButton,
    ListItemDescription
} from '../../style/listItemStyledComponents';

const listItem = ({
    animations = {}, 
    color, 
    textDecoration,
    date,
    ...rest}) => {
    
    const [hovering, setHoveringBit] = useState(false);
    const [done, setDone] = useState('done?');

    const { animation = ``, keyframes = `` } = animations;

    const doneButtonClick = () => {
        setDone('done!');
        rest.markComplete();
    }
    
    return (
        <ListItem>
            <ListItemDescription color={color} textDecoration={textDecoration} animation={animation} keyframes={keyframes}>{rest.desc}</ListItemDescription>
            {rest.completed ? 
                null 
                : 
                <ListItemButton onClick={doneButtonClick} color={color} onMouseEnter={() => setHoveringBit(true)} onMouseLeave={() => setHoveringBit(false)}>
                    <div className={hovering ? 'fade-out' : ''}>{ date }</div>
                    <div className={hovering ? 'fade-in' : ''}>{ done }</div>
                </ListItemButton>}
        </ListItem>
    )   
}

export default listItem;