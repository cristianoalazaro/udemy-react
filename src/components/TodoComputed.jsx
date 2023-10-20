const TodoComputed = ({ todoCount }) => {
  return (
    <section className="px-4 p-4 flex justify-between bg-white rounded-b-md">
      <span className="text-gray-400">{`${todoCount} items left`}</span>
      <button className="text-gray-400">Clear completed</button>
    </section>
  );
};

export default TodoComputed;
