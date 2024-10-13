import React, { useState } from 'react';
import { Header } from './components/Header.tsx'
import { Sidebar } from './components/Sidebar.tsx'
import './index.css';

export type TODO = {
  id: string;
  title: string;
  completed: boolean;
  content: string;
};
const messageBox = {
  clipPath: "polygon(15% 6%, 100% 20%, 100% 75%, 27% 74%, 0 100%, 13% 67%, 0 52%)",
  background: "white",
  width: "20rem",
  height: "20rem",
}

const App = () => {
  const [todos, setTodos] = useState<TODO[]>([{id:"000", title: "test", completed: false, content: "test_todo"}]);
 return (
    <div className="flex flex-col h-screen w-screen bg-black">
      <Header todos={todos} />
      <div className="flex h-screen">
      <Sidebar todos={todos}/>
        <div style={messageBox} className="flex justify-center items-center">
        <div className="text-3xl font-bold ">{todos[0].content}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
