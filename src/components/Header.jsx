import { useState } from 'react'

const links = [
  ['about', 'About'], ['skills', 'Skills'], ['experience', 'Experience'], 
  ['projects', 'Projects'], ['academic', 'Education'], ['certifications', 'Certifications'], ['contact', 'Contact'],
]

export default function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return (
    <header className="glass sticky top-0 z-50 border-b border-slate-200/70 text-slate-900 dark:border-white/10 dark:text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#home" onClick={closeMenu} className="min-w-0">
          <span className="block truncate text-sm font-extrabold tracking-wide sm:text-base">DHANA LAKSHMI <span className="text-indigo-500">SELVARAJ</span></span>
          <span className="mt-0.5 block text-xs text-slate-500 dark:text-slate-400">Software Developer</span>
        </a>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} className="text-sm font-medium text-slate-600 transition hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-300">{label}</a>)}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle color theme" className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 transition hover:border-indigo-400 dark:border-slate-700" title="Toggle theme">{darkMode ? '☀️' : '🌙'}</button>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation" className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-xl lg:hidden dark:border-slate-700">{menuOpen ? '×' : '☰'}</button>
        </div>
      </div>
      {menuOpen && <nav className="border-t border-slate-200 bg-white px-5 py-4 shadow-xl dark:border-slate-800 dark:bg-slate-950 lg:hidden" aria-label="Mobile navigation">{links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={closeMenu} className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-200 dark:hover:bg-slate-900">{label}</a>)}
      <a
  onClick={closeMenu}
  href="/assest/Dhana_Lakshmi_Selvaraj_SoftwareDeveloper_reactjs.pdf"
  download="/assest/Dhana_Lakshmi_Selvaraj_SoftwareDeveloper_reactjs.pdf"
  className="mt-2 block rounded-lg bg-indigo-500 px-3 py-3 text-center text-sm font-semibold text-white"
>
  Download CV
</a></nav>}
    </header>
  )
}


