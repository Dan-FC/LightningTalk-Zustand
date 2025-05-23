import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

// Define el tipo de un Todo
type Todo = {
  id: string;
  text: string;
  favorite: boolean;
};

// Define los posibles filtros
type Filter = "all" | "favorites";

// Define la estructura del store de Zustand
type TodoStore = {
  todos: Todo[];
  filter: Filter;
  addTodo: (text: string) => void;
  toggleFavorite: (id: string) => void;
  setFilter: (filter: Filter) => void;
  removeTodo: (id: string) => void;
};

// Crea el store de Zustand para manejar el estado global de las tareas
export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [], // Estado inicial: lista vacía de tareas
  filter: "all", // Estado inicial: mostrar todas las tareas

  // Agrega una nueva tarea a la lista
  addTodo: (text) => {
    const newTodo: Todo = {
      id: uuidv4(), // Genera un ID único
      text,
      favorite: false, // Por defecto no es favorito
    };
    set((state) => ({
      todos: [...state.todos, newTodo], // Agrega la nueva tarea al estado
    }));
  },

  // Cambia el estado de favorito de una tarea
  toggleFavorite: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, favorite: !todo.favorite } : todo
      ),
    })),

  // Cambia el filtro actual (todas o solo favoritas)
  setFilter: (filter) => set({ filter }),

  // Elimina una tarea por su ID
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
