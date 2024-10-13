import { TODO } from '../App.tsx';
import { RemainingTaskList } from './RemainingTaskList.tsx';

type HeaderProps = {
    todos: TODO[];
}

export const Header:React.FC<HeaderProps> = ({ todos }) => {
    return (
    <div className="flex bg-red-600 p-2 w-full justify-center">
        <div className="bg-white p-2 w-60">
            <h1 className="text-3xl font-bold text-red-600 text-center">TODO APP</h1>
        </div>
        <RemainingTaskList remainingTasksCount={todos.filter(todo => !todo.completed).length}/>
    </div>
    );
}