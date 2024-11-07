import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx'
import { Sidebar } from './components/Sidebar.tsx'
import { View } from './components/View.tsx';
import { AddTodo } from './components/AddTodo.tsx';
import './index.css';
import { Edit } from './components/Edit.tsx';

export type TODO = {
  id: string;
  title: string;
  completed: boolean;
  content: string;
};

export type Modes= "view" | "add" | "edit";

export const SERVER_URL = "http://localhost:3001";

const App = () => {
  const [todos, setTodos] = useState<TODO[]>([]);
  const [selectedTodoId, setSelectedTodoId] = useState<TODO['id']>("");
  const [mode, setMode] = useState<Modes>("view");

  useEffect(() => {
    fetchTodos();
  }, []);

  const serverConnectionTest = async () => {
    try {
      const res = await fetch(`${SERVER_URL}/`)
      const responseTest = await res.json();
      console.log(responseTest);
    } catch (error) {
      console.error("サーバーとの通信が失敗しました");
      console.error(error);
    }
  }

  serverConnectionTest();

  const fetchTodos = async () => {
    try {
      const res = await fetch(`${SERVER_URL}/todos`)
      const data = await res.json();
      setTodos(data);
      if (data.length > 0 && !selectedTodo) {
        setSelectedTodoId(data[0].id);
      }
    } catch(error) {
      console.error("DBからTODOを取得する段階でのエラー");
      console.error(error);
    }
  }

  const selectedTodo = todos.find(todo => todo.id === selectedTodoId);
 return (
    <div className="flex flex-col h-screen w-screen bg-black">
      <Header todos={todos} />
      <div className="flex h-screen">
      <Sidebar todos={todos} setMode={setMode} setSelectedTodoId={setSelectedTodoId}/>
      { mode == "view" && selectedTodo && <View todo={selectedTodo} setMode={setMode}/>}
      { mode == "view" && !selectedTodo && <View todo={{id:"-1", title: "None", completed: true, content: "No todo selected"}} setMode={setMode}/>}
      { mode == "add" && <AddTodo todos={todos} setTodos={setTodos} setMode={setMode}/>}
      { mode == "edit" && selectedTodo && <Edit currentTodoId={selectedTodo.id} todos={todos} setMode={setMode} setTodos={setTodos}/> }
      </div>
    </div>
  );
};

export default App;
