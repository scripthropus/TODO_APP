import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom';

import { Sidebar } from '../src/components/Sidebar';
import { TODO } from '../src/App';

test("TODOの配列を渡してそれのタイトルが表示されるか", () => {
    const todos: TODO[] = [
        {id: "1", title: "test1", completed: false, content: "test1"},
        {id: "2", title: "test2", completed: true, content: "test2"},
        {id: "3", title: "test3", completed: false, content: "test3"},
        {id: "4", title: "test4", completed: true, content: "test4"},
        {id: "5", title: "test5", completed: false, content: "test5"},
    ];
    render(<Sidebar todos={todos}/>);
    todos.forEach(todo => {
        expect(screen.getByText(todo.title)).toBeInTheDocument();
    });
});