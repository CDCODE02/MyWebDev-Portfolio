import { Section } from './ui/Section';
import { motion } from 'motion/react';

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-3 gap-12">
        <motion.div 
          className="relative group order-last md:order-first"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-blue-500 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          <div className="relative bg-slate-800 rounded-lg overflow-hidden aspect-square grayscale hover:grayscale-0 transition-all duration-300">
            <img 
              src="https://i.ibb.co/Z1BLQHPq/destinyabout.jpg" 
              alt="Destiny Odalonu" 
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
        <div className="md:col-span-2 text-slate-400 text-lg leading-relaxed space-y-6">
          <p>
                         I design and develop fast, reliable web systems using modern frontend and backend technologies,
 I'm a Full Stack Web Developer with hands on experience building production web applications for real clients.
          </p>
          <p>
            I work across the stack from responsive interfaces to structured backends and databases. My focus is performance, scalability, and clean architecture.
          </p>
          <p>
           I build high performing web applications that help businesses attract users, improve engagement, and drive measurable results. I build systems that work in the real world. 
          </p>
        </div>
      </div>
    </Section>
  );
}
