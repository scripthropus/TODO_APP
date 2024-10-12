import React from 'react';
import { Header } from './components/Header.tsx'
import { Sidebar } from './components/Sidebar.tsx'
import './index.css';

const App = () => {
  const messageBox = {
    clipPath: "polygon(15% 6%, 100% 20%, 100% 75%, 27% 74%, 0 100%, 13% 67%, 0 52%)",
    background: "white",
    width: "20rem",
    height: "20rem",
  }
  return (
    <div className="flex flex-col h-screen w-screen bg-black">
      <Header/>
      <div className="flex h-screen">
      <Sidebar/>
        <div style={messageBox} className="flex justify-center items-center">
        <div className="text-3xl font-bold ">message</div>
        </div>
      </div>
    </div>
  );
};

export default App;
