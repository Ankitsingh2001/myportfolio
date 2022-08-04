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
            enable: true,
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
          value: ["#7a57eb","#38ebc9","#50c0e3"],
        },
        links: {
          color: "#ffdd40",
          distance: 150,
          enable: false,
          opacity: 0.5,
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
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 500,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: ["circle","star","edge","triangle"],
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    
}