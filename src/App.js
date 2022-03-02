
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
import Card from "./components/ProjectCards/Cards";


function App() {
  return (
    <div>
      <Navbar sticky="top" />
      <Header />
      <About />
      <Card />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
