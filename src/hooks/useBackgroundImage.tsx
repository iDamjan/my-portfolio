import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SkillsBackground from "../static/background-skills.jpg";
import HomeBackground from "../static/Background.jpg";
import AboutBackground from "../static/Background-about-me.jpg";

export const useBackgroundImage = () => {
  const [background, setBackground] = useState("");
  const { pathname } = useLocation();
  useEffect(() => {

    if (pathname === "/home") {
      setBackground(HomeBackground);
    } else if (pathname === "/about") {
      setBackground(AboutBackground);
    } else if (pathname === "/skills") {
      setBackground(SkillsBackground);
    } else setBackground("");
  }, [pathname])
  
  return {background}
};
