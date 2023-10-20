import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return setTitle('');
    }

    createTodo(title.trim());
    setTitle('');
  }

  return (
    <form 
      className="bg-white rounded-md overflow-hidden py-4 flex gap-2 items-center px-4 dark:bg-gray-800 transition-all duration-1000"
      onSubmit={handleSubmit}  
    >
      <span className="rounded-full h-5 w-5 inline-block border-2 bg-gray-600"></span>
      <input
        className="w-full text-gray-400 border-none outline-none dark:bg-gray-800 transition-all duration-1000"
        type="text"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  )
};

export default TodoCreate;