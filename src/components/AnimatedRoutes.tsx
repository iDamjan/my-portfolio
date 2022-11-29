import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import IntroPage from "../pages/intro/IntroPage";
import SnakeGame from "../pages/snakeGame/SnakeGame";
import HomePage from "../pages/home/HomePage";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import { AnimatePresence } from "framer-motion";
import Skills from "../pages/skills/Skills";
import Navbar from "../components/navbar/Navbar";
import { useShowNavbar } from "../hooks/useShowNavbar";

export const AnimatedRoutes = () => {

  const location = useLocation();
  const {showNav} = useShowNavbar();

  return (
    <AnimatePresence>
      {showNav && <Navbar />}

      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<Navigate to="/intro" />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/snakeGame" element={<SnakeGame />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
};
