import React, { useState } from 'react';
import { Header } from './components/Header.tsx'
import { Sidebar } from './components/Sidebar.tsx'
import { View } from './components/View.tsx';
import { AddTodo } from './components/AddTodo.tsx';
import './index.css';

export type TODO = {
  id: string;
  title: string;
  completed: boolean;
  content: string;
};

export type Modes= "view" | "add" | "edit";

const App = () => {
  const [todos, setTodos] = useState<TODO[]>([{id:"000", title: "test", completed: false, content: "test_todo"}]);
  const [selectedTodoId, setSelectedTodoId] = useState<TODO['id']>(todos[0].id);
  const [mode, setMode] = useState<Modes>("view");

  const selectedTodo = todos.find(todo => todo.id === selectedTodoId);
 return (
    <div className="flex flex-col h-screen w-screen bg-black">
      <Header todos={todos} />
      <div className="flex h-screen">
      <Sidebar todos={todos} setMode={setMode} setSelectedTodoId={setSelectedTodoId}/>
      { mode == "view" && selectedTodo && <View todo={selectedTodo}/>}
      { mode == "view" && !selectedTodo && <View todo={{id:"-1", title: "None", completed: true, content: "No todo selected"}}/>}
      { mode == "add" && <AddTodo todos={todos} setTodos={setTodos} setMode={setMode}/>}
      </div>
    </div>
  );
};

export default App;
