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
            <h3 className="text-3xl text-stone-800 mb-12 font-sans font-semibold"><span className="text-white text-3xl font-sans font-semibold bg-cyan-800 p-1 rounded-md">Gerencie</span> suas tarefas de forma simples e eficiente!</h3>
          </div>
          <div className="mt-8 text-left">
            <Typewriter 
              texts={[
                "Organize seu dia. ✅",
                "Aumente sua produtividade. 🚀",
                "Nunca mais esqueça uma tarefa! 📅"
              ]} 
              delay={100} 
              pauseBetweenTexts={1500} 
            />
          </div>
        </div>
      </div>
    </main>

  )
}