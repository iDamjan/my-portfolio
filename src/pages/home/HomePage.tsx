import MainContent from "../../components/homeContent/MainContent";
import Navbar from "../../components/navbar/Navbar";
import classes from "./HomePage.module.scss";
import { motion } from "framer-motion";
import { ContactIcons } from "../../components/homeContent/contact-icons/ContactIcons";


export default function HomePage() {
  
  return (
    <motion.div
      className={classes.container}
      initial={{ opacity: 0.1, scale:0.4 }}
      animate={{ opacity: 1, scale: 1}}
      transition={{ duration: 0.3 }}
    >
      <ContactIcons />
      <MainContent />
    </motion.div>
  );
}
