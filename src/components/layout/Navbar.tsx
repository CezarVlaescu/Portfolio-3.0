import { useEffect, useRef, useState } from 'react';
import { Menu, Moon } from 'lucide-react';
import logo from '../../assets/images/cezar-logo-transparent.png';

const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const isClickScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrollingRef.current) {
        return;
      }

      const existingSections = navItems
        .map((item) => ({
          ...item,
          element: document.getElementById(item.id),
        }))
        .filter((item) => item.element) as Array<
        (typeof navItems)[number] & { element: HTMLElement }
      >;

      if (!existingSections.length) {
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight * 0.32;

      let currentSection = existingSections[0].id;

      for (const item of existingSections) {
        const sectionTop = item.element.offsetTop;
        const sectionBottom = sectionTop + item.element.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = item.id;
          break;
        }
      }

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;

      if (isAtBottom && document.getElementById('contact')) {
        currentSection = 'contact';
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);

      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();

    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    isClickScrollingRef.current = true;
    setActiveSection(id);

    const navbarOffset = 74;
    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    });

    window.history.pushState(null, '', `#${id}`);

    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = window.setTimeout(() => {
      isClickScrollingRef.current = false;
      setActiveSection(id);
    }, 1000);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-transparent">
      <div className="section-shell flex h-[74px] items-center justify-between">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, 'home')}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Cezar logo"
            className="h-11 w-11 object-contain drop-shadow-[0_0_18px_rgba(168,85,247,0.45)]"
            draggable={false}
          />

          <span className="text-[22px] font-black tracking-tight text-white">
            Cezar
          </span>
        </a>

        <nav className="hidden items-center gap-9 text-[13px] font-bold lg:flex xl:gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.id)}
                className="group relative transition duration-300"
              >
                <span
                  className={`
                    transition
                    duration-300
                    group-hover:text-violet-300
                    ${
                      isActive
                        ? 'nav-link-active text-violet-300'
                        : 'text-white/72'
                    }
                  `}
                >
                  {item.label}
                </span>

                <span
                  className={`
                    absolute
                    -bottom-[18px]
                    left-1/2
                    h-[4px]
                    w-[4px]
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_14px_rgba(34,211,238,1)]
                    transition
                    duration-300
                    ${
                      isActive
                        ? 'scale-100 opacity-100'
                        : 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-70'
                    }
                  `}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-5">
          <button
            aria-label="Toggle theme"
            className="rounded-full p-2 text-white/70 transition duration-300 hover:bg-white/8 hover:text-white"
          >
            <Moon size={18} strokeWidth={2} />
          </button>

          <button
            aria-label="Open menu"
            className="rounded-full p-2 text-white/70 transition duration-300 hover:bg-white/8 hover:text-white"
          >
            <Menu size={24} strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  );
}