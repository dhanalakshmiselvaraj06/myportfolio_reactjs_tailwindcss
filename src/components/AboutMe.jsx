import { useState } from 'react'
const tags = ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'REST APIs', 'Python', 'PostgreSQL', 'Docker']
export default function AboutMe() {
  const [showMore, setShowMore] = useState(false)
  return <section id="about" className="px-5 py-20 sm:px-8"><div className="mx-auto max-w-6xl">
    <SectionHeading eyebrow="A little about me" title="About Me" />
    <div className="grid gap-6 md:grid-cols-[1.35fr_.85fr]">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[.03] sm:p-8">
        <h3 className="text-2xl font-bold">Hello, I'm Dhana Lakshmi <span aria-hidden="true">👋</span></h3>
        <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">I'm a software developer with 5.5 years of professional IT experience, currently pursuing a Master's degree in High Integrity Systems at Frankfurt University of Applied Sciences in Germany.</p>
        <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">My professional background includes frontend development and enterprise application modernization. I'm now focusing on React development through hands-on projects, building reusable components, integrating REST APIs, and creating responsive web applications.</p>
        {showMore && <div className="mt-4 space-y-3 border-l-2 border-indigo-500 pl-4 leading-7 text-slate-600 dark:text-slate-300"><p>I also build full-stack applications involving authentication, databases, backend integration, and cloud deployment.</p><p>I'm interested in opportunities where I can bring my software development experience, grow as a React developer, and contribute to a collaborative engineering team.</p></div>}
        <button onClick={() => setShowMore(v => !v)} aria-expanded={showMore} className="mt-6 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-400">{showMore ? 'Show less ↑' : 'Read more ↓'}</button>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[.03] sm:p-8"><h3 className="text-lg font-bold">Technologies I use</h3><div className="mt-5 flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="rounded-lg border border-indigo-400/20 bg-indigo-500/10 px-3 py-2 text-sm font-medium text-indigo-600 transition hover:-translate-y-1 hover:border-indigo-400 dark:text-indigo-300">{tag}</span>)}</div><div className="mt-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 p-4"><p className="text-xs font-bold uppercase tracking-[.18em] text-indigo-500">Current focus</p><p className="mt-2 font-semibold">React development · Full-stack projects · High Integrity Systems</p></div></div>
    </div></div></section>
}
function SectionHeading({ eyebrow, title }) { return <div className="mb-9"><p className="mb-2 text-xs font-bold uppercase tracking-[.22em] text-indigo-500">{eyebrow}</p><h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}<span className="text-indigo-500">.</span></h2><div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" /></div> }
