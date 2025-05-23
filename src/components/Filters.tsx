"use client";
import { useTodoStore } from "@/store/todoStore";

export default function Filters() {
  const filter = useTodoStore((state) => state.filter);
  const setFilter = useTodoStore((state) => state.setFilter);

  return (
    <div className="flex gap-2 mb-4 justify-center">
      <button
        onClick={() => setFilter("all")}
        className={`px-3 py-1 rounded ${
          filter === "all" ? "bg-blue-500" : "bg-gray-500"
        }`}
      >
        Todas
      </button>
      <button
        onClick={() => setFilter("favorites")}
        className={`px-3 py-1 rounded ${
          filter === "favorites" ? "bg-yellow-500 text-black" : "bg-gray-500"
        }`}
      >
        Favoritas
      </button>
    </div>
  );
}
