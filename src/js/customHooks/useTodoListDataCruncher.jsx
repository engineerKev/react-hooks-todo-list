import React, { useState } from 'react';

const useTodoListDataCruncher = (rawData) => {
    const completed = [];
    const overDue = [];
    const due = [];

    const [dataArr, setData] = useState(rawData);

    const formatDate = (dateStr) => {
        if (dateStr) {
            const date = new Date(dateStr);
            return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        }
        return dateStr
    }

    dataArr.forEach((dataElem) => {
        if(dataElem.isComplete) {
            completed.push(dataElem);
        } else {
            if(!dataElem.dueDate) {
                dataElem.formattedDate = 'whenever';
                due.push(dataElem);
            } else {
                const todaysDateMs = Date.now();
                dataElem.formattedDate = formatDate(dataElem.dueDate);
                todaysDateMs > Date.parse(dataElem.dueDate) ? overDue.push(dataElem) : due.push(dataElem);
            }
        }
    })

    return [overDue, due.sort().reverse(), completed, setData];
}

export default useTodoListDataCruncher;