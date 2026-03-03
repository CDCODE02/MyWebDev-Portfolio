import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { useState, FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormState('submitting');

    try {
      // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS service and template IDs
      // The public key 'tY9bi22jt0wAeBQ-w' is provided by you
      await emailjs.sendForm(
        'service_ymmonfd', 
        'template_t08k5ub', 
        formRef.current, 
        'tY9bi22jt0wAeBQ-w'
      );
      
      setFormState('success');
      formRef.current.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormState('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormState('error');
      // Reset error message after 5 seconds
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  return (
    <Section id="contact" title="Contact Me" className="mb-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-slate-100 mb-6">Let's Build Something Together</h3>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
I’m currently open to new opportunities. If you have a project in mind or would like to collaborate, feel free to get in touch.          </p>
          
          <div className="space-y-4">
            <a href="mailto:destinycodes01@gmail.com" className="flex items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors group">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-lg">destinycodes01@gmail.com</span>
            </a>
            
            <a href="https://github.com/CDCODE02" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors group">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <span className="text-lg">github.com/CDCODE02</span>
            </a>
            
            <a href="#" className="flex items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors group">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="text-lg">linkedin.com/in/destinyodalonu</span>
            </a>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                placeholder="Hello, I'd like to talk about..."
              ></textarea>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={formState === 'submitting' || formState === 'success'}
            >
              {formState === 'submitting' ? 'Sending...' : 
               formState === 'success' ? 'Message Sent!' : 
               formState === 'error' ? 'Failed to Send' : 'Send Message'}
              {formState === 'idle' && <Send className="ml-2 w-4 h-4" />}
            </Button>
            
            {formState === 'error' && (
              <p className="text-red-400 text-sm text-center mt-2">
                Something went wrong. Please try again later.
              </p>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}
