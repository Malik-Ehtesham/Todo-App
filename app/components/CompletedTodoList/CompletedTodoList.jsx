import { useSelector } from "react-redux";

import CompletedTodoItem from "../CompletedTodoItem/CompletedTodoItem";

const CompletedTodoList = () => {
  // VARIABLES DECALARATION
  const todo = useSelector((state) => state.todo);

  const completedTodos = todo.todos.filter((todo) => {
    return todo.completed === true;
  });

  return (
    <div className="flex justify-center flex-col">
      {completedTodos.length > 0 ? (
        <p className="text-xl my-3 font-semibold text-green-500 text-center">
          COMPLETED TODOS
        </p>
      ) : null}

      {completedTodos.map((todo) => (
        <CompletedTodoItem key={todo._id} task={todo.task} id={todo._id} />
      ))}
    </div>
  );
};

export default CompletedTodoList;
