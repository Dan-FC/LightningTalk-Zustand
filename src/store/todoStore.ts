// src/store/todoStore.ts
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  text: string;
  favorite: boolean;
};

type Filter = "all" | "favorites";

type TodoStore = {
  todos: Todo[];
  filter: Filter;
  addTodo: (text: string) => void;
  toggleFavorite: (id: string) => void;
  setFilter: (filter: Filter) => void;
  removeTodo: (id: string) => void; // ✅ NUEVO
};

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],
  filter: "all",
  addTodo: (text) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      favorite: false,
    };
    set((state) => ({
      todos: [...state.todos, newTodo],
    }));
  },
  toggleFavorite: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, favorite: !todo.favorite } : todo
      ),
    })),
  setFilter: (filter) => set({ filter }),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
