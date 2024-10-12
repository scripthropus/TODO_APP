import React from 'react';

export const Sidebar = () => {
    
  return (
    <div className="w-44 text-white p-4" style={{background: "#111111"}}>
      <h1 className="text-2xl font-bold mb-4">Task</h1>
      <nav>
        <ul>
          <li className="mb-2">TODO 1</li>
          <li className="mb-2">TODO 2</li>
          <li className="mb-2">TODO 3</li>
        </ul>
      </nav>
    </div>
  );
};