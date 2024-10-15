import { TODO } from "../App";

type AddTODOProps = {
    todos: TODO[];
    setTodos: React.Dispatch<React.SetStateAction<TODO[]>>;
};

export const AddTODOButton:React.FC<AddTODOProps> = ({ setTodos, todos }) => {
    const handleAddTODO = () => {
        alert("クリック!");
    }

    return(
    <>
    <button className="bg-white text-black"
    onClick={handleAddTODO}
    >
        タスクの追加
    </button>
    </>
    );
}