import React from 'react';
import { TODO } from '../App.tsx';

type sidebarProps = {
    todos: TODO[];
}

export const Sidebar:React.FC<sidebarProps> = ({ todos }) => {
  return (
    <div className="w-44 text-white p-4" style={{background: "#111111"}}>
      <h1 className="text-2xl font-bold mb-4">Task</h1>
      <nav>
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.title}
                </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};