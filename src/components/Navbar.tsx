import { useEffect, useState } from "react";
import { Menu, X, Moon } from "lucide-react";

const navItems = [
  "about",
  "projects",
  "skills",
  "experience",
  "contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const height = section.clientHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-slate-900/70 border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <a
          href="#home"
          className="display-font text-2xl font-bold"
        >
          VP
        </a>

        {/* Desktop */}

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`capitalize transition ${
                active === item
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}

          <button className="p-2 rounded-lg border border-slate-700">
            <Moon size={18} />
          </button>
        </nav>

        {/* Mobile */}

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden backdrop-blur-xl bg-slate-900/90">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className="block p-5 capitalize"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}