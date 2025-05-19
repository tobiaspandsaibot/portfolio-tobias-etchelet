import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const interBubbleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const interBubble = interBubbleRef.current;
    const container = containerRef.current;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    let animationFrame = null;

    // Calcular la distancia del mouse al centro del contenedor
    const calculateDistance = (mouseX, mouseY) => {
      const centerX = container.offsetWidth / 2;
      const centerY = container.offsetHeight / 2;
      return Math.sqrt(
        (mouseX - centerX) ** 2 +
        (mouseY - centerY) ** 2
      );
    };

    // Calcular el brillo basado en la distancia
    const calculateBrightness = (distance) => {
      const maxDistance = Math.sqrt(container.offsetWidth ** 2 + container.offsetHeight ** 2);
      const ratio = distance / maxDistance;
      // El brillo varía de 0.2 (más oscuro) a 1 (más brillante)
      return 1 - ratio * 0.8;
    };

    const move = () => {
      curX += (tgX - curX) / 10; // Acelerar el seguimiento
      curY += (tgY - curY) / 10;
      
      if (interBubble) {
        const distance = calculateDistance(tgX, tgY);
        const brightness = calculateBrightness(distance);
        
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px) scale(${brightness})`;
        interBubble.style.opacity = brightness;
      }
      
      animationFrame = requestAnimationFrame(move);
    };

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="gradient-bg" ref={containerRef}>
      <svg 
        viewBox="0 0 100vw 100vh"
        xmlns='http://www.w3.org/2000/svg'
        className="noiseBg"
      >
        <filter id='noiseFilterBg'>
          <feTurbulence 
            type='fractalNoise'
            baseFrequency='0.6'
            stitchTiles='stitch' 
          />
        </filter>
        <rect
          width='100%'
          height='100%'
          preserveAspectRatio="xMidYMid meet"
          filter='url(#noiseFilterBg)'
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" className="svgBlur">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive" ref={interBubbleRef}></div>
      </div>
    </div>
  );
};

export default InteractiveBackground;
