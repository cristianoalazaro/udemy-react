import CrossIcon from "./icons/CrossIcon";
import Iconcheck from "./icons/Iconcheck";

const TodoItem = ({ todo, removeTodo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 border-b border-b-gray-400">
            <button
                className={`h-5 w-5 rounded-full  border-2  
                    ${completed 
                        ? `flex flex-none bg-gradient-to-r from-indigo-500
                             via-purple-500 to-pink-500 justify-center items-center` 
                        : "inline-block"}`
                    }                
            >
                {
                    completed && <Iconcheck />
                }
            </button>
            <p className={`grow text-gray-600 
                ${completed && `line-through`}`}>
                {todo.title}
            </p>
            <button className="flex-none" onClick={() =>removeTodo(id)}>
                {<CrossIcon />}
            </button>
        </article>
    )
};

export default TodoItem;