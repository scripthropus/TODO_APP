import React from 'react';
import { TODO, Modes } from '../App';

type EditProps = {
    todos: TODO[];
    setTodos: React.Dispatch<React.SetStateAction<TODO[]>>;
    setMode: React.Dispatch<React.SetStateAction<Modes>>
}

export const Edit:React.FC<EditProps> = ({ todos, setTodos, setMode }) => {
    return (<>
    <h1 className="flex w-full h-full justify-center items-center text-white">実装中</h1>
    </>)
}
