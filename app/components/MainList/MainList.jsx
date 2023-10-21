import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchTodos } from "@store/features/todo/todoSlice";
import TodoList from "../TodoList/TodoList";
import CompletedTodoList from "../CompletedTodoList/CompletedTodoList";
import Spinner from "../Spinner/Spinner";

const MainList = () => {
  // VARIABLES DECALARATION
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todo);

  // USE EFFECTS

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return todo.loading ? (
    <Spinner />
  ) : (
    <>
      <TodoList />
      <CompletedTodoList />
    </>
  );
};

export default MainList;
