"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { createTodos } from "@store/features/todo/todoSlice";

import { toast } from "react-toastify";

const CreateTodo = () => {
  const todo = useSelector((state) => state.todo);

  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    dispatch(createTodos(task));
    setTask("");
  };

  return (
    <div className="w-4/5">
      <label className="input-group">
        <input
          type="text"
          placeholder="Enter Your Task"
          className="input input-bordered w-4/5 text-xl font-semibold"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="btn btn-outline btn-success w-1/4 sm:w-1/6 "
          onClick={addTodoHandler}
        >
          Add
        </button>
      </label>
      <p className="text-red-600 font-bold m-2 text-lg">{todo.error}</p>
    </div>
  );
};

export default CreateTodo;
