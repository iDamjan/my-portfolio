import React from "react";
import classes from "./Navbar.module.scss";
import Logo from "../../static/Logodamjan.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {MobileDrawer} from "./MobileDrawer";

export default function Navbar() {
  const pages = [
    { label: "Home", path: "/home" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
  ];
  const navigate = useNavigate();

  const location = useLocation();
  const { pathname } = location;


  return (
    <div className={classes.main}>
      <img onClick={() => navigate("intro")} src={Logo} alt="Logo" />
      <div className={classes.navigation}>
        {pages.map((page) => {
          return (
            <div key={page.label} className={classes.linkContainer}>
              <NavLink
                to={page.path}
                className={
                  pathname === page.path ? classes.active : classes.link
                }
              >
                {page.label}
              </NavLink>
            </div>
          );
        })}
      </div>
     <MobileDrawer />
    </div>
  );
}
