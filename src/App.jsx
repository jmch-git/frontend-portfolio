
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// IMPORT COMPONENTS
//import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About/About";
import SkillsList from "./components/Skills/SkillsList";
import Footer from './components/Footer';
import Projects from "./components/ProjectCards/Projects";


function App() {
  return (
    <div>
      <Navbar sticky="top" />
      <Header />
      <About />
      <Projects />
      <SkillsList />
      <Footer />
    </div>
  );
}

export default App;
