import AuthCard from '@/components/AuthCard';
import DashboardShell from '@/components/DashboardShell';
import LoadingScreen from '@/components/LoadingScreen';
import { featureCards } from '@/data/mock-content';

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <section className="relative overflow-hidden rounded-[36px] bg-hero px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_40%)]" />
        <div className="relative">
          <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-white">ZA</div>
              <div>
                <p className="text-lg font-semibold tracking-tight text-white">Zaker AI</p>
                <p className="text-sm text-slate-300">AI-powered study assistant for Egyptian students</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <a href="#dashboard" className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-white transition hover:bg-white/10">Dashboard</a>
              <a href="#auth" className="rounded-full bg-white px-5 py-2.5 font-semibold text-slate-950 transition hover:scale-[1.02]">Start Studying</a>
            </div>
          </header>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-violet-300/20 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-violet-200">
                Study smarter, not harder.
              </div>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
                Make studying feel <span className="gradient-text">lighter, faster, and actually fun</span>.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Upload notes, paste lessons, or drop in PDFs. Zaker AI instantly turns them into clear summaries, flashcards, quizzes, key definitions, and study plans designed for teens in Egypt.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#dashboard" className="rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:scale-[1.02]">Start Studying</a>
                <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white">Watch demo vibe</button>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                {['Arabic + English', 'Explain like I’m 10', 'Save study sessions'].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">{item}</span>
                ))}
              </div>
            </div>

            <div className="section-shell relative overflow-hidden bg-white/6">
              <div className="absolute right-6 top-6 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">Live AI preview</div>
              <div className="grid gap-4">
                <div className="rounded-[28px] border border-white/10 bg-slate-950/50 p-5">
                  <p className="text-sm text-slate-400">Today’s focus</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Biology — Cell Division</p>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-slate-300">
                    <div className="rounded-2xl bg-white/5 p-3"><p className="text-lg font-semibold text-white">4</p><p>Summaries</p></div>
                    <div className="rounded-2xl bg-white/5 p-3"><p className="text-lg font-semibold text-white">18</p><p>Flashcards</p></div>
                    <div className="rounded-2xl bg-white/5 p-3"><p className="text-lg font-semibold text-white">88%</p><p>Quiz score</p></div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[28px] border border-violet-400/20 bg-violet-500/10 p-5 animate-float">
                    <p className="text-sm text-violet-100">Quick summary</p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">Mitosis creates two identical cells for growth and repair. Meiosis creates reproductive cells with half the chromosome number.</p>
                  </div>
                  <div className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 p-5">
                    <p className="text-sm text-cyan-100">Teen-friendly explanation</p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">Think of mitosis like copying your notes for a friend. Meiosis is making a special mini-version for the next generation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {featureCards.map((feature) => (
          <article key={feature.title} className="section-shell">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{feature.badge}</span>
            <h2 className="mt-4 text-2xl font-semibold text-white">{feature.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.85fr,1.15fr]">
        <LoadingScreen />
        <div id="auth" className="grid gap-6 md:grid-cols-2">
          <AuthCard mode="login" />
          <AuthCard mode="signup" />
        </div>
      </section>

      <section id="dashboard" className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Main app</p>
            <h2 className="mt-2 text-4xl font-semibold text-white">A polished dashboard built for real study sessions</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">Everything below is fully styled as if it were the product after login: upload content, generate tools, revise with flashcards, and test yourself with instant feedback.</p>
        </div>
        <DashboardShell />
      </section>
    </main>
  );
}
