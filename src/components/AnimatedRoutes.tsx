import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import IntroPage from "../pages/intro/IntroPage";
import SnakeGame from "../pages/snakeGame/SnakeGame";
import HomePage from "../pages/home/HomePage";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import { AnimatePresence } from "framer-motion";
import Skills from "../pages/skills/Skills";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<Navigate to="/Intro" />} />
        <Route path="/Intro" element={<IntroPage />} />
        <Route path="/snakeGame" element={<SnakeGame />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
};
