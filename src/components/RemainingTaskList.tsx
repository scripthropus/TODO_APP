import React from 'react';

type RemainingTaskListProps = {
    remainingTasksCount: number;
}

export const RemainingTaskList:React.FC<RemainingTaskListProps> = ({ remainingTasksCount }) => {
    return (
        <div
        className="text-white font-bold p-2"
        >残り{remainingTasksCount}</div>
    )
}