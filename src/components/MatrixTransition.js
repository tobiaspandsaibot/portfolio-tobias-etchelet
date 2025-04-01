import React, { useEffect, useRef } from 'react';
import './MatrixTransition.css';

const MatrixTransition = ({ isActive, onTransitionComplete }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Caracteres Matrix
    const matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const characters = matrix.split("");
    
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Array de posiciones Y para cada columna
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }
    
    let frameCount = 0;
    const maxFrames = 150; // Duración aproximada de la animación

    const drawMatrix = () => {
      // Fondo negro semi-transparente para crear el efecto de desvanecimiento
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Color verde para los caracteres
      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px monospace";
      
      for (let i = 0; i < drops.length; i++) {
        // Carácter aleatorio para dibujar
        const char = characters[Math.floor(Math.random() * characters.length)];
        // Posición x = i * fontSize, y = valor en el array drops[i]
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        // Incrementar la posición y para que vaya cayendo
        drops[i]++;
        
        // Reiniciar la posición y al azar cuando llegue abajo o aleatoriamente para algunas columnas
        if (drops[i] * fontSize > canvas.height || Math.random() > 0.99) {
          drops[i] = 0;
        }
      }
      
      frameCount++;
      
      // Control de fin de animación
      if (frameCount < maxFrames) {
        animationRef.current = requestAnimationFrame(drawMatrix);
      } else {
        // Acelerar el desvanecimiento al final
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        if (frameCount >= maxFrames + 30) {
          // Fin de la animación
          if (onTransitionComplete) {
            onTransitionComplete();
          }
        } else {
          animationRef.current = requestAnimationFrame(drawMatrix);
        }
      }
    };
    
    // Inicio de la animación
    animationRef.current = requestAnimationFrame(drawMatrix);

    // Limpieza
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, onTransitionComplete]);

  if (!isActive) return null;

  return (
    <div className="matrix-transition">
      <canvas ref={canvasRef} className="matrix-canvas"></canvas>
    </div>
  );
};

export default MatrixTransition; 