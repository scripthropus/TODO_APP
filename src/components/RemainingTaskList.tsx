import React from 'react';

type RemainingTaskListProps = {
    remainingTasksCount: number;
}

export const RemainingTaskList:React.FC<RemainingTaskListProps> = ({ remainingTasksCount }) => {
    return (
        <h1>残り{remainingTasksCount}</h1>
    )
}