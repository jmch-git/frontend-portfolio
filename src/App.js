
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// IMPORT COMPONENTS
//import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
//import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
