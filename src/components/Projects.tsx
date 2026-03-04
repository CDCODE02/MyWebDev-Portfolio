import { Github, ExternalLink, Folder } from 'lucide-react';
import { Section } from './ui/Section';

const projects = [
  {
    title: 'Talric Lab Landing Page',
    description: 'A high-performance landing page built for a venture studio focused on transforming ideas into scalable startups across Web2 and Web3. Designed to communicate vision, credibility, and technical depth.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'EmailJS'],
    github: 'https://github.com/CDCODE02/Talriclab-web',
    demo: 'https://talriclab-web.vercel.app',
    image: 'https://i.ibb.co/1GL3pYbv/Talric.png'
  },
  {
    title: 'High-Rise Landing Page',
    description: 'A modern landing page for a decentralized real estate marketplace enabling property owners to tokenize and trade real-world assets (RWA) on the blockchain. Built to clearly communicate product value, innovation, and trust in a Web3 environment.',
    tech: ['HTML', 'CSS', 'SCSS', 'JavaScript'],
    github: 'https://github.com/CDCODE02/Highrise-landing-page',
    demo: 'https://highrise-xi.vercel.app',
    image: 'https://i.ibb.co/nMHMdcTK/Highrise-landing.png'
  },
];

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="GitHub Repo">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <ul className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <li key={tech} className="text-xs font-medium text-blue-300/80 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/10">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
