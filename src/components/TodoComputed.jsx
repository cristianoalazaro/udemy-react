const TodoComputed = ({ todoCount, clearTodos }) => {
  return (
    <section className="px-4 p-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800 transition-all duration-1000">
      <span className="text-gray-400">{`${todoCount} items left`}</span>
      <button className="text-gray-400" onClick={clearTodos}>Clear completed</button>
    </section>
  );
};

export default TodoComputed;
