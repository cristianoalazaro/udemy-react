import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) ?? [];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  const filterdTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default: 
        return todos;
    };
  };

  const createTodo = (title => {
    const newTodo = {
      id: new Date().getMilliseconds(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  });

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id
      ? {...todo, completed: !todo.completed}
      : todo));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const todoComputedFilter = filterdTodos().filter(todo => !todo.completed).length;

  const clearTodos = () => setTodos(todos.filter(todo => !todo.completed))

  return (
    <>
      <div className="bg-[url(./assets/images/bg-mobile-light.jpg)] bg-no-repeat bg-contain bg-gray-300
      min-h-screen dark:bg-gray-900 dark:bg-[url(./assets/images/bg-mobile-dark.jpg)] transition-all duration-1000
        md:bg-[url(./assets/images/bg-desktop-light.jpg)] md:dark:bg-[url(./assets/images/bg-mobile-dark.jpg)]">
        <Header />

        <main className="container mx-auto px-4 mt-8 md:max-w-xl">
          <TodoCreate createTodo={createTodo} />

          <TodoList todos={filterdTodos} updateTodo={updateTodo} removeTodo={removeTodo} />

          <TodoComputed todoCount={todoComputedFilter} clearTodos={clearTodos} />

          <TodoFilter setFilter={setFilter} filter={filter} />
        </main>

        <footer className="text-center mt-8 dark:text-gray-400 transition-all duration-1000">
          Drag and drop to reorder list
        </footer>
      </div>
    </>
  );
};

export default App;
