import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden w-full max-w-5xl h-[85vh] sm:h-[90vh] shadow-2xl relative flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-slate-800 bg-slate-900/50">
              <h3 className="text-lg font-bold text-slate-100">Resume Preview</h3>
              <button
                onClick={onClose}
                className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close preview"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 w-full h-full bg-slate-800/50">
              <iframe
                src="https://drive.google.com/file/d/14hMIMgIKcEUgLLhI33aO4jKJ0JUM1SXQ/preview"
                className="w-full h-full border-none"
                title="Resume Preview"
                allow="autoplay"
              ></iframe>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
