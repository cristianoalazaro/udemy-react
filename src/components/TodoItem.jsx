import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({ todo }) => {
    return (
        <article className="flex gap-4 border-b-gray-300 border-b border-2">
            <span className="rounded-full h-5 w-5 inline-block border-2 bg-gray-600"></span>
            <p className="text-gray-500 flex-1">
                {todo.title}
            </p>
            <button>{<CrossIcon />}</button>
        </article>
    )
};

export default TodoItem;