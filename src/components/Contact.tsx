import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' },
];

export default function Contact() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-stone-900">
      <div className="max-w-4xl mx-auto text-center">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-stone-50 mb-8 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-lg font-light text-stone-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hello, feel free to reach out.
          </p>

          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-stone-50 text-stone-900 text-sm tracking-widest uppercase font-light hover:bg-stone-200 transition-all duration-300 mb-16 group"
          >
            Get In Touch
            <Mail size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <div className="flex justify-center gap-8 mb-16">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label={social.label}
                >
                  <Icon
                    size={24}
                    className="text-stone-400 group-hover:text-stone-50 transition-all duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                </a>
              );
            })}
          </div>

          <div className="pt-12 border-t border-stone-800">
            <p className="text-sm font-light text-stone-600 tracking-wide">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
