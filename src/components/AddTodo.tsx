import React from 'react';
import { TODO, Modes, SERVER_URL } from '../App';

type AddTodoProps = {
    todos: TODO[];
    setTodos: React.Dispatch<React.SetStateAction<TODO[]>>;
    setMode: React.Dispatch<React.SetStateAction<Modes>>
}

export const AddTodo:React.FC<AddTodoProps> = ( { todos, setTodos, setMode }) => {
    const handleSetTodos = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            title: { value: string };
            content: { value: string };
        };
        const newTodo: TODO = {
            id: `${todos.length+1}`,
            title: target.title.value,
            content: target.content.value,
            completed: false,
        }
        try {
            const res= await fetch(`${SERVER_URL}/todos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTodo),
            });

            if (!res.ok) {
                throw new Error('TODOの追加に失敗しました');
            }

            const savedTodo = await res.json();
            setTodos([...todos, newTodo]);
        }catch (error) {
            console.error(error);
            alert("TODOの追加に失敗しました");
        }

        setMode("view");
    }
    return(
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
    );
}