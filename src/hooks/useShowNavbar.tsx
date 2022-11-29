import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useShowNavbar = () => {
  const [showNav, setShowNav] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/intro") {
      setShowNav(false);
    } else if (location.pathname === "/snakeGame") {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location.pathname]);

  return { showNav };
};
