const credentials = [
  { title: 'Google Cloud Certified — Generative AI Leader', issuer: 'Google Cloud', year: '2026', icon: '✦' },
  { title: 'Developing Front-End Apps with React', issuer: 'IBM', year: '2025', icon: '⚛' },
  { title: 'Back-End Application Development with Node.js and Express', issuer: 'IBM', year: '2025', icon: '⌘' },
  { title: 'Advanced JavaScript — Certificate of Completion', issuer: 'Udemy', year: '2024', icon: 'JS' },
  { title: 'Microsoft Certified: Azure Fundamentals (AZ-900)', issuer: 'Microsoft', year: '2023', icon: '☁' },
  { title: 'Goethe-Zertifikat B1', issuer: 'Goethe-Institut', year: '2026', icon: 'DE' },
]
export default function Certifications() { return 
<section id="certifications" className="bg-slate-100/70 px-5 py-20 dark:bg-white/[.025] sm:px-8">
<div className="mx-auto max-w-6xl"><p className="mb-2 text-xs font-bold uppercase tracking-[.22em] text-indigo-500">Learning & growth</p><h2 className="text-3xl font-black sm:text-4xl">Certifications<span className="text-indigo-500">.</span></h2><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{credentials.map(c => <article key={c.title} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[.03]"><div className="flex items-start justify-between"><div className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-500/10 text-lg font-bold text-indigo-500">{c.icon}</div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-300">{c.year}</span></div><h3 className="mt-5 font-bold leading-6">{c.title}</h3><p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{c.issuer}</p></article>)}</div><p className="mt-5 text-xs leading-5 text-slate-500">Credential IDs are omitted here until each one is verified. Add official credential verification links when available.</p></div></section> }
