const TodoCreate = ({ createTodo }) => {
  return (
    <form className="bg-white rounded-md overflow-hidden py-4 flex gap-2 items-center px-4">
      <span className="rounded-full h-5 w-5 inline-block border-2 bg-gray-600"></span>
      <input
        className="w-full text-gray-400 border-none outline-none"
        type="text"
        placeholder="Create a new todo..."
      />
    </form>
  )
};

export default TodoCreate;