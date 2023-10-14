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
  async (todo, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/todos", {
        task: todo,
      });

      console.log(response);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.errors.task.message);
    }
  }
);

export const deleteTodos = createAsyncThunk(
  "todo/deleteTodos",
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      const response = await axios.delete(`/api/todos/${id}`);

      console.log(response);

      return id;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.error.errors.task.message);
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
  },
});

export default todoSlice.reducer;

// toast.success("Todo Added!", {
//   position: "top-right",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   theme: "light",
// });
