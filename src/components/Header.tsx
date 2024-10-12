import { RemainingTaskList } from './RemainingTaskList.tsx';

export const Header = () => {
    return (
    <div className="flex bg-red-600 p-2 w-full justify-center">
        <div className="bg-white p-2 w-60">
            <h1 className="text-3xl font-bold text-red-600 text-center">TODO APP</h1>
        </div>
        <RemainingTaskList/>
    </div>
    );
}