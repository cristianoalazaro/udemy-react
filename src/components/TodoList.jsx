import CrossIcon from './icons/CrossIcon';

const TodoList = () => {
  return (
    <div className="bg-white rounded-t-md [&>article]:p-4 overflow-hidden mt-8">
      <article className="flex gap-4 border-b-gray-300 border-b border-2">
        <span className="rounded-full h-5 w-5 inline-block border-2 bg-gray-600"></span>
        <p className="text-gray-500 flex-1">
          complete online javascript course
        </p>
        <button>{<CrossIcon />}</button>
      </article>
      <article className="flex gap-4  border-b-gray-300 border-b border-2">
        <span className="rounded-full h-5 w-5 inline-block border-2 bg-gray-600"></span>
        <p className="text-gray-500 flex-1">
          complete online javascript course
        </p>
        <button>{<CrossIcon />}</button>
      </article>
      <article className="flex gap-4 flex-1  border-b-gray-300 border-b border-2">
        <span className="rounded-full h-5 w-5 inline-block border-2 bg-gray-600"></span>
        <p className="text-gray-500 flex-1">
          complete online javascript course
        </p>
        <button>{<CrossIcon />}</button>
      </article>
    </div>
  );
};

export default TodoList; 