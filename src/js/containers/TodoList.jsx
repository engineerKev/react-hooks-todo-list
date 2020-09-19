import React, { useEffect, useState } from 'react';

import mockApi from '../../js/utilities/mockApi';
import useTodoListDataCruncher from '../customHooks/useTodoListDataCruncher';

import Spinner from '../components/UI/Spinner';
import ListItem from './ListItem';

const todoList = (props) => {
    const [overdue, due, completed, setData] = useTodoListDataCruncher([]);
    
    useEffect(() => {
        const getServerData = async () => {
            const { data: serverData } = await mockApi.get('/get');

            setData(serverData);
        }
        getServerData();

    }, []);

    const todoListDataReady = () => overdue.length || due.length || completed.length

    const updateListData = (completedTaskId) => {
        const newRawDataArr = [...overdue, ...due, ...completed];
        newRawDataArr.forEach((d) => {
            if(d.id === completedTaskId) {
                d.isComplete = true;
            }
        });
        setData(newRawDataArr);
    }

    const taskCompleted = async (id) => {
        const {data: patchResponse } = await mockApi.patch(`/patch/${id}`, 
            {
                "isComplete": true
            }
        );
        updateListData(id);
        console.log(patchResponse);
    }

    const renderListItems = () => {
        const overDueElements = overdue.map((od, ix) => {
            return (
                <ListItem 
                    desc={od.description} 
                    key={`${od.id}-${ix}`} 
                    markComplete={() => taskCompleted(od.id)}
                    completed={od.isComplete}
                /> 
            );
        });

        const dueElements = due.map((d,ix) => {
            return (
                <ListItem 
                    desc={d.description} 
                    key={`${d.id}-${ix}`} 
                    completed={d.isComplete} 
                    markComplete={() => taskCompleted(d.id)} 
                />
            );
        });
        
        const completedElements = completed.map((c, ix) => {
            return ( 
                <ListItem 
                    desc={c.description}
                    key={`${c.id}-${ix}`}
                    completed={c.isComplete}
                    markComplete={() => {}} />
            );
        });

        return [...overDueElements, ...dueElements, ...completedElements, <h1 key={"yoke-key"}>DO STYLING FOR LIST ITEMS(DESC, BUTTON, BORDERS, ALIGNMENT, COLORS FOR COMPLETE, INCOMPLETE, AND OVERDUE)</h1>];
    }

    return (
        todoListDataReady() ? renderListItems() : <Spinner />
    )
}

export default todoList