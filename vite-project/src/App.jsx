import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './Hero';
import Footer from './Footer';
import Content from './Content';
import { gsap } from 'gsap';

function App() {
  const colors = ['#F87516', '#5E11FF'];

  useEffect(() => {
    const animateColors = () => {
      gsap.to('.color', {
        scale: 1.5,
        opacity: 0,
        x: () => Math.random() * 200 - 100,
        y: () => Math.random() * 200 - 100,
        stagger: 0.1,
        delay: 0.5,
        ease: 'power3.out',
        duration: 2,
      });
    };
    animateColors();
  }, []);

  return (
    <>
      <Navbar />
      <div className="background">
        {colors.map((color, index) => (
          <div key={index} className="color-container">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="color"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        ))}
        <Hero />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
