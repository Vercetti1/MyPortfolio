import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const experiences = [
  {
    year: '2024 - Present',
    title: 'Full-Stack Developer',
    company: 'Independent',
    description: 'Building web applications and contributing to open-source projects. Specializing in React, Node.js, and modern web technologies.',
  },
  {
    year: '2023 - 2024',
    title: 'Frontend Developer',
    company: 'Tech Startup',
    description: 'Developed responsive user interfaces using React and TypeScript. Collaborated with design and backend teams to deliver scalable solutions.',
  },
  {
    year: '2022 - 2023',
    title: 'Junior Developer',
    company: 'Web Solutions Inc',
    description: 'Started development journey building websites with HTML, CSS, and JavaScript. Learned industry best practices and version control.',
  },
];

export default function Experience() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="experience" className="py-32 px-6 lg:px-12 bg-stone-100">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-stone-900 mb-6 tracking-tight">
            Experience
          </h2>
          <div className="w-20 h-px bg-stone-900" />
        </div>

        <div className="space-y-12 relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-stone-900 via-stone-400 to-transparent" />

          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
  index,
  isVisible,
}: {
  experience: (typeof experiences)[0];
  index: number;
  isVisible: boolean;
}) {
  const [ref, cardIsVisible] = useIntersectionObserver({ threshold: 0.3 });
  const visible = isVisible || cardIsVisible;

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className={`md:flex gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className="md:w-1/2 relative">
          <div className="absolute left-0 md:left-auto top-2 w-4 h-4 bg-stone-900 rounded-full -translate-x-1.5 md:translate-x-1.5" />
          <div className="md:text-right md:pr-12">
            <div className="text-sm font-light text-stone-600 tracking-widest uppercase mb-2">
              {experience.year}
            </div>
            <h3 className="text-2xl font-light text-stone-900 mb-1 tracking-tight">
              {experience.title}
            </h3>
            <p className="text-lg font-light text-stone-700 mb-4">{experience.company}</p>
          </div>
        </div>

        <div className="md:w-1/2 md:pl-12">
          <p className="text-base font-light text-stone-700 leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>
    </div>
  );
}
