import { TODO } from '../App.tsx';

type ViewProps = {
    todo:TODO;
}
const messageBox = {
    clipPath: "polygon(15% 6%, 100% 20%, 100% 75%, 27% 74%, 0 100%, 13% 67%, 0 52%)",
    background: "white",
    width: "20rem",
    height: "20rem",
}

export const View:React.FC<ViewProps> = ({ todo }) => {
    return(<>
     <div style={messageBox} className="flex justify-center items-center">
     <div className="text-3xl font-bold ">{todo.content}</div>
     </div>
    </>);
}