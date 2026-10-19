const groups = [
  
{ title: 'Frontend', icon: '✦', items: ['Angular', 'AngularJS', 'Angular 2+', 'React.js', 'JavaScript (ES6+)', 'TypeScript', 'React Hooks', 'JSX', 'RxJS', 'Angular Material', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI'] },
{ title: 'API & Backend', icon: '⌘', items: ['REST APIs', 'Axios', 'Python', 'Node.js', 'JWT Authentication'] },
{ title: 'Database & DevOps', icon: '◈', items: ['PostgreSQL', 'MySQL', 'Docker', 'CI/CD', 'Git', 'GitHub Actions'] },
{ title: 'Tools & Practices', icon: '⚙', items: ['GitHub', 'Azure', 'Render', 'Vercel', 'Agile / Scrum', 'Debugging', 'Testing'] },

]
export default function Skills() 
{ return <section id="skills" className="bg-slate-100/70 px-5 py-20 dark:bg-white/[.025] sm:px-8">
  <div className="mx-auto max-w-6xl"><p className="mb-2 text-xs font-bold uppercase tracking-[.22em]
   text-indigo-500"></p><h2 className="text-3xl font-black sm:text-4xl">
    Skills<span className="text-indigo-500">.</span></h2>
    <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map(group => <article key={group.title} className="rounded-2xl border border-slate-200
        
        bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-300 
        hover:shadow-xl hover:shadow-indigo-950/5 dark:border-white/10 dark:bg-white/[.03]">
          
        <div className="flex h-11 w-11 items-center justify-center rounded-xl
         bg-indigo-500/10 text-xl text-indigo-500">{group.icon}</div>
         <h3 className="mt-4 text-lg font-bold">{group.title}</h3>
         <div className="mt-4 flex flex-wrap gap-2">
          {group.items.map(item => <span key={item} className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">{item}</span>)}</div></article>)}</div>
          </div></section> }
