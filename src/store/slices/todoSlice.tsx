import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  streak?: number;
}

// Load todos from localStorage
const loadTodosFromStorage = (): Todo[] => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
};

// Save todos to localStorage
const saveTodosToStorage = (todos: Todo[]): void => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Initial state setup
const initialState: TodoState = {
  todos: loadTodosFromStorage(),
  loading: false,
  error: null,
  searchQuery: "",
};

// Fetch todos from API if not already in localStorage
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const storedTodos = loadTodosFromStorage();
  if (storedTodos.length > 0) {
    return storedTodos;
  }

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=15"
  );

  // Map API response to match Todo interface
  const newTodos: Todo[] = response.data.map(
    (todo: { id: number; title: string }) => ({
      ...todo,
      completed: false,
    })
  );

  saveTodosToStorage(newTodos);
  return newTodos;
});

// Redux Slice to handle todos actions
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Add a new todo
    addTodo: (state, action: PayloadAction<{ title: string }>) => {
      const newTodo: Todo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
      saveTodosToStorage(state.todos);
    },

    // Edit an existing todo
    editTodo: (state, action: PayloadAction<{ id: number; title: string }>) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        saveTodosToStorage(state.todos);
      }
    },

    // Toggle the completion status of a todo
    toggleTodoStatus: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodosToStorage(state.todos);
      }
    },

    // Delete a todo
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
      saveTodosToStorage(state.todos);
    },

    // Move a todo between completed and in-progress
    moveTodo: (
      state,
      action: PayloadAction<{ id: number; completed: boolean }>
    ) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.completed = action.payload.completed;
        saveTodosToStorage(state.todos);
      }
    },

    // Set search query for filtering tasks in views
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch todos";
      });
  },
});

// Export actions for use in components
export const {
  addTodo,
  editTodo,
  deleteTodo,
  moveTodo,
  setSearchQuery,
  toggleTodoStatus,
} = todoSlice.actions;

// Export the reducer to be used in the store
export default todoSlice.reducer;
