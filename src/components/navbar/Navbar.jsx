import React from "react";
import classes from "./Navbar.module.scss";
import Logo from "../../static/Logodamjan.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const pages = ["Home", "About", "Skills", "Projects"];
  const navigate = useNavigate();

  const location = useLocation();
  const { pathname } = location;
  const splitLocationName = pathname.split("/");

  return (
    <div className={classes.main}>
      <img onClick = {() => navigate("/Intro")}src={Logo} alt="Logo" />
      <div className={classes.navigation}>
        {pages.map((page) => {
          return (
            <NavLink
            key = {page}
              to={`/${page}`}
              className={
                splitLocationName[1] === page ? classes.active : classes.link
              }
            >
              {page}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
