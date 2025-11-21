import { Menu, X, Download, FileText } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  scrollY: number;
}

export default function Navigation({ scrollY }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = scrollY > 50;

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'bg-stone-50/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            className="text-xl font-light tracking-wider text-stone-900"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            cy.get(Tomisin)
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-light tracking-wide text-stone-700 hover:text-stone-900 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-900 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-stone-300">
              <a
                href="https://resume.io/r/jdrlgivmJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-light tracking-wide text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-all duration-300 rounded"
              >
                <FileText size={16} />
                Resume
              </a>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-stone-900 transition-transform duration-300"
            style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 bg-stone-50/95 backdrop-blur-md border-t border-stone-200">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block py-3 text-stone-700 hover:text-stone-900 transition-all duration-300"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {link.name}
            </a>
          ))}
          <div className="border-t border-stone-200 pt-4 mt-4 space-y-2">
            <a
              href="https://resume.io/r/jdrlgivmJ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 text-stone-700 hover:text-stone-900 transition-all duration-300"
            >
              <FileText size={16} />
              Resume
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 py-3 text-stone-700 hover:text-stone-900 transition-all duration-300"
            >
              <Download size={16} />
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
