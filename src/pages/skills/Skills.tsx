import Navbar from "../../components/navbar/Navbar";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div
    initial={{ opacity: 0.1, scale: 0.4 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}>
      <Navbar />
      <h1>Skills</h1>
    </motion.div>
  );
}
