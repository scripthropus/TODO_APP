import { TODO, Modes } from '../App.tsx';

type ViewProps = {
    todo:TODO;
    setMode: React.Dispatch<React.SetStateAction<Modes>>;
};

const messageBox = {
    clipPath: "polygon(15% 6%, 100% 20%, 100% 75%, 27% 74%, 0 100%, 13% 67%, 0 52%)",
    background: "white",
    width: "20rem",
    height: "20rem",
    position: "relative" as const,
};

const textContainer = {
    position: "absolute" as const,
    top: "20%",
    left: "15%",
    right: "5%",
    bottom: "25%",
};

export const View:React.FC<ViewProps> = ({ todo, setMode }) => {
    return(
    <div
     className="w-full h-full flex justify-center mr-auto items-center"
    >
        <div 
        style={messageBox} 
        onClick={() => setMode("edit")}
        >
        <div 
        className="text-3xl font-bold "
        style={textContainer}
        >{todo.content}</div>
        </div>
    </div>
    );
}