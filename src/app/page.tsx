import Image from "next/image";
import TodoForm from "@/components/TodoForm";
import Filters from "@/components/Filters";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-950 text-white">
      <h1 className="text-4xl font-bold mb-4">Zustand - Estado Global</h1>
      <p className="text-lg mb-8">Ejemplos de implementación de Zustand.</p>

      <div className="flex flex-row w-full max-w-5xl items-center justify-center gap-8">
        <div className="flex-1 flex justify-center">
          <Image
            src="/zustand.jpg"
            alt="Zustand Image"
            width={800}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 w-full max-w-xl">
          <TodoForm />
          <Filters />
          <TodoList />
        </div>
      </div>
    </div>
  );
}
