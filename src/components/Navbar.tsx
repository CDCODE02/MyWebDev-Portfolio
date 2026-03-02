import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from './ui/Button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with some offset for better UX)
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md',
          scrolled ? 'bg-slate-900/90 border-b border-blue-500/20 shadow-lg py-1.5' : 'bg-[#062c59]/90 border-b border-blue-500/20 py-1.5'
        )}
      >
        <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
          <a 
            href="#home" 
            className="flex items-center gap-2 group" 
            onClick={() => setIsOpen(false)}
          >
            <img 
              src="https://i.ibb.co/Q7XsrXtY/odlogo.png" 
              alt="Destiny Odalonu Logo" 
              className="h-8 w-auto transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative",
                    isActive ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
                  )}
                >
                  <span className="text-blue-500 mr-1">/</span>
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500/50 rounded-full animate-pulse"></span>
                  )}
                </a>
              );
            })}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-blue-400 border border-blue-500/30 rounded hover:bg-blue-500/10 transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-blue-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-slate-900/95 backdrop-blur-md z-40 flex flex-col items-center justify-start pt-32 gap-6 transition-transform duration-300 md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-xl font-medium transition-colors py-2",
                isActive ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
              )}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-blue-500 mr-2 text-base">/</span>
              {link.name}
            </a>
          );
        })}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 h-12 px-8 text-lg mt-6 w-48"
          onClick={() => setIsOpen(false)}
        >
          Resume
        </a>
      </div>
    </>
  );
}
