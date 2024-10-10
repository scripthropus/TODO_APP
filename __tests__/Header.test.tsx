import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom';

import { Header } from '../src/components/Header.tsx';

test("Headerと表示されるか", () => {
    render(<Header/>)
    expect(screen.getByText("Header")).toBeInTheDocument();
})