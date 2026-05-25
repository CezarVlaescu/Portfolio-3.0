import { Menu, Moon } from 'lucide-react';

const navItems = ['Home', 'Timeline', 'Skills', 'Projects', 'Contact'];

export function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-slate-950/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 font-black shadow-lg shadow-violet-500/30">
            C
          </div>
          <span className="text-xl font-bold tracking-tight">Cezar</span>
        </a>

        <nav className="hidden items-center gap-10 text-sm font-medium text-white/70 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative transition hover:text-white"
            >
              {item}
              {item === 'Home' && (
                <span className="absolute -bottom-3 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(139,92,246,1)]" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white">
            <Moon size={19} />
          </button>
          <button className="rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}