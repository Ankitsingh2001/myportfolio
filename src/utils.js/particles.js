export default {
    background: {
        color: {
          value: "#1d1d1d",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 20,
            duration: 1,
          },
        },
      },
      particles: {
        color: {
          value: ["#f7c852"," #dbd951","#c8e34f"],
        },
        links: {
          color: ["#f7c852"," #dbd951","#c8e34f"],
          distance: 100,
          enable:true,
          opacity: 0.3,
          width: 1,
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2.5,
          straight: true,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 150,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: ["circle","star","edge","triangle"],
        },
        size: {
          value: { min: 3, max: 5 },
        },
      },
      detectRetina: true,
    
}