import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { useState, FormEvent } from 'react';

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      // Reset after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    }, 1000);
  };

  return (
    <Section id="contact" title="Contact Me" className="mb-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-slate-100 mb-6">Let's Build Something Together</h3>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-4">
            <a href="mailto:hello@example.com" className="flex items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors group">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-lg">hello@example.com</span>
            </a>
            
            <a href="#" className="flex items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors group">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <span className="text-lg">github.com/destinyodalonu</span>
            </a>
            
            <a href="#" className="flex items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors group">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="text-lg">linkedin.com/in/destinyodalonu</span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
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
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                placeholder="Hello, I'd like to talk about..."
              ></textarea>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={formState !== 'idle'}
            >
              {formState === 'submitting' ? 'Sending...' : formState === 'success' ? 'Message Sent!' : 'Send Message'}
              {formState === 'idle' && <Send className="ml-2 w-4 h-4" />}
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
}
