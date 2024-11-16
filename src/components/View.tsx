import { TODO, Modes } from '../App.tsx';

type ViewProps = {
    todo:TODO;
    setMode: React.Dispatch<React.SetStateAction<Modes>>;
};


export const View:React.FC<ViewProps> = ({ todo, setMode }) => {
    return(
    <div
     className="w-full h-full flex justify-center mr-auto items-center"
    >
        <div 
        onClick={() => setMode("edit")}
        >
        <div
            className="text-white font-bold text-3xl p-2"
        >
            {todo.title}
        </div>
        <div 
        className="text-3xl font-bold text-white"
        >{todo.content}</div>
        </div>
    </div>
    );
}