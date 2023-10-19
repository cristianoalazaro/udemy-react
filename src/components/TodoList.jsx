import TodoItem from './TodoItem';
import CrossIcon from './icons/CrossIcon';

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div className="bg-white rounded-t-md [&>article]:p-4 overflow-hidden mt-8">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default TodoList; 