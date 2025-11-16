import { ArrowDown } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div
          className="overflow-hidden"
          style={{
            opacity: Math.max(1 - scrollY / 500, 0),
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-stone-900 mb-6 animate-fade-up">
            Adeyinka
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-stone-900 mb-8 animate-fade-up animation-delay-200">
            Tomisin
          </h1>
          <p className="text-lg md:text-xl font-light text-stone-600 tracking-wide max-w-2xl mx-auto mb-12 animate-fade-up animation-delay-400">
            Software Developer | Full-Stack | Problem Solver
          </p>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-stone-50 text-sm tracking-widest uppercase font-light hover:bg-stone-800 transition-all duration-300 animate-fade-up animation-delay-600 group"
          >
            Explore Work
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        style={{
          opacity: Math.max(1 - scrollY / 300, 0),
        }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-stone-400 to-transparent" />
      </div>
    </section>
  );
}
