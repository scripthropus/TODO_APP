import React, { useState } from 'react';
import { Header } from './components/Header.tsx'
import { Sidebar } from './components/Sidebar.tsx'
import { View } from './components/View.tsx';
import './index.css';

export type TODO = {
  id: string;
  title: string;
  completed: boolean;
  content: string;
};

type Mode = "view" | "add" | "edit";

const App = () => {
  const [todos, setTodos] = useState<TODO[]>([{id:"000", title: "test", completed: false, content: "test_todo"}]);
  const [mode, setMode] = useState<Mode>("view");
 return (
    <div className="flex flex-col h-screen w-screen bg-black">
      <Header todos={todos} />
      <div className="flex h-screen">
      <Sidebar todos={todos} setTodos={setTodos}/>
      { mode == "view" && <View todos={todos} setTodos={setTodos}/>}
      </div>
    </div>
  );
};

export default App;
