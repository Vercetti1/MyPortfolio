import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
    { icon: Mail, label: 'Email', href: 'mailto:tomisinadeyinka352@gmail.com' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xl font-light tracking-wider hover:text-stone-300 transition-colors duration-300"
            >
              Adeyinka Tomisin
            </a>
            <p className="text-sm font-light text-stone-400 mt-2 tracking-wide">
              Software Developer | Full-Stack | Problem Solver
            </p>
          </div>

          <div>
            <h3 className="text-sm tracking-widest uppercase font-light mb-4">Navigation</h3>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block text-sm font-light text-stone-400 hover:text-stone-50 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm tracking-widest uppercase font-light mb-4">Connect</h3>
            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-stone-50 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-light text-stone-500 tracking-wide">
              © {currentYear} Adeyinka Tomisin. All rights reserved.
            </p>
            <p className="text-xs font-light text-stone-500 tracking-wide">
              Designed & Built with React + TypeScript + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
