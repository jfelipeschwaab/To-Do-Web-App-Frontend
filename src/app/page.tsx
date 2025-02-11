export default function HomePage() {
  return (
    <main className="flex flex-row bg-sky-950">
      <div className="min-h-screen bg-sky-950 flex  justify-center">
        <div className="shadow-2xl p-8 rounded-lg bg-white h-5/6 flex flex-col items-center w-full my-auto">
          <h1 className="text-4xl text-black mb-4 font-sans font-extrabold">
            Bem-vindo à sua lista de afazeres
          </h1>
          <p className="text-gray-600 mb-8 font-semibold font-sans">
            Entre na sua conta e anote o que você precisa
          </p>
          <div className="space-x-4">
            <a href="/login" className="px-6 py-2 bg-teal-800 text-white rounded-lg hover:bg-sky-600 text-xl">Login</a>
            <a href="/register" className="px-6 py-2 bg-teal-800 rounded-lg hover:bg-sky-600 text-xl">Registrar</a>
          </div>
        </div>
      </div>
    </main>

  )
}