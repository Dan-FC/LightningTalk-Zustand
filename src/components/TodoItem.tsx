"use client";
import { useTodoStore } from "@/store/todoStore";
import { Trash2, Star, StarOff } from "lucide-react";

interface Props {
  id: string;
  text: string;
  favorite: boolean;
}

export default function TodoItem({ id, text, favorite }: Props) {
  // * Obtenemos las acciones para afectar los estados
  const toggleFavorite = useTodoStore((state) => state.toggleFavorite);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <div className="flex items-center justify-between bg-gray-300 text-black px-4 py-2 rounded mb-2 shadow">
      <span>{text}</span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => toggleFavorite(id)}
          title="Marcar como favorito"
          className="text-yellow-500 hover:text-yellow-600"
        >
          {favorite ? <Star /> : <StarOff />}
        </button>
        <button
          onClick={() => removeTodo(id)}
          title="Eliminar tarea"
          className="text-red-500 hover:text-red-600"
        >
          <Trash2 />
        </button>
      </div>
    </div>
  );
}
