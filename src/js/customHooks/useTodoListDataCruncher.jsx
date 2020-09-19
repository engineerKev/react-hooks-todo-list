import React, { useState } from 'react';

const useTodoListDataCruncher = (rawData) => {
    const completed = [];
    const overDue = [];
    const due = [];

    const [dataArr, setData] = useState(rawData);

    dataArr.forEach((dataElem) => {
        if(dataElem.isComplete) {
            completed.push(dataElem);
        } else {
            if(!dataElem.dueDate) {
                due.push(dataElem);
            } else {
                const todaysDateMs = Date.now();
                todaysDateMs > Date.parse(dataElem.dueDate) ? overDue.push(dataElem) : due.push(dataElem);
            }
        }
    })

    return [overDue, due.sort().reverse(), completed, setData];
}

export default useTodoListDataCruncher;