// src/components/ParticlesBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // use slim for smaller bundle

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine); // use slim for basic effects
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "#ffffff"
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ["#de0f66", "#ffb3c6", "#f4a261", "#c3aed6"]
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.8,
            random: true
          },
          size: {
            value: { min: 2, max: 4 }
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outMode: "out"
          },
          links: {
            enable: true,
            distance: 150,
            color: "#d291bc",
            opacity: 0.4,
            width: 1
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              quantity: 4
            }
          }
        }
      }}
    />
  );
};

export default ParticlesBackground;
