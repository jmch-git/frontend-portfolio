
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// IMPORT COMPONENTS
//import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About/About";
import Projects from "./components/ProjectCards/Projects";
import Skills from "./components/Skills";
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
