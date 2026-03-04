import { Section } from './ui/Section';
import { motion } from 'motion/react';

const skills = {
  Frontend: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
  Backend: ['Node.js', 'Python', 'PHP', 'REST APIs', 'SQL', 'Authentication'],
  'CMS & Tools': ['WordPress', 'Git & GitHub', 'Deployment Vercel', 'Performance Optimization'],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div 
            key={category} 
            className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 transition-colors"
            whileHover={{ scale: 1.02, borderColor: 'rgba(59, 130, 246, 0.5)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-6 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              {category}
            </h3>
            <motion.ul 
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {items.map((skill) => (
                <motion.li 
                  key={skill} 
                  className="flex items-center text-slate-400 font-mono text-sm"
                  variants={itemVariants}
                >
                  <span className="text-blue-500 mr-2">▹</span>
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
