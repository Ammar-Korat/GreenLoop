'use client';

import { useMemo, useState } from 'react';
import { mockFlashcards, mockQuiz, mockSummary, plans, sidebarItems, studySessions } from '@/data/mock-content';

export default function DashboardShell() {
  const [activeTab, setActiveTab] = useState('Summaries');
  const [language, setLanguage] = useState('EN');
  const [difficulty, setDifficulty] = useState('Medium');
  const [flashIndex, setFlashIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => mockQuiz.reduce((sum, item, idx) => {
    if (item.type === 'short') {
      return sum + (quizAnswers[idx]?.trim() ? 1 : 0);
    }
    return sum + (quizAnswers[idx] === item.answer ? 1 : 0);
  }, 0), [quizAnswers]);

  const flashcard = mockFlashcards[flashIndex];

  return (
    <section className="grid gap-6 lg:grid-cols-[260px,1fr]">
      <aside className="section-shell h-fit bg-white/6">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-400 font-bold">ZA</div>
          <div>
            <p className="font-semibold">Zaker AI</p>
            <p className="text-xs text-slate-400">Your smart study corner</p>
          </div>
        </div>
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const selected = item === activeTab;
            return (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`w-full rounded-2xl px-4 py-3 text-left text-sm transition ${selected ? 'bg-white text-slate-950' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
              >
                {item}
              </button>
            );
          })}
        </nav>
        <div className="mt-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
          <p className="font-semibold">Saved study sessions</p>
          <div className="mt-3 space-y-3 text-xs text-cyan-50/80">
            {studySessions.map((session) => (
              <div key={`${session.subject}-${session.topic}`} className="rounded-2xl bg-slate-950/30 p-3">
                <p className="font-medium text-white">{session.subject}</p>
                <p>{session.topic}</p>
                <p className="mt-1 text-[11px] text-cyan-200/70">{session.savedAt}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <div className="space-y-6">
        <div className="section-shell bg-gradient-to-br from-white/8 to-white/4">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="mb-2 inline-flex rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-200">Dashboard</p>
              <h3 className="text-3xl font-semibold text-white">Upload content and generate study tools</h3>
              <p className="mt-2 max-w-2xl text-sm text-slate-400">Paste lesson text, upload notes, or simulate a PDF import. Zaker AI adapts for Egyptian students with bilingual study support and playful revision modes.</p>
            </div>
            <div className="grid gap-3 text-sm sm:grid-cols-2">
              <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left">Language: {language}</button>
              <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left">Difficulty: {difficulty}</button>
            </div>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="rounded-[26px] border border-dashed border-white/15 bg-slate-950/40 p-5">
              <p className="text-sm font-medium text-white">Upload Content</p>
              <div className="mt-4 flex min-h-52 flex-col items-center justify-center rounded-[24px] border border-dashed border-violet-400/30 bg-gradient-to-br from-violet-500/10 to-sky-400/10 p-6 text-center">
                <p className="text-4xl">📚</p>
                <p className="mt-4 text-lg font-semibold">Drag & drop notes, PDF, or lesson text</p>
                <p className="mt-2 max-w-sm text-sm text-slate-400">Supports Arabic and English notes. Try biology, math, history, or Arabic grammar.</p>
                <textarea defaultValue="The Nile River was central to Ancient Egyptian civilization because it provided water, transport, and fertile soil for agriculture..." className="mt-5 h-28 w-full rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-200 outline-none focus:border-sky-400" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-[26px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-medium text-white">Study controls</p>
                <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                  {['EN', 'AR'].map((item) => (
                    <button key={item} onClick={() => setLanguage(item)} className={`rounded-2xl px-3 py-3 ${language === item ? 'bg-white text-slate-950' : 'bg-white/5 text-slate-300'}`}>{item}</button>
                  ))}
                  {['Easy', 'Medium', 'Hard'].map((item) => (
                    <button key={item} onClick={() => setDifficulty(item)} className={`rounded-2xl px-3 py-3 ${difficulty === item ? 'bg-gradient-to-r from-violet-500 to-sky-400 text-white' : 'bg-white/5 text-slate-300'}`}>{item}</button>
                  ))}
                </div>
                <button className="mt-4 w-full rounded-2xl bg-gradient-to-r from-violet-500 to-sky-400 px-4 py-3 text-sm font-semibold">Generate Study Tools</button>
                <button className="mt-3 w-full rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-100">Explain like I’m 10</button>
              </div>
              <div className="rounded-[26px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-medium text-white">Mini study plan</p>
                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  {plans.map((plan) => <div key={plan} className="rounded-2xl bg-slate-950/40 p-3">{plan}</div>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <div className="section-shell xl:col-span-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Summary View</p>
                <h4 className="mt-1 text-xl font-semibold text-white">{mockSummary.title}</h4>
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">Simple + clear</span>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {mockSummary.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 rounded-2xl bg-white/5 p-3"><span className="mt-0.5 text-cyan-300">•</span><span>{bullet}</span></li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {mockSummary.keyIdeas.map((idea) => (
                <span key={idea} className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-xs text-violet-100">{idea}</span>
              ))}
            </div>
          </div>

          <div className="section-shell xl:col-span-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Flashcards View</p>
                <h4 className="mt-1 text-xl font-semibold text-white">Card {flashIndex + 1} of {mockFlashcards.length}</h4>
              </div>
              <button onClick={() => setFlipped((prev) => !prev)} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200">Flip card</button>
            </div>
            <button onClick={() => setFlipped((prev) => !prev)} className="mt-5 block h-72 w-full [perspective:1200px]">
              <div className={`relative h-full w-full rounded-[28px] transition duration-500 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
                <div className="absolute inset-0 flex h-full items-center justify-center rounded-[28px] border border-violet-400/30 bg-gradient-to-br from-violet-500/20 to-slate-900/60 p-8 text-center [backface-visibility:hidden]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-violet-200">Question</p>
                    <p className="mt-4 text-xl font-semibold leading-relaxed text-white">{flashcard.question}</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex h-full items-center justify-center rounded-[28px] border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 to-slate-900/60 p-8 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-100">Answer</p>
                    <p className="mt-4 text-lg font-medium leading-relaxed text-white">{flashcard.answer}</p>
                  </div>
                </div>
              </div>
            </button>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button onClick={() => { setFlashIndex((flashIndex - 1 + mockFlashcards.length) % mockFlashcards.length); setFlipped(false); }} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">Previous</button>
              <button onClick={() => { setFlashIndex((flashIndex + 1) % mockFlashcards.length); setFlipped(false); }} className="rounded-2xl bg-gradient-to-r from-violet-500 to-sky-400 px-4 py-3 text-sm font-semibold">Next</button>
            </div>
          </div>

          <div className="section-shell xl:col-span-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Quiz / Test View</p>
                <h4 className="mt-1 text-xl font-semibold text-white">Practice quiz</h4>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">Score: {submitted ? `${score}/${mockQuiz.length}` : 'Not submitted'}</span>
            </div>
            <div className="mt-5 space-y-5">
              {mockQuiz.map((item, idx) => (
                <div key={item.prompt} className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium text-white">{idx + 1}. {item.prompt}</p>
                  {item.type === 'short' ? (
                    <textarea
                      className="mt-3 h-24 w-full rounded-2xl border border-white/10 bg-slate-950/60 p-3 text-sm outline-none focus:border-sky-400"
                      placeholder="Type your answer here"
                      onChange={(e) => setQuizAnswers({ ...quizAnswers, [idx]: e.target.value })}
                    />
                  ) : (
                    <div className="mt-3 grid gap-2">
                      {item.options.map((option) => (
                        <button key={option} onClick={() => setQuizAnswers({ ...quizAnswers, [idx]: option })} className={`rounded-2xl border px-3 py-3 text-left text-sm ${quizAnswers[idx] === option ? 'border-cyan-400 bg-cyan-400/10 text-white' : 'border-white/10 bg-slate-950/40 text-slate-300'}`}>{option}</button>
                      ))}
                    </div>
                  )}
                  {submitted && <p className="mt-3 text-xs text-emerald-200">Expected answer: {item.answer}</p>}
                </div>
              ))}
            </div>
            <button onClick={() => setSubmitted(true)} className="mt-5 w-full rounded-2xl bg-gradient-to-r from-violet-500 to-sky-400 px-4 py-3 text-sm font-semibold">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}
