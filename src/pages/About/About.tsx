import Navbar from "../../components/navbar/Navbar";
import { motion } from "framer-motion";
import AboutMeBackground from "../../static/Background-about-me.jpg";
import classes from "./About.module.scss";
import MainContent from "../../components/about-me-content/main-content/MainContent";

export default function About() {
  return (
    <div
      style={{ backgroundImage: `url(${AboutMeBackground})` }}
      className={classes.container}
    >
      <Navbar />
      <MainContent />
    </div>
  );
}
