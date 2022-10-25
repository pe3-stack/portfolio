import Particles from "react-tsparticles";

import "./canvas.scss";

const CanvasParticle = () => {
  const particlesInit = (main) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
  };
  return (
      <div>
          <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 64,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.2,
              size: 40,
            },
            push: {
              quantity: 50,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 200,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            enable: true,
            random: false,
            speed: 2,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              value_area: 400,
            },
            value: 60,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
      </div>
    
  );
};

export default CanvasParticle;