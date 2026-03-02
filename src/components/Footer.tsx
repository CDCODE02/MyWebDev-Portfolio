export function Footer() {
  return (
    <footer className="bg-slate-950 py-8 text-center border-t border-slate-900">
      <div className="container mx-auto px-6">
        <p className="text-slate-500 font-mono text-sm mb-2">
          Designed & Built by Destiny Odalonu
        </p>
        <p className="text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
