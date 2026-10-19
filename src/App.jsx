import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import AboutMe from './components/AboutMe.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Academic from './components/Academic.jsx'
import Certifications from './components/Certifications.jsx'
import Award from './components/Award.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark min-h-screen bg-[#0b1020] text-slate-100' : 'min-h-screen bg-slate-50 text-slate-900'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <section id="home" className="relative isolate overflow-hidden px-5 pb-20 pt-20 sm:pt-28">
          <div className="hero-grid pointer-events-none absolute inset-0 -z-10" />
          <div className="pointer-events-none absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.35fr_.65fr]">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300"><span className="h-2 w-2 rounded-full bg-emerald-400" /> </p>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[.24em] text-slate-400">Hello, I'm</p>
              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">Dhana Lakshmi <span className="gradient-text">Selvaraj</span></h1>
              <h2 className="mt-5 text-xl font-semibold text-slate-300 sm:text-2xl">Software Developer</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">Software development experience, a frontend engineering foundation, and hands-on React projects. Currently pursuing a Master's in High Integrity Systems in Frankfurt, Germany.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-xl bg-indigo-500 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-indigo-400">Explore projects <span aria-hidden="true">↘</span></a>
                <a href="#contact" className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-indigo-400 hover:text-indigo-300">Contact me</a>
                <a href="/assest/Dhana_Lakshmi_Selvaraj_SoftwareDeveloper_reactjs.pdf" download className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-300 transition hover:border-indigo-400 hover:text-white">Download CV ↓</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-3 text-sm text-slate-400"><span>React</span><span>•</span><span>JavaScript</span><span>•</span><span>REST APIs</span><span>•</span><span>Full-stack projects</span></div>
            </div>
            <div className="float-slow mx-auto w-full max-w-sm">
              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-cyan-500/10 p-5 shadow-2xl shadow-indigo-950/40">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                  <div className="mb-5 flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-rose-400"/><span className="h-3 w-3 rounded-full bg-amber-300"/><span className="h-3 w-3 rounded-full bg-emerald-400"/><span className="ml-auto text-xs text-slate-500">developer.jsx</span></div>
                  <pre className="overflow-x-auto text-sm leading-7"><code><span className="text-fuchsia-300">const</span> <span className="text-cyan-300">developer</span> = {'{'}{'\n'}  name: <span className="text-emerald-300">"Dhana Lakshmi"</span>,{'\n'}  focus: <span className="text-emerald-300">"React"</span>,{'\n'}  mindset: <span className="text-emerald-300">"Keep learning"</span>,{'\n'}  building: <span className="text-emerald-300">"Useful things"</span>{'\n'}{'}'};</code></pre>
                  <div className="mt-5 flex items-center justify-between rounded-xl bg-white/5 p-3"><span className="text-sm text-slate-400">Currently building</span><span className="rounded-lg bg-indigo-400/15 px-3 py-1 text-xs font-semibold text-indigo-300">React projects</span></div>
                </div>
                <p className="px-2 pb-1 pt-4 text-center text-xs tracking-wide text-slate-500">CODE • CREATE • IMPROVE</p>
              </div>
            </div>
          </div>
        </section>
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Academic />
        <Certifications />
        <Award />
        <Contact />
      </main>
      <footer className="border-t border-slate-800 px-5 py-7 text-center text-sm text-slate-500">© {new Date().getFullYear()} Dhana Lakshmi Selvaraj. Built with React and Tailwind CSS.</footer>
      <a href="#home" aria-label="Back to top" className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-indigo-400/30 bg-slate-900/90 text-xl text-indigo-300 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:bg-indigo-500 hover:text-white">↑</a>
    </div>
  )
}
