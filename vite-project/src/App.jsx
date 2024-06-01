import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './Hero';
import Footer from './Footer';
import Content from './Content';
import { gsap } from 'gsap';

function App() {
  const colors = ['#F87516', '#5E11FF', '#FF5733', '#C70039', '#900C3F', '#581845'];

  useEffect(() => {
    const animateColors = () => {
      gsap.fromTo('.flower-petal', 
        {
          scale: 0,
          opacity: 1,
          x: 0,
          y: 0
        }, 
        {
          scale: 1.5,
          opacity: 0,
          x: () => Math.random() * 800 - 400,
          y: () => Math.random() * 800 - 400,
          stagger: 0.1,
          delay: 0.5,
          ease: 'power3.out',
          duration: 2,
        }
      );
    };
    animateColors();
  }, []);

  const createExplosion = (index) => {
    const top = Math.random() * 80 + 10; // random position between 10% and 90% vertically
    const left = Math.random() * 80 + 10; // random position between 10% and 90% horizontally
    return (
      <div key={index} className="flower-bouquet" style={{ top: `${top}%`, left: `${left}%` }}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flower-petal" style={{ backgroundColor: colors[i % colors.length] }} />
        ))}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="background">
        {[...Array(5)].map((_, index) => createExplosion(index))}
        <Hero />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
