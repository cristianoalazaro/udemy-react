import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <>
      <div className="bg-[url(./assets/images/bg-mobile-light.jpg)] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
        <header className="container x-auto px-4 pt-8">
          <div className="flex justify-between text-3xl font-bold tracking-[0.3em]">
            <h1 className="uppercase text-white">Todo</h1>
            <button>{<MoonIcon />}</button>
          </div>
          <form className="bg-white rounded-md overflow-hidden py-4 flex gap-2 items-center px-4 mt-8">
            <span className="rounded-full h-5 w-5 inline-block border-2 bg-gray-600"></span>
            <input
              className="w-full text-gray-400 border-none outline-none"
              type="text"
              placeholder="Create a new todo..."
            />
          </form>
        </header>
        <main className="container x-auto px-4 mt-8">
          <div className="bg-white rounded-md [&>article]:p-4 overflow-hidden">
            <article className="flex gap-4 border-b-gray-300 border-b border-2">
              <span className="rounded-full h-5 w-5 inline-block border-2 bg-gray-600"></span>
              <p className="text-gray-500 flex-1">complete online javascript course</p>
              <button>{<CrossIcon />}</button>
            </article>
            <article className="flex gap-4  border-b-gray-300 border-b border-2">
              <span className="rounded-full h-5 w-5 inline-block border-2 bg-gray-600"></span>
              <p className="text-gray-500 flex-1">complete online javascript course</p>
              <button>{<CrossIcon />}</button>
            </article>
            <article className="flex gap-4 flex-1  border-b-gray-300 border-b border-2">
              <span className="rounded-full h-5 w-5 inline-block border-2 bg-gray-600"></span>
              <p className="text-gray-500 flex-1">complete online javascript course</p>
              <button>{<CrossIcon />}</button>
            </article>
          </div>

          <section className="px-4 p-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear completed</button>
          </section>
        </main>

        <section className="container mt-8 p-4 overflow-hidden">
          <div className="bg-white p-4 rounded-md flex justify-center gap-4">
            <button className="text-blue-600">All</button>
            <button className="hover:text-blue-600">Active</button>
            <button className="hover:text-blue-600">Completed</button>
          </div>
        </section>

        <p className="text-center mt-8">Drag and drop to reorder list</p>
      </div>
    </>
  );
};

export default App;
