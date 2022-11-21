import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import IntroPage from "./pages/intro/IntroPage";
import SnakeGame from "./pages/snakeGame/SnakeGame";
import HomePage from './pages/home/HomePage'
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <Routes>
      <Route path = "*" element ={<Navigate to="/Intro" />} />
      <Route path = "/Intro" element ={<IntroPage />} />
      <Route path = "/snakeGame" element ={<SnakeGame />} />
      <Route path = "/Home" element ={<HomePage />} />
      <Route path = "/About" element ={<About />} />
      <Route path = "/Projects" element ={<Projects/>} />
    </Routes>
  );
}

export default App;
