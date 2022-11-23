import Navbar from "../../components/navbar/Navbar";
import { motion } from "framer-motion";
import AboutMeBackground from "../../static/Background-about-me.jpg";
import classes from "./About.module.scss";
import MainContent from "../../components/about-me-content/main-content/MainContent";

export default function About() {
  return (
    <motion.div
      style={{ backgroundImage: `url(${AboutMeBackground})` }}
      initial={{ opacity: 0.1, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={classes.container}
    >
      <Navbar />
      <MainContent />
    </motion.div>
  );
}
