"use client";

import { Provider } from "react-redux";

import CreateTodo from "./components/CreateTodo/CreateTodo";
import MainList from "./components/MainList/MainList";
import store from "../store/store";

const Home = () => {
  return (
    <Provider store={store}>
      <section className="flex justify-center flex-col items-center">
        <CreateTodo />
        <MainList />
      </section>
    </Provider>
  );
};

export default Home;
