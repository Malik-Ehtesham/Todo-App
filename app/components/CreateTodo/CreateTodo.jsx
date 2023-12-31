"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSession, signIn } from "next-auth/react";
import { toast } from "react-toastify";

import { createTodos } from "@store/features/todo/todoSlice";

const CreateTodo = () => {
  // VARIABLES DECALARATION
  const [task, setTask] = useState("");

  const { data: session } = useSession();

  const todo = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  let email;

  if (session) {
    email = session.user.email;
  }
  const todoData = {
    task,
    email,
  };

  // HANDLERS
  const addTodoHandler = () => {
    dispatch(createTodos({ todoData, toast }));
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
        {session ? (
          <button
            className="btn btn-outline btn-success w-1/4 sm:w-1/6 "
            onClick={addTodoHandler}
          >
            Add
          </button>
        ) : (
          <button
            className="btn btn-outline btn-success w-1/4 sm:w-1/6 "
            onClick={() => signIn()}
          >
            Add
          </button>
        )}
      </label>
      <p className="text-red-600 font-bold m-2 text-lg">{todo.error}</p>
    </div>
  );
};

export default CreateTodo;
