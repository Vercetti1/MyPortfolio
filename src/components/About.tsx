import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-extralight text-stone-900 mb-6 tracking-tight">
              About Me
            </h2>
            <div className="w-20 h-px bg-stone-900 mb-8" />
            <p className="text-lg font-light text-stone-700 leading-relaxed mb-6">
              I'm a software developer passionate about building elegant solutions to complex problems.
              With a focus on clean code and user-centric design, I transform ideas into functional,
              beautiful applications.
            </p>
            <p className="text-lg font-light text-stone-700 leading-relaxed mb-6">
              My approach combines technical expertise with creative thinking, ensuring every project
              not only meets requirements but exceeds expectations.
            </p>
            <p className="text-lg font-light text-stone-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source,
              or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-300 rounded-sm overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-stone-400 text-sm tracking-wider">
                Your photo here
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-stone-300 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
