import React from 'react';
import { TODO, Modes } from '../App.tsx';
import { AddButton } from './AddButton.tsx';

type sidebarProps = {
    todos: TODO[];
    setMode: React.Dispatch<React.SetStateAction<Modes>>;
    setSelectedTodoId: React.Dispatch<React.SetStateAction<TODO['id']>>;
}

export const Sidebar:React.FC<sidebarProps> = ({ todos, setMode, setSelectedTodoId}) => {
  const handleSelectedTodosId = (id: TODO['id']) => {
    setSelectedTodoId(id);
  }
  return (
    <div className="w-44 text-white p-4" style={{background: "#111111"}}>
      <h1 className="text-2xl font-bold mb-4">Task</h1>
      <AddButton todos={todos} setMode={setMode}/>
      <nav>
        <ul>
            {todos.map(todo => (
                <li 
                key={todo.id}
                onClick={() => handleSelectedTodosId(todo.id)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};