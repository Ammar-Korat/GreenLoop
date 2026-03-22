export default function LoadingScreen() {
  return (
    <section className="section-shell relative overflow-hidden bg-slate-950/70 text-center">
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="relative mx-auto flex max-w-sm flex-col items-center gap-5 py-10">
        <div className="flex h-20 w-20 animate-pulseSoft items-center justify-center rounded-[28px] border border-white/10 bg-white/10 text-2xl font-bold text-white shadow-2xl">
          ZA
        </div>
        <div>
          <p className="text-3xl font-semibold tracking-tight">Zaker AI</p>
          <p className="mt-2 text-sm text-slate-400">Preparing your summaries, flashcards, and test mode...</p>
        </div>
        <div className="h-2 w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/3 animate-pulse rounded-full bg-gradient-to-r from-violet-500 via-sky-400 to-cyan-300" />
        </div>
      </div>
    </section>
  );
}
