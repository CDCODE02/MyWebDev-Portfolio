import { Section } from './ui/Section';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Tech Company',
    period: '2023 - Present',
    description: 'Developing scalable web applications using React, Node.js, and TypeScript. Collaborating with cross-functional teams to deliver high-quality software solutions.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL']
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2021 - 2023',
    description: 'Built responsive and interactive user interfaces for various clients. Optimized website performance and ensured cross-browser compatibility.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Figma']
  },
  {
    role: 'Web Developer Intern',
    company: 'Startup Inc.',
    period: '2020 - 2021',
    description: 'Assisted in the development of internal tools and customer-facing features. Gained hands-on experience with modern web development practices.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git']
  }
];

export function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            
            {/* Icon/Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-900 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full ring-4 ring-blue-500/20"></div>
            </div>
            
            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-blue-500/30 transition-all shadow-sm">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                  <div className="text-blue-400 font-medium">{exp.company}</div>
                </div>
                <span className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded border border-slate-700/50">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-medium text-blue-300/80 bg-blue-500/5 px-2 py-1 rounded border border-blue-500/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </Section>
  );
}
