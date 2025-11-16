import { Code2, Database, Globe, Palette, Server, Smartphone } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    items: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    items: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs', 'GraphQL'],
  },
  {
    icon: Database,
    title: 'Database & Cloud',
    items: ['SQL', 'MongoDB', 'AWS', 'Docker', 'Redis'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    items: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA'],
  },
  {
    icon: Palette,
    title: 'Design & UX',
    items: ['Figma', 'UI/UX', 'Responsive Design', 'Animations', 'Accessibility'],
  },
  {
    icon: Globe,
    title: 'Tools & Others',
    items: ['Git', 'CI/CD', 'Testing', 'Agile', 'Linux'],
  },
];

export default function Skills() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="skills" className="py-32 px-6 lg:px-12 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-stone-900 mb-6 tracking-tight">
            Skills & Expertise
          </h2>
          <div className="w-20 h-px bg-stone-900" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const Icon = skill.icon;

  return (
    <div
      ref={ref}
      className={`group p-8 bg-stone-100 hover:bg-stone-900 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Icon
        size={32}
        className="text-stone-900 group-hover:text-stone-50 transition-colors duration-500 mb-6"
        strokeWidth={1.5}
      />
      <h3 className="text-xl font-light text-stone-900 group-hover:text-stone-50 mb-4 tracking-tight transition-colors duration-500">
        {skill.title}
      </h3>
      <ul className="space-y-2">
        {skill.items.map((item, i) => (
          <li
            key={i}
            className="text-sm font-light text-stone-600 group-hover:text-stone-300 tracking-wide transition-colors duration-500"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
