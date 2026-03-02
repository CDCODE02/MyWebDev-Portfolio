import { Github, ExternalLink, Folder } from 'lucide-react';
import { Section } from './ui/Section';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive dashboard for managing products, orders, and analytics. Features real-time data visualization and inventory tracking.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Management API',
    description: 'Scalable RESTful API for a project management tool. Includes JWT authentication, role-based access control, and task scheduling.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Docker'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Real Estate Platform',
    description: 'Modern property listing platform with advanced search filters, map integration, and responsive image galleries.',
    tech: ['Next.js', 'Tailwind CSS', 'Supabase', 'Leaflet'],
    github: '#',
    demo: '#',
  },
];

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group bg-slate-900 rounded-xl p-8 border border-slate-800 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10"
          >
            <div className="flex justify-between items-start mb-6">
              <Folder className="w-10 h-10 text-blue-500" />
              <div className="flex gap-4">
                <a href={project.github} className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="GitHub Repo">
                  <Github size={20} />
                </a>
                <a href={project.demo} className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="Live Demo">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <ul className="flex flex-wrap gap-3 mt-auto">
              {project.tech.map((tech) => (
                <li key={tech} className="text-xs font-mono text-slate-500">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
