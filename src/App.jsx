import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
  { id: 1, title: "Go to the gym", completed: true },
  { id: 2, title: "10 minutes of meditation", completed: false },
  { id: 3, title: "Pick up groceries", completed: false },
  { id: 4, title: "Complete todo app on frontend", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title => {
    const newTodo = {
      id: Date.now,
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  });

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <div className="bg-[url(./assets/images/bg-mobile-light.jpg)] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
        <Header />

        <main className="container x-auto px-4 mt-8">
          <TodoCreate createTodo={createTodo} />

          <TodoList todos={todos} removeTodo={removeTodo} />

          <TodoComputed />

          <TodoFilter />
        </main>

        <footer className="text-center mt-8">
          Drag and drop to reorder list
        </footer>
      </div>
    </>
  );
};

export default App;
