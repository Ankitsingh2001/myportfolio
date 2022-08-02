import "./App.scss";
import { Routes, Route} from "react-router-dom";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Project from "./containers/projects";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
// import particles from "./utils.js/particles";
function App() {
// const location = useLocation();

  // const handleInit = async (main)=>{
  //   await loadFull(main)
  // }
  
  // const renderParticlesJsInHomePage = location.pathname === '/';
  return (
    <div className="App">
      {/* particle js */}
      {/* {
        renderParticlesJsInHomePage &&(
          <Particles id="particles" options={particles} init={handleInit}/>
        )
      } */}
      {/* navBar */}
     <Navbar/>
      {/* main page content */}
      <div className="App__main-page-content" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes> 
      </div>
    </div>
  );
}

export default App;
