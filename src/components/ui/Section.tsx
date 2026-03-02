import { ReactNode } from 'react';
import { cn } from './Button';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function Section({ id, className, children, title, subtitle }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 md:py-32', className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 tracking-tight">
                <span className="text-blue-500 mr-2">/</span>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-slate-400 text-lg max-w-2xl">
                {subtitle}
              </p>
            )}
            <div className="h-px w-24 bg-blue-500/30 mt-6"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
