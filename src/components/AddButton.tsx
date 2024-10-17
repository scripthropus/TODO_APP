import { TODO, Modes } from "../App.tsx";

type AddTODOProps = {
    todos: TODO[];
    setMode: React.Dispatch<React.SetStateAction<Modes>>;
};

export const AddButton:React.FC<AddTODOProps> = ({ setMode, todos }) => {
    const handleMode = () => {
        setMode("add");
    }

    return(
    <>
    <button className="bg-white text-black"
    onClick={handleMode}
    >
        タスクの追加
    </button>
    </>
    );
}