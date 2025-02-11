import { ListTodo, CalendarCheck, Brain } from "lucide-react";
import Typewriter from "../app/components/Typewriter";
import { FaCheckSquare } from "react-icons/fa"; // Importe o ícone de checkbox marcado

export default function HomePage() {
  return (
    <main className="flex flex-row bg-[#0C1117]">
      <div className="min-h-screen bg-[#0C1117] flex justify-center w-1/2">
        <div className="shadow-2xl p-8 rounded-lg bg-[#2D353C] h-full flex flex-col w-full my-auto">
          <div>
            <h1 className="text-6xl text-[#E1E7EF] my-12 font-sans font-extrabold ">
              Bem-vindo ao Vou Anotar!

            </h1>
            <h3 className="text-3xl text-[#E1E7EF] mb-12 font-sans font-semibold ">
              <span className="text-[#E1E7EF] text-3xl font-sans font-semibold p-1 rounded-md bg-[#0C33BC]">
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
            <h2 className="text-3xl text-[#E1E7EF] font-sans font-medium">Benefícios de uma To-do List:</h2>
            <h3 className="text-2xl text-stone-400 font-sans font-light flex items-center gap-3">
              1. <ListTodo className="text-emerald-500" size={28} /> Listas organizadas com categorias.
            </h3>
            <h3 className="text-2xl text-stone-400 font-sans font-light flex items-center gap-3">
              2. <CalendarCheck className="text-emerald-500" size={28} /> Nunca esqueça nenhuma tarefa.
            </h3>
            <h3 className="text-2xl text-stone-400 font-sans font-light flex items-center gap-3">
              3. <Brain className="text-emerald-500 size={28}" /> Foco e produtividade.
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}
