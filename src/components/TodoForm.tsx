"use client";
import { useState } from "react";
import { useTodoStore } from "@/store/todoStore";

// Componente para agregar nuevas tareas al store global
export default function TodoForm() {
  // Estado local para controlar el texto del input
  const [text, setText] = useState("");
  // Obtiene la función para agregar tareas desde el store
  const addTodo = useTodoStore((state) => state.addTodo);

  // Maneja el envío del formulario: agrega la tarea y limpia el input
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText("");
    }
  };

  // Renderiza el formulario con un input y un botón para agregar tareas
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        className="flex-1 p-2 rounded text-black"
        placeholder="Escribe una tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Agregar
      </button>
    </form>
  );
}
// Este componente permite a los usuarios agregar nuevas tareas al store global de Zustand.
