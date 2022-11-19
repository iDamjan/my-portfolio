import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import IntroPage from "./pages/intro/IntroPage";
import SnakeGame from "./pages/snakeGame/SnakeGame";
import HomePage from './pages/home/HomePage'

function App() {
  return (
    <Routes>
      <Route path = "*" element ={<Navigate to="/Intro" />} />
      <Route path = "/Intro" element ={<IntroPage />} />
      <Route path = "/SnakeGame" element ={<SnakeGame />} />
      <Route path = "/Home" element ={<HomePage />} />
    </Routes>
  );
}

export default App;
