"use client";
import { useTodoStore } from "@/store/todoStore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  const filter = useTodoStore((state) => state.filter);

  const filtered =
    filter === "favorites" ? todos.filter((todo) => todo.favorite) : todos;

  if (filtered.length === 0) {
    return <p className="text-center text-gray-300">No hay tareas.</p>;
  }

  return (
    <div>
      {filtered.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          favorite={todo.favorite}
        />
      ))}
    </div>
  );
}
