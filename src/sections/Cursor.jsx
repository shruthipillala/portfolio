import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const circles = useRef([]);
  const colors = ["#334D5C", "#45B29D", "#EFC94C", "#E27A3F", "#DF5A49"];
  const totalCircles = 15;
  const interactiveCount = 7; // how many react to cursor

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create circles
    for (let i = 0; i < totalCircles; i++) {
      const radius = 5;
      const randomX = Math.random() * (canvas.width - radius * 2) + radius;
      const randomY = Math.random() * (canvas.height - radius * 2) + radius;
      circles.current.push({
        x: randomX,
        y: randomY,
        radius,
        color: colors[i % colors.length],
        dx: (Math.random() - 0.9) * 2,
        dy: (Math.random() - 0.9) * 2,
        isInteractive: i < interactiveCount, // first few are interactive
      });
    }

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const updateCircle = (circle) => {
      circle.x += circle.dx;
      circle.y += circle.dy;

      // Bounce off canvas edges
      if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
        circle.dx = -circle.dx;
      }
      if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
        circle.dy = -circle.dy;
      }

      // Add cursor interaction for some circles
      if (circle.isInteractive && mouse.current.x && mouse.current.y) {
        if (circle.x + circle.radius * 2 > mouse.current.x) {
          circle.dx -= 0.5;
        }
        if (circle.x < mouse.current.x - circle.radius * 2) {
          circle.dx += 0.75;
        }
        if (circle.dx > 2) circle.dx -= 0.5;

        if (circle.y + circle.radius * 2 > mouse.current.y + circle.radius) {
          circle.dy -= 0.5;
        }
        if (circle.y < mouse.current.y - circle.radius * 2) {
          circle.dy += 0.75;
        }
        if (circle.dy > 2) circle.dy -= 0.5;
      }
    };

    const renderCircle = (circle) => {
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
      ctx.fillStyle = circle.color;
      ctx.strokeStyle = circle.color;
      ctx.fill();
      ctx.stroke();
    };

    const animate = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      circles.current.forEach((circle) => {
        updateCircle(circle);
        renderCircle(circle);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default Cursor;
