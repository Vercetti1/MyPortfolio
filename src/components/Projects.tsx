import { ExternalLink, Github } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack application built with modern technologies, featuring real-time updates and seamless user experience.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project Two',
    description: 'Mobile-first e-commerce platform with advanced filtering, secure payments, and inventory management.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project Three',
    description: 'AI-powered analytics dashboard providing actionable insights with beautiful data visualizations.',
    tech: ['Python', 'React', 'TensorFlow', 'D3.js'],
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="projects" className="py-32 px-6 lg:px-12 bg-stone-100">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-stone-900 mb-6 tracking-tight">
            Selected Work
          </h2>
          <div className="w-20 h-px bg-stone-900" />
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="grid md:grid-cols-5 gap-8 items-center">
        <div className={`md:col-span-3 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
          <div className="relative aspect-video bg-gradient-to-br from-stone-300 to-stone-400 rounded-sm overflow-hidden group-hover:shadow-2xl transition-shadow duration-500">
            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors duration-500 flex items-center justify-center text-stone-500 text-sm tracking-wider">
              Project preview
            </div>
          </div>
        </div>

        <div className={`md:col-span-2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
          <h3 className="text-3xl font-light text-stone-900 mb-4 tracking-tight">
            {project.title}
          </h3>
          <p className="text-stone-700 font-light leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs tracking-wider text-stone-700 border border-stone-300 font-light"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.github}
              className="inline-flex items-center gap-2 text-sm text-stone-900 hover:text-stone-600 transition-colors duration-300 group/link"
            >
              <Github size={18} />
              <span className="tracking-wide">Code</span>
              <div className="w-0 h-px bg-stone-900 group-hover/link:w-full transition-all duration-300" />
            </a>
            <a
              href={project.live}
              className="inline-flex items-center gap-2 text-sm text-stone-900 hover:text-stone-600 transition-colors duration-300 group/link"
            >
              <ExternalLink size={18} />
              <span className="tracking-wide">Live</span>
              <div className="w-0 h-px bg-stone-900 group-hover/link:w-full transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
