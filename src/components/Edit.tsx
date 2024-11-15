import React from 'react';
import { TODO, Modes, SERVER_URL } from '../App';

type EditProps = {
    currentTodoId: TODO["id"];
    todos: TODO[];
    setTodos: React.Dispatch<React.SetStateAction<TODO[]>>;
    setMode: React.Dispatch<React.SetStateAction<Modes>>
}

export const Edit:React.FC<EditProps> = ({ currentTodoId,todos, setTodos, setMode }) => {

    const handleSetTodos = async (e: React.FormEvent<HTMLFormElement>) => {
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

        try {
            const res = await fetch(`${SERVER_URL}/todos/${currentTodoId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: target.title.value,
                    content: target.content.value,
                    completed: false
                })
            });

            if (!res.ok){ throw new Error('TODOの更新に失敗しました');}
            const updatedTodo = await res.json();
            setTodos(todos.map(todo => 
                todo.id === currentTodoId ? updatedTodo : todo
            ));

        } catch (error) {
            console.error(error);
            alert("TODOの更新に失敗しました");
        }
     
        setMode("view");
    }

    return (<div className='flex flex-col w-full h-full justify-center items-center'>
    <h1 className=" text-white">TODOの変更</h1>
    <form onSubmit={handleSetTodos} className='flex flex-col'>
        <h1 className='text-3xl text-white'>編集モード</h1>
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
        >変更の確定</button>
    </form>
    <button
    className='text-white'
    onClick={() => setMode("view")}
    >キャンセル</button>
    </div>
    );
}
