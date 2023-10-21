"use client";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import {
  updateTodos,
  deleteTodos,
  fetchTodos,
} from "@store/features/todo/todoSlice";

const TodoItem = ({ task, id }) => {
  // VARIABLES DECALARATION
  const dispatch = useDispatch();

  // HANDLERS
  const deleteTaskHandler = () => {
    dispatch(deleteTodos({ id, toast }));
  };

  const completeTodoHandler = () => {
    dispatch(
      updateTodos({ id: id, fetchTodos: fetchTodos, dispatch: dispatch, toast })
    );
  };

  return (
    <label className="flex  items-center w-5/6 sm:w-full md:w-140 lg:w-150 my-3">
      <div className="input-group">
        <input
          type="text"
          placeholder={task}
          className="input truncate input-bordered input-primary w-5/6 sm:w-full md:w-140 lg:w-150  text-xl font-bold text-red-500"
          readOnly
        />
        <button
          className="btn btn-outline btn-error"
          onClick={deleteTaskHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
          </svg>
        </button>
      </div>
      <input
        type="checkbox"
        className="checkbox checkbox-info mx-2 "
        onClick={completeTodoHandler}
      />
    </label>
  );
};

export default TodoItem;
