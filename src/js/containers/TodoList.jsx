import React, { useEffect, useContext} from 'react';

import mockApi from '../../js/utilities/mockApi';
import useTodoListDataCruncher from '../customHooks/useTodoListDataCruncher';

import Spinner from '../components/UI/Spinner';
import { TodoListWrapper, StyledSectionTag } from '../../style/todoListStyledComponents';
import ListItem from './ListItem';
import { ThemeContext } from '../context/ThemeContext';


const todoList = (props) => {
    const [overdue, due, completed, setData] = useTodoListDataCruncher([]);
    const { theme } = useContext(ThemeContext);

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
        mockApi.patch(`/patch/${id}`, 
            {
                "isComplete": true
            }
        ).then(() => {
            updateListData(id);
        });
    }

    const renderListItems = () => {
        const overDueElements = overdue.map((od, ix) => {
            return (
                <ListItem 
                    desc={od.description} 
                    key={`${od.id}-${ix}`} 
                    markComplete={() => taskCompleted(od.id)}
                    completed={od.isComplete}
                    color={theme.colors.overdue}
                    textDecoration={theme.textDecorations.overdue}
                    animations={theme.animations.overdue}
                    date={od.formattedDate}
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
                    color={theme.colors.due}
                    textDecoration={theme.textDecorations.due}
                    date={d.formattedDate}
                />
            );
        });
        
        const completedElements = completed.map((c, ix) => {
            return ( 
                <ListItem 
                    desc={c.description}
                    key={`${c.id}-${ix}`}
                    completed={c.isComplete}
                    markComplete={() => {}} 
                    color={theme.colors.completed}
                    textDecoration={theme.textDecorations.completed}
                />
            );
        });

        return [...overDueElements, ...dueElements, ...completedElements];
    }

    return (
        todoListDataReady() ?
        <StyledSectionTag>
            <TodoListWrapper>
                {renderListItems()}
            </TodoListWrapper> 
        </StyledSectionTag> 
        :
        <Spinner />
    )
}

export default todoList