import React, { useEffect, useRef, useState } from 'react';

const BubbleGame = () => {
  const canvasRef = useRef(null);
  const [scoreCount, setScoreCount] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let bubbleArray = [];
    let clickEventArray = [];
    let animationId;

    class Bubble {
      constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
      }

      draw() {
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fill();
      }

      update() {
        this.draw();
        this.radius += 0.5;
      }
    }

    class ClickEvent {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.color = "green";
      }
    }

    const getBubble = () => {
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let radius = 20;
      let color ='#68cc83';
      bubbleArray.push(new Bubble(x, y, radius, color));
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);
      bubbleArray.forEach((bubble) => bubble.update());

      clickEventArray.forEach((click, clickIndex) => {
        bubbleArray.forEach((bubble, bubbleIndex) => {
          let dist = Math.hypot(click.x - bubble.x, click.y - bubble.y);
          if ((dist - bubble.radius - click.radius) < 20) {
            console.log('pop');
            bubbleArray.splice(bubbleIndex, 1);
            clickEventArray.splice(clickIndex, 1);
            setScoreCount((prev) => prev + 1);
          }
        });
      });
    };

    // Add event listener for clicks
    const handleClick = (event) => {
      clickEventArray.push(new ClickEvent(event.clientX, event.clientY));
    };

    canvas.addEventListener('click', handleClick);

    // Generate bubbles every 500ms
    const interval = setInterval(getBubble, 2000);

    // Start the animation
    animate();

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(interval);
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
      <div>Score: {scoreCount}</div>
    </div>
  );
};

export default BubbleGame;