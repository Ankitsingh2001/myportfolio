import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particles from "../utils.js/particles";

const particleBackground= () => {

    const particlesInit = async (main) => {
      await loadFull(main);
    };
  
  
  //   const particlesLoaded = (container) => {
  //     console.log(container);
  //   };
  
    return (
      <Particles id="particles" options={particles} init={particlesInit} />
    );
  };
  
  export default particleBackground;