import MainContent from "../../components/homeContent/MainContent";
import Navbar from "../../components/navbar/Navbar";
import classes from "./HomePage.module.scss";
import HomeBackground from "../../static/Background.jpg";
import { motion } from "framer-motion";
import { ContactIcons } from "../../components/homeContent/contact-icons/ContactIcons";

export default function HomePage() {

  return (

    <motion.div
      style={{ backgroundImage: `url(${HomeBackground})` }}
      className={classes.container}
      initial={{ opacity: 0.1, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <MainContent />
      <ContactIcons />
    </motion.div>
  );
}
