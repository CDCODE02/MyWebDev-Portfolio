import { Section } from './ui/Section';

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 text-slate-400 text-lg leading-relaxed space-y-6">
          <p>
            Full-Stack Web Developer with hands-on experience building production web applications for real clients.
          </p>
          <p>
            I work across the stack — from responsive React interfaces to structured Node.js backends and SQL databases. My focus is performance, scalability, and clean architecture.
          </p>
          <p>
            I build systems that work in the real world.
          </p>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-500 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          <div className="relative bg-slate-800 rounded-lg overflow-hidden aspect-square grayscale hover:grayscale-0 transition-all duration-300">
            <img 
              src="https://picsum.photos/seed/developer/800/800" 
              alt="Destiny Odalonu" 
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
