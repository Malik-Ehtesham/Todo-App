"use client";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchTodos } from "@store/features/todo/todoSlice";

import TodoItem from "../TodoItem/TodoItem";
import Spinner from "../Spinner/Spinner";

const TodoList = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className="flex justify-center flex-col">
      <Spinner />
      {todo.todos.map((todo) => (
        <TodoItem key={todo._id} task={todo.task} id={todo._id} />
      ))}
    </div>
  );
};

export default TodoList;
