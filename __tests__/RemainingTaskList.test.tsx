import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom';

import { RemainingTaskList } from '../src/components/RemainingTaskList';

test("残りのタスクを渡してその数を表示するか", () => {
    const remainingTasks = 100;
    render(<RemainingTaskList remainingTasksCount={remainingTasks}/>);
    expect(screen.getByText(`残り${remainingTasks}`)).toBeInTheDocument();
});