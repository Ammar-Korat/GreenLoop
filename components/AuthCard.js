export default function AuthCard({ mode = 'login' }) {
  const isLogin = mode === 'login';

  return (
    <div className="section-shell h-full bg-white/6">
      <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 p-1 text-sm text-slate-300">
        <span className={`rounded-full px-4 py-2 ${!isLogin ? 'bg-white text-slate-950' : ''}`}>Sign up</span>
        <span className={`rounded-full px-4 py-2 ${isLogin ? 'bg-white text-slate-950' : ''}`}>Log in</span>
      </div>
      <h3 className="text-2xl font-semibold text-white">{isLogin ? 'Welcome back' : 'Create your student account'}</h3>
      <p className="mt-2 text-sm text-slate-400">Let AI do the hard work.</p>
      <div className="mt-6 space-y-4">
        {!isLogin && <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-sky-400" placeholder="Full name" />}
        <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-sky-400" placeholder="Email" />
        <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-sky-400" placeholder="Password" type="password" />
        {!isLogin && <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-sky-400" placeholder="School / Grade" />}
      </div>
      <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-violet-500 to-sky-400 px-4 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]">
        {isLogin ? 'Log in' : 'Create account'}
      </button>
    </div>
  );
}
