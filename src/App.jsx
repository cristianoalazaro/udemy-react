import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      <div className="bg-[url(./assets/images/bg-mobile-light.jpg)] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
        <Header />

        <main className="container x-auto px-4 mt-8">
          <TodoCreate />

          <TodoList />

          <TodoComputed />

          <TodoFilter />
        </main>

        <p className="text-center mt-8">Drag and drop to reorder list</p>
      </div>
    </>
  );
};

export default App;
