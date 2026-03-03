import { useState } from 'react';
import { Section } from './ui/Section';
import { Download, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
  const [showResumeDialog, setShowResumeDialog] = useState(false);

  const handleDownload = () => {
    setShowResumeDialog(false);
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Destiny_Odalonu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section id="experience" title="Work Experience">
      <div className="space-y-12 relative">
        {/* Animated Line */}
        <div className="absolute inset-0 ml-5 -translate-x-px md:mx-auto md:translate-x-0 h-full w-0.5 bg-slate-800/50">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-blue-400 to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            
            {/* Icon/Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-900 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full ring-4 ring-blue-500/20"></div>
            </div>
            
            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-blue-500/30 transition-all shadow-sm group-hover:-translate-y-1 duration-300">
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
            
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 flex justify-center">
        <button
          onClick={() => setShowResumeDialog(true)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/20 transition-all duration-300 font-medium group cursor-pointer"
        >
          <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          Download Resume
        </button>
      </div>

      {/* Confirmation Dialog */}
      <AnimatePresence>
        {showResumeDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-sm w-full shadow-2xl relative"
            >
              <button 
                onClick={() => setShowResumeDialog(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <h3 className="text-xl font-bold text-slate-100 mb-2">Download Resume?</h3>
              <p className="text-slate-400 mb-6">
                Are you sure you want to download the resume PDF?
              </p>
              
              <div className="flex gap-3 justify-end">
                <button 
                  onClick={() => setShowResumeDialog(false)}
                  className="px-4 py-2 text-slate-300 hover:text-white font-medium transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleDownload}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
                >
                  Confirm Download
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
