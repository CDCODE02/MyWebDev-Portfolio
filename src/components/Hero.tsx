import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 max-w-3xl">
            <p className="text-blue-400 font-mono mb-6 tracking-wide">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
              Destiny Odalonu.
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 tracking-tight">
              I'm A Full-Stack Web Developer <span className="block text-xl md:text-3xl font-normal italic mt-2 text-slate-500">Building Scalable Web Applications</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects">
                <Button size="lg" className="w-full sm:w-auto group">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              <img 
                src="https://i.ibb.co/Q7XsrXtY/odlogo.png" 
                alt="Destiny Odalonu Hero Logo" 
                className="relative w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
