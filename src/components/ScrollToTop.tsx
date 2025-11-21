import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ScrollToTopProps {
  scrollY: number;
}

export default function ScrollToTop({ scrollY }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(scrollY > 500);
  }, [scrollY]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-8 right-8 z-30 p-4 bg-stone-900 text-stone-50 rounded-full hover:bg-stone-800 transition-all duration-300 group ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp
        size={20}
        className="group-hover:-translate-y-1 transition-transform duration-300"
      />
    </button>
  );
}
