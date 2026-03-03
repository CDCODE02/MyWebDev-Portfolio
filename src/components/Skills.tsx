import { Section } from './ui/Section';

const skills = {
  Frontend: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
  Backend: ['Node.js', 'Python', 'REST APIs', 'SQL', 'Authentication'],
  'CMS & Tools': ['WordPress', 'Git & GitHub', 'Deployment (Vercel / Netlify)', 'Performance Optimization'],
};

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors">
            <h3 className="text-xl font-semibold text-slate-100 mb-6 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              {category}
            </h3>
            <ul className="space-y-3">
              {items.map((skill) => (
                <li key={skill} className="flex items-center text-slate-400 font-mono text-sm">
                  <span className="text-blue-500 mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
