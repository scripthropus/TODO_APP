import React from 'react';
import { TODO, Modes } from '../App';

type EditProps = {
    currentTodoId: TODO["id"];
    todos: TODO[];
    setTodos: React.Dispatch<React.SetStateAction<TODO[]>>;
    setMode: React.Dispatch<React.SetStateAction<Modes>>
}

export const Edit:React.FC<EditProps> = ({ currentTodoId,todos, setTodos, setMode }) => {

    const handleSetTodos = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            title: { value: string };
            content: { value: string };
        };
        const newTodo: TODO = {
            id: `${currentTodoId}`,
            title: target.title.value,
            content: target.content.value,
            completed: false,
        };

        setTodos(todos.map(todo => {
            if(todo.id === currentTodoId) {
                return newTodo;
            } else {
                return todo;
            }
        }));
        setMode("view");
    }

    return (<div className='flex flex-col w-full h-full justify-center items-center'>
    <h1 className=" text-white">実装中</h1>
    <h1 className=" text-white">TODOの変更</h1>
    <form onSubmit={handleSetTodos} className='flex flex-col'>
        <h1 className='text-3xl text-white'>追加するモード</h1>
        <input type="text"
            name="title"
            placeholder='タイトルを入力してください'
            className='p-4 border'
        />
        <input type="text"
            name="content"
            placeholder='TODOの内容を入力してください'
            className='p-4 border'
        />
        <button 
            type="submit"
            className='bg-white border-spacing-8'
        >追加</button>
    </form>
    <button
    className='text-white'
    onClick={() => setMode("view")}
    >キャンセル</button>
    </div>
    );
}
