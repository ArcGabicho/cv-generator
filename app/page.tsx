import Panel from "./components/Panel";

export default function Home() {
  return (
    <main
      className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1A0C2A 50%, #0F0A1A 100%)" }}
    >
      {/* Subtle background effects */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[300px] h-[150px] bg-gradient-to-r from-purple-500/30 to-transparent opacity-30 blur-2xl rounded-full z-0"></div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 w-[200px] h-[100px] bg-gradient-to-r from-green-400/20 to-transparent opacity-25 blur-2xl rounded-full z-0"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-[250px] h-[120px] bg-gradient-to-l from-purple-400/25 to-transparent opacity-30 blur-2xl rounded-full z-0"></div>

      <section className="relative z-10 bg-black/20 backdrop-blur-lg flex flex-col md:w-[45%] min-h-screen border-r border-white/5">
        <Panel />
      </section>
      <section className="relative z-10 w-full md:w-[55%] flex items-center justify-center p-8 bg-black/10 backdrop-blur-sm">
        {/* Compact call to action */}
        <div className="w-full max-w-sm p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-3 font-[Syne]">
              ¿Listo para comenzar?
            </h3>
            <p className="text-gray-400 mb-4 font-[Syne] text-sm">
              Crea tu CV optimizado en minutos
            </p>
            <button className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-200 text-sm">
              Empezar ahora
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
