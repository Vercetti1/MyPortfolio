import { ExternalLink, Github } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import geminiImg from '../assets/gemini.png';
import foodieImg from '../assets/Foodie.png';
import ticTacToeImg from '../assets/tic-tac-toe.png';
import vercettiInc from "../assets/VercettiInc.png";
import twallet from '../assets/T-wallet.png'
import reacttoquiz from '../assets/reactquiz.png'
import lagosrideapp from '../assets/lagosrideapp.png'

const projects = [
  {
    title: 'Lagos Ride App',
    description: "Introducing Lagos Ride, your ultimate ride-hailing app for seamless travel across Lagos. With real-time tracking, secure payments, and a user-friendly interface, Lagos Ride ensures you reach your destination safely and efficiently. Experience the future of urban mobility with Lagos Ride – where every journey matters.",
    tech: ['Next.js', 'API'],
    github: 'https://github.com/Vercetti1/lagos-ride-app.git',
    live: 'https://lagosride.netlify.app',
    image: lagosrideapp,
  },
  {
    title: 'Gemini AI Clone',
    description: "Introducing Gemini 2.0, integrated with Google's API",
    tech: ['React.js', 'API'],
    github: 'https://github.com/Vercetti1/Gemini-Powered-Chatbot-main.git',
    live: 'https://tomisin-gemini.netlify.app',
    image: geminiImg,
  },
  {
    title: 'Foodie',
    description: 'Foodie, your food companion',
    tech: ['React.js', 'Tailwind'],
    github: 'https://github.com/Vercetti1/Foodie.git',
    live: 'https://thefoodie1.netlify.app/',
    image: foodieImg,
  },
  {
    title: 'Vercetti Inc',
    description: 'Features services rendered by the dev Vercetti.',
    tech: ['ReactJS', 'TailwindCSS'],
    github: 'https://github.com/Vercetti1/VercettiInc.git',
    live: 'https://vercetti-inc.netlify.app/',
    image: vercettiInc,
  },
  {
    title: 'TIC-TAC-TOE',
    description: 'Interactive tic-tac-toe game built with React, featuring AI opponent and responsive design.',
    tech: ['React.js', 'JavaScript', 'TailwindCSS'],
    github: 'https://github.com/Vercetti1/07-tic-tac-toe-starting-project.git',
    live: 'https://tictacproject.netlify.app',
    image: ticTacToeImg,
  },

  {
    title: 'React Quiz App',
    description: 'Interactive React Quiz built with React and responsive design.',
    tech: ['React.js', 'JavaScript', 'TailwindCSS'],
    github: 'https://github.com/Vercetti1/React-Quiz-App-.git',
    live: 'https://reacttoquiz.netlify.app/',
    image: reacttoquiz,
  },

  {
    title: 'Wallet SignUp and Login UI',
    description: 'Interactive tic-tac-toe game built with React, featuring AI opponent and responsive design.',
    tech: ['React.js', 'JavaScript', 'TailwindCSS'],
    github: '#',
    live: 'https://t-wallet.netlify.app/',
    image: twallet,
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
            <ProjectCard key={project.title} project={project} index={index} />
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
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
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
