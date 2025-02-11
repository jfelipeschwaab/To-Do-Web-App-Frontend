import { ListTodo, CalendarCheck, Brain } from "lucide-react";
import Typewriter from "../app/components/Typewriter";

export default function HomePage() {
  return (
    <main className="flex flex-row bg-sky-950">
      <div className="min-h-screen bg-sky-950 flex justify-center w-1/2">
        <div className="shadow-2xl p-8 rounded-lg bg-white h-full flex flex-col w-full my-auto">
          <div>
            <h1 className="text-5xl text-stone-800 my-12 font-sans font-extrabold text-center">
              BEM-VINDO À SUA LISTA DE AFAZERES
            </h1>
            <h3 className="text-3xl text-stone-800 mb-12 font-sans font-semibold">
              <span className="text-white text-3xl font-sans font-semibold bg-cyan-800 p-1 rounded-md">
                Gerencie
              </span> suas tarefas de forma simples e eficiente!
            </h3>
          </div>

          <div className="mt-8 text-left h-1/4">
            <Typewriter 
              texts={[
                "Organize seu dia. ✅",
                "Aumente sua produtividade. 🚀",
                "Sempre tenha quando anotar! 📅"
              ]} 
              delay={100} 
              pauseBetweenTexts={1500} 
            />
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-3xl text-stone-950 font-sans font-medium">Benefícios de uma To-do List:</h2>
            <h3 className="text-2xl text-stone-700 font-sans font-light flex items-center gap-3">
              1. <ListTodo className="text-cyan-700" size={28} /> Listas organizadas com categorias.
            </h3>
            <h3 className="text-2xl text-stone-700 font-sans font-light flex items-center gap-3">
              2. <CalendarCheck className="text-cyan-700" size={28} /> Nunca esqueça nenhuma tarefa.
            </h3>
            <h3 className="text-2xl text-stone-700 font-sans font-light flex items-center gap-3">
              3. <Brain className="text-cyan-700" size={28} /> Foco e produtividade.
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}
