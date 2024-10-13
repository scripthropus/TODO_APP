import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom';

import { Header } from '../src/components/Header.tsx';

test("TODO APPと表示されるか", () => {
    render(<Header todos={[{id:"000", title: "test", completed: false, content: "test_todo"}]}/>)
    expect(screen.getByText("TODO APP")).toBeInTheDocument();
})