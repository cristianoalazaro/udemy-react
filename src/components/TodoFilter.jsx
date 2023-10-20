const TodoFilter = ({ setFilter, filter }) => {
  return (
    <section className="container mt-8 overflow-hidden">
      <div className="bg-white p-4 rounded-md flex justify-center gap-4 dark:bg-gray-800 transition-all duration-1000">
        <button onClick={() => setFilter('all')} className={`${filter === 'all' 
          ? "text-blue-600 hover:text-gray-500" 
          : "text-gray-400 hover:text-blue-500"}`}>
            All
        </button>
        <button onClick={() => setFilter('active')} className={`${filter === 'active' 
          ? "text-blue-600 hover:text-gray-500" 
          : "text-gray-400 hover:text-blue-500"}`}>
            Active
        </button>
        <button onClick={() => setFilter('completed')} className={`${filter === 'completed' 
          ? "text-blue-600 hover:text-gray-500" 
          : "text-gray-400 hover:text-blue-500"}`}>
            Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
