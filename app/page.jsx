"use client";

import CreateTodo from "./components/CreateTodo/CreateTodo";
import TodoList from "./components/TodoList/TodoList";
import CompletedTodoList from "./components/CompletedTodoList/CompletedTodoList";
import store from "../store/store";
import { Provider } from "react-redux";

const Home = () => {
  return (
    <Provider store={store}>
      <section className="flex justify-center flex-col items-center">
        <h1 className="text-center text-5xl my-5 text-orange-400 font-bold">
          To-Do List
        </h1>
        <CreateTodo />
        <p className="text-xl my-3 font-semibold text-sky-500">YOUR TODOS</p>
        <TodoList />
        <p className="text-xl my-3 font-semibold text-green-500">
          COMPLETED TODOS
        </p>
        <CompletedTodoList />
      </section>
    </Provider>
  );
};

export default Home;
