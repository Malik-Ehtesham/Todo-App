"use client";

import { useSelector } from "react-redux";

import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  // VARIABLES DECALARATION
  const todo = useSelector((state) => state.todo);

  const incompletedTodos = todo.todos.filter((todo) => {
    return todo.completed !== true;
  });

  return (
    <div className="flex justify-center flex-col">
      {incompletedTodos.length > 0 ? (
        <p className="text-xl my-3 font-semibold text-sky-500 text-center">
          YOUR TODOS
        </p>
      ) : null}

      {incompletedTodos.map((todo) => (
        <TodoItem key={todo._id} task={todo.task} id={todo._id} />
      ))}
    </div>
  );
};

export default TodoList;
