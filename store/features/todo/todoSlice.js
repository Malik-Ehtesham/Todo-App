import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  todos: [],
  error: "",
};

// Generate pending, fulfilled and rejected action types
export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/todos");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const createTodos = createAsyncThunk(
  "todo/createTodos",
  async ({ todoData, toast }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/todos", todoData);

      console.log(response);
      toast.info("Task Added!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.errors.task.message);
    }
  }
);

export const deleteTodos = createAsyncThunk(
  "todo/deleteTodos",
  async ({ id, toast }, { rejectWithValue }) => {
    console.log(id);
    try {
      const response = await axios.delete(`/api/todos/${id}`);

      console.log(response);

      toast.success("Task Deleted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data.error.errors.task.message);
    }
  }
);

export const updateTodos = createAsyncThunk(
  "todo/updateTodos",
  async ({ id, fetchTodos, dispatch }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/api/todos/${id}`, {
        completed: true,
      });
      dispatch(fetchTodos());

      toast.info("Task Completed!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
      state.todos = [];
      state.error = "";
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
      state.error = "";
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(createTodos.pending, (state) => {
      state.loading = true;
      // state.todos = [];
      state.error = "";
    });
    builder.addCase(createTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = [...state.todos, action.payload];
      state.error = "";
    });
    builder.addCase(createTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteTodos.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteTodos.fulfilled, (state, action) => {
      console.log(action.payload);
      const updatedTodos = state.todos.filter(
        (task) => task._id !== action.payload
      );
      console.log(updatedTodos);
      state.loading = false;
      state.todos = updatedTodos;
      state.error = "";
    });
    builder.addCase(deleteTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateTodos.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateTodos.fulfilled, (state, action) => {
      state.loading = false;
      // state.todos = updatedTodos;
      state.error = "";
    });
    builder.addCase(updateTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default todoSlice.reducer;
